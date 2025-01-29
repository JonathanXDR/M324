import type { Album, Label } from '@prisma/client'
import axios from 'axios'
import express from 'express'
import request from 'supertest'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from 'vitest'
import prisma from '../../src/db/prisma.js'
import albumsRouter from '../../src/routes/albums.js'

const app = express()
app.use(express.json())
app.use('/albums', albumsRouter)

describe('Albums Router Unit Tests', () => {
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({
      data: {
        success: true,
        data: [
          {
            id: 1,
            name: 'The Beatles',
            genreId: 1,
            foundingDate: new Date('1960-01-01'),
            members: 4,
            dissolutionDate: null,
            albums: [],
          },
          {
            id: 2,
            name: 'Miles Davis Quintet',
            genreId: 2,
            foundingDate: new Date('1955-01-01'),
            members: 5,
            dissolutionDate: new Date('1969-01-01'),
            albums: [],
          },
        ],
      },
    })

    vi.spyOn(prisma.label, 'findFirst').mockResolvedValue({
      id: 1,
      name: 'Sony Music',
    } as Label)

    vi.spyOn(prisma.album, 'create').mockResolvedValue({
      id: 123,
      title: 'Valid Album',
      price: 25,
      releaseDate: new Date('2025-01-01'),
      bandId: 1,
      labelId: 1,
      label: { name: 'Sony Music' },
      band: { name: 'The Beatles' },
    } as Album)
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
    (axios.get as Mock).mockResolvedValueOnce({
      data: { success: true, data: [] },
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

  it('should return 400 if price is negative', async () => {
    const res = await request(app).post('/albums').send({
      title: 'Negative Price',
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: -5,
      label: 'Sony Music',
    })

    expect(res.status).toBe(400)
    expect(res.text).toBe('Price must be positive')
  })

  it('should create an album if all data is valid', async () => {
    const res = await request(app).post('/albums').send({
      title: 'Valid Album',
      releaseDate: '2025-01-01',
      band: 'The Beatles',
      price: 25,
      label: 'Sony Music',
    })

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      id: 123,
      title: 'Valid Album',
      price: 25,
    })

    expect(res.body.label.name).toBe('Sony Music')
    expect(res.body.band.name).toBe('The Beatles')
  })
})
