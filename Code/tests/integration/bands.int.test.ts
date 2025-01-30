import request from 'supertest'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import app from '../../src/app.js'
import prisma from '../../src/db/prisma.js'

describe('Bands Route (Integration Tests)', () => {
  beforeAll(async () => {
    await prisma.album.deleteMany({})
    await prisma.band.deleteMany({})
    await prisma.genre.deleteMany({})
    await prisma.label.deleteMany({})

    const rock = await prisma.genre.create({ data: { name: 'Rock' } })

    await prisma.label.create({ data: { name: 'Test Label' } })

    await prisma.band.create({
      data: {
        name: 'Integration Band',
        foundingDate: new Date('2000-01-01'),
        members: 4,
        genreId: rock.id,
      },
    })
  })

  afterAll(async () => {
    await prisma.album.deleteMany({})
    await prisma.band.deleteMany({})
    await prisma.genre.deleteMany({})
    await prisma.label.deleteMany({})
    await prisma.$disconnect()
  })

  beforeEach(async () => {})

  it('GET /bands should return existing bands', async () => {
    const res = await request(app).get('/bands')
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.length).toBeGreaterThan(0)

    const names = res.body.data.map((b: any) => b.name)
    expect(names).toContain('Integration Band')
  })

  it('POST /bands should create a new band', async () => {
    const [someGenre] = await prisma.genre.findMany({})
    const payload = {
      name: 'Another Integration Band',
      foundingDate: '2010-01-01',
      members: 5,
      genreId: someGenre.id,
      albums: [],
    }

    const res = await request(app).post('/bands').send(payload)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.name).toBe('Another Integration Band')

    const found = await prisma.band.findFirst({
      where: { name: 'Another Integration Band' },
    })
    expect(found).not.toBeNull()
    expect(found?.members).toBe(5)
  })
})
