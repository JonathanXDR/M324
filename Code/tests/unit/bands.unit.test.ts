import express from 'express'
import request from 'supertest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import prisma from '../../src/db/prisma'
import bandsRouter from '../../src/routes/bands'

const app = express()
app.use(express.json())
app.use('/bands', bandsRouter)

describe('Bands Router Unit Tests', () => {
  beforeEach(() => {
    vi.spyOn(prisma.band, 'findMany').mockImplementation(async () => [])
    vi.spyOn(prisma.band, 'create').mockImplementation(async (data: any) => {
      return {
        id: 999,
        ...data.data,
      }
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('GET /bands should return 404 if no bands are found', async () => {
    const res = await request(app).get('/bands')

    expect(prisma.band.findMany).toHaveBeenCalledTimes(1)
    expect(res.status).toBe(404)
    expect(res.body).toEqual({
      success: false,
      data: 'No Bands found! :(',
    })
  })

  it('POST /bands should create a new band with albums', async () => {
    const newBandData = {
      name: 'Test Band',
      foundingDate: '2025-01-01',
      members: 4,
      dissolutionDate: null,
      genreId: 1,
      albums: [
        { title: 'Test Album 1', price: 10, labelId: 1 },
        { title: 'Test Album 2', price: 20, labelId: 2 },
      ],
    }

    const res = await request(app).post('/bands').send(newBandData)

    expect(prisma.band.create).toHaveBeenCalledTimes(1)

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      id: 999,
      name: 'Test Band',
      genreId: 1,
      albums: expect.any(Array),
    })
  })
})
