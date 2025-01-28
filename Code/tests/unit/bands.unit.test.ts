import type { Band } from '@prisma/client'
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
    vi.spyOn(prisma.band, 'findMany').mockResolvedValue([] as Band[])

    vi.spyOn(prisma.band, 'create').mockResolvedValue({
      id: 999,
      name: 'Test Band',
      genreId: 1,
      foundingDate: new Date('2025-01-01'),
      members: 4,
      dissolutionDate: null,
      albums: [
        { title: 'Album A', price: 10, labelId: 1 },
        { title: 'Album B', price: 20, labelId: 2 },
      ],
    } as Band)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('GET /bands should return 404 if no bands found', async () => {
    const res = await request(app).get('/bands')
    expect(res.status).toBe(404)
    expect(res.body).toEqual({
      success: false,
      data: 'No Bands found! :(',
    })
  })

  it('POST /bands should create a band with albums', async () => {
    const newBand = {
      name: 'Test Band',
      foundingDate: '2025-01-01',
      members: 4,
      dissolutionDate: null,
      genreId: 1,
      albums: [
        { title: 'Album A', price: 10, labelId: 1 },
        { title: 'Album B', price: 20, labelId: 2 },
      ],
    }
    const res = await request(app).post('/bands').send(newBand)
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(999)
    expect(res.body.albums.length).toBe(2)
  })
})
