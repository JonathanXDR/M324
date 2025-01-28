import axios from 'axios'
import express from 'express'
import request from 'supertest'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import prisma from '../../src/db/prisma'
import albumsRouter from '../../src/routes/albums'

const app = express()
app.use(express.json())
app.use('/albums', albumsRouter)

describe('Albums Router Unit Tests', () => {
  beforeEach(() => {
    vi.spyOn(prisma.label, 'findFirst').mockImplementation(async (obj) => {
      if (obj?.where && obj.where.name === 'Sony Music') {
        return { id: 1, name: 'Sony Music' }
      }
      return null
    })

    vi.spyOn(prisma.album, 'create').mockImplementation(async (obj) => {
      return {
        id: 123,
        title: obj.data.title,
        releaseDate: obj.data.releaseDate,
        price: obj.data.price,
        labelId: obj.data.labelId,
        bandId: obj.data.bandId,
      }
    })

    vi.spyOn(axios, 'get').mockResolvedValue({
      data: {
        success: true,
        data: [
          { id: 1, name: 'The Beatles' },
          { id: 2, name: 'Miles Davis Quintet' },
        ],
      },
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return 400 if title is missing', async () => {
    const res = await request(app).post('/albums').send({
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: 20,
      label: 'Sony Music',
    })

    expect(res.status).toBe(400)
    expect(res.text).toBe('Title is required')
  })

  it('should return 404 if band not found', async () => {
    ;(axios.get as any).mockResolvedValueOnce({
      data: {
        success: true,
        data: [],
      },
    })

    const res = await request(app).post('/albums').send({
      title: 'Test Title',
      releaseDate: '2025-01-01',
      band: 'Unknown Band',
      price: 10,
      label: 'Sony Music',
    })

    expect(res.status).toBe(404)
    expect(res.text).toBe('Band not found')
  })

  it('should create an album if all data is valid', async () => {
    const res = await request(app).post('/albums').send({
      title: 'Test Title',
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: 25,
      label: 'Sony Music',
    })

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      id: 123,
      title: 'Test Title',
      price: 25,
    })
  })
})
