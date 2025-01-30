import { Server } from 'http'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import prisma from '../../src/db/prisma.js'
import app from '../../src/index.js'

let server: Server
let baseURL: string

describe('E2E Tests for Bands & Albums', () => {
  beforeAll(async () => {
    server = app.listen(0, () => {
      const address = server.address()
      if (typeof address === 'object' && address?.port) {
        baseURL = `http://localhost:${address.port}`
      } else {
        throw new Error('Unable to start test server on a random port.')
      }
    })

    await prisma.album.deleteMany({})
    await prisma.band.deleteMany({})
    await prisma.genre.deleteMany({})
    await prisma.label.deleteMany({})

    const rock = await prisma.genre.create({ data: { name: 'Rock' } })
    const label = await prisma.label.create({ data: { name: 'E2E Label' } })
    await prisma.band.create({
      data: {
        name: 'E2E Band One',
        foundingDate: new Date('2001-01-01'),
        members: 4,
        genreId: rock.id,
        albums: {
          create: [
            {
              title: 'First E2E Album',
              price: 15,
              labelId: label.id,
              releaseDate: new Date('2001-06-01'),
            },
          ],
        },
      },
    })
  })

  afterAll(async () => {
    server.close()
    await prisma.$disconnect()
  })

  it('should respond at GET / with "Hello World!"', async () => {
    const res = await request(baseURL).get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello World!')
  })

  it('GET /bands should return the seeded band', async () => {
    const res = await request(baseURL).get('/bands')
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data).toHaveLength(1)
    expect(res.body.data[0].name).toBe('E2E Band One')
  })

  it('POST /bands should create a new band', async () => {
    const [genre] = await prisma.genre.findMany({ where: { name: 'Rock' } })

    const payload = {
      name: 'E2E Band Two',
      foundingDate: '2010-01-01',
      members: 3,
      genreId: genre.id,
      albums: [],
    }
    const res = await request(baseURL).post('/bands').send(payload)
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      success: true,
      message: 'Band E2E Band Two created successfully',
    })

    const found = await prisma.band.findFirst({
      where: { name: 'E2E Band Two' },
    })
    expect(found).not.toBeNull()
    expect(found?.members).toBe(3)
  })

  it('POST /albums should create a new album for E2E Band One', async () => {
    const payload = {
      title: 'Newest E2E Album',
      releaseDate: '2025-01-01',
      band: 'E2E Band One',
      price: 40,
      label: 'E2E Label',
    }
    const res = await request(baseURL).post('/albums').send(payload)
    expect(res.status).toBe(200)
    expect(res.body.title).toBe('Newest E2E Album')

    const album = await prisma.album.findFirst({
      where: { title: 'Newest E2E Album' },
      include: { band: true, label: true },
    })
    expect(album).not.toBeNull()
    expect(album?.band?.name).toBe('E2E Band One')
    expect(album?.label?.name).toBe('E2E Label')
  })
})
