import { Server } from 'http'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import prisma from '../../src/db/prisma.js'
import app from '../../src/index.js'

let server: Server

describe('Albums Integration Tests', () => {
  beforeAll(async () => {
    server = app.listen(4002)
  })

  afterAll(async () => {
    server.close()
    await prisma.$disconnect()
  })

  it('POST /albums should create a new album with valid data', async () => {
    const res = await request(server).post('/albums').send({
      title: 'Integration Album Test',
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: 30,
      label: 'Sony Music',
    })

    expect(res.status).toBe(200)
    expect(res.body.title).toBe('Integration Album Test')
    expect(res.body.id).toBeTruthy()

    const albumInDb = await prisma.album.findUnique({
      where: { id: res.body.id },
    })
    expect(albumInDb?.title).toBe('Integration Album Test')

    await prisma.album.delete({ where: { id: res.body.id } })
  })

  it('POST /albums should fail with 400 if "title" is missing', async () => {
    const res = await request(server).post('/albums').send({
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: 30,
      label: 'Sony Music',
    })

    expect(res.status).toBe(400)
    expect(res.text).toBe('Title is required')
  })
})
