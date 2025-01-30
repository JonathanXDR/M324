import { Band } from '@prisma/client'
import express from 'express'
import request from 'supertest'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import prisma from '../../src/db/prisma.js'
import bandRouter from '../../src/routes/bands.js'

function createTestApp () {
  const app = express()
  app.use(express.json())
  app.use('/bands', bandRouter)
  return app
}

describe('Bands Route (Unit Tests)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('GET /bands', () => {
    it('should return 400 if no bands found', async () => {
      vi.spyOn(prisma.band, 'findMany').mockResolvedValueOnce([])

      const app = createTestApp()
      const res = await request(app).get('/bands')
      expect(res.status).toBe(400)
      expect(res.body).toEqual({
        success: false,
        data: 'Band is required',
      })
    })

    it('should return an array of bands with active flag when found', async () => {
      const mockBands = [
        {
          id: 1,
          name: 'The Unit Testers',
          genreId: 2,
          foundingDate: new Date('2000-01-01'),
          members: 4,
          dissolutionDate: null,
          genre: { id: 2, name: 'Rock' },
          albums: [],
        },
      ]
      vi.spyOn(prisma.band, 'findMany').mockResolvedValueOnce(mockBands)

      const app = createTestApp()
      const res = await request(app).get('/bands')
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.data).toHaveLength(1)
      expect(res.body.data[0]).toMatchObject({
        id: 1,
        name: 'The Unit Testers',
        active: true,
      })
    })
  })

  describe('GET /bands/:id', () => {
    it('should return 400 if band not found', async () => {
      vi.spyOn(prisma.band, 'findMany').mockResolvedValueOnce([])

      const app = createTestApp()
      const res = await request(app).get('/bands/999')
      expect(res.status).toBe(400)
      expect(res.body).toEqual({
        success: false,
        data: 'Band with id 999 not found',
      })
    })

    it('should return a band if it exists', async () => {
      const mockBand = [
        {
          id: 2,
          name: 'Mock Band',
          genreId: 1,
          foundingDate: new Date('1999-05-05'),
          members: 5,
          dissolutionDate: null,
        },
      ]
      vi.spyOn(prisma.band, 'findMany').mockResolvedValueOnce(mockBand)

      const app = createTestApp()
      const res = await request(app).get('/bands/2')
      expect(res.status).toBe(200)
      expect(res.body.success).toBe(true)
      expect(res.body.data[0].name).toBe('Mock Band')
      expect(res.body.data[0].active).toBe(true)
    })
  })

  describe('POST /bands', () => {
    it('should return 400 if name is missing', async () => {
      const app = createTestApp()
      const res = await request(app).post('/bands').send({})
      expect(res.status).toBe(400)
      expect(res.text).toBe('Name is required')
    })

    it('should return 400 if foundingDate is missing', async () => {
      const app = createTestApp()
      const res = await request(app).post('/bands').send({ name: 'Test Band' })
      expect(res.status).toBe(400)
      expect(res.text).toBe('Founding date is required')
    })

    it('should create a band with valid data', async () => {
      vi.spyOn(prisma.band, 'create').mockResolvedValueOnce({
        id: 10,
        name: 'Brand New Band',
        foundingDate: new Date('2020-01-01'),
        dissolutionDate: null,
        members: 3,
        genreId: 1,
        albums: [],
        genre: { id: 1, name: 'Rock' },
      } as Band)

      const app = createTestApp()
      const payload = {
        name: 'Brand New Band',
        foundingDate: '2020-01-01',
        members: 3,
        genreId: 1,
        albums: [],
      }
      const res = await request(app).post('/bands').send(payload)
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({
        success: true,
        message: 'Band Brand New Band created successfully',
        data: {
          id: 10,
          name: 'Brand New Band',
        },
      })
    })

    it('should catch server errors and return 500', async () => {
      vi.spyOn(prisma.band, 'create').mockRejectedValueOnce(new Error('DB Error'))

      const app = createTestApp()
      const payload = {
        name: 'Error Band',
        foundingDate: '2020-01-01',
        members: 3,
        genreId: 1,
        albums: [],
      }
      const res = await request(app).post('/bands').send(payload)
      expect(res.status).toBe(500)
      expect(res.text).toBe('DB Error')
    })
  })
})
