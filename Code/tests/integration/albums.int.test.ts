import axios from 'axios'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import app from '../../src/app.js'
import prisma from '../../src/db/prisma.js'

describe('Albums Route (Integration Tests)', () => {
  beforeAll(async () => {
    await prisma.album.deleteMany({})
    await prisma.band.deleteMany({})
    await prisma.genre.deleteMany({})
    await prisma.label.deleteMany({})

    const rock = await prisma.genre.create({ data: { name: 'Rock' } })
    const label = await prisma.label.create({
      data: { name: 'Integration Label' },
    })

    expect(label.id).toBeDefined()
    expect(label.name).toBe('Integration Label')

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
    const band = await prisma.band.findFirst({
      where: { name: 'Integration Band For Albums' },
    })

    vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        success: true,
        data: [band],
      },
    })

    const payload = {
      title: 'Integration Album',
      releaseDate: '2023-01-01',
      band: 'Integration Band For Albums',
      price: 25,
      label: 'Integration Label',
    }
    const res = await request(app).post('/albums').send(payload)
    expect(res.status).toBe(200)

    const album = await prisma.album.findFirst({
      where: { title: 'Integration Album' },
      include: { band: true, label: true },
    })
    expect(album).not.toBeNull()
    expect(album?.band?.name).toBe('Integration Band For Albums')
    expect(album?.label?.name).toBe('Integration Label')
  })
})
