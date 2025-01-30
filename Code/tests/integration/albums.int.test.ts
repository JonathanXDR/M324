import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import prisma from '../../src/db/prisma.js'
import app from '../../src/index.js'

describe('Albums Route (Integration Tests)', () => {
  beforeAll(async () => {
    await prisma.album.deleteMany({})
    await prisma.band.deleteMany({})
    await prisma.genre.deleteMany({})
    await prisma.label.deleteMany({})

    const rock = await prisma.genre.create({ data: { name: 'Rock' } })

    await prisma.band.create({
      data: {
        name: 'Integration Band For Albums',
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

  it('should create an album with valid data', async () => {
    const bandsRes = await request(app).get('/bands')
    const bandName = bandsRes.body.data[0].name

    const payload = {
      title: 'Integration Album',
      releaseDate: '2023-01-01',
      band: bandName,
      price: 25,
      label: 'Integration Label',
    }
    const res = await request(app).post('/albums').send(payload)
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      title: 'Integration Album',
      price: 25,
    })

    const album = await prisma.album.findFirst({
      where: { title: 'Integration Album' },
      include: { band: true, label: true },
    })
    expect(album).not.toBeNull()
    expect(album?.band?.name).toBe('Integration Band For Albums')
    expect(album?.label?.name).toBe('Integration Label')
  })
})
