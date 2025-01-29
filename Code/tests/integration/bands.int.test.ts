import { Server } from 'http'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import prisma from '../../src/db/prisma.js'
import app from '../../src/index.js'

let server: Server

describe('Bands Integration Tests', () => {
  beforeAll(async () => {
    server = app.listen()
  })

  afterAll(async () => {
    server.close()
  })

  it('GET /bands should return an array of bands', async () => {
    const res = await request(server).get('/bands')
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it('POST /bands should insert a band with associated albums', async () => {
    const data = {
      name: 'Integration Test Band',
      foundingDate: '2025-01-01',
      members: 3,
      dissolutionDate: null,
      genreId: 1,
      albums: [{ title: 'Integration Album', price: 100, labelId: 1 }],
    }
    const res = await request(server).post('/bands').send(data)
    expect(res.status).toBe(200)

    expect(res.body).toMatchObject({
      name: 'Integration Test Band',
      albums: expect.any(Array),
    })

    const bandId = res.body.id
    await prisma.band.delete({ where: { id: bandId } })
  })
})
