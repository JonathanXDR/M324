import { Album, Label } from '@prisma/client'
import axios from 'axios'
import express from 'express'
import request from 'supertest'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import prisma from '../../src/db/prisma.js'
import albumRouter from '../../src/routes/albums.js'

function createTestApp () {
  const app = express()
  app.use(express.json())
  app.use('/albums', albumRouter)
  return app
}

describe('Albums Route (Unit Tests)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('POST /albums', () => {
    it('should return 400 if title is missing', async () => {
      const app = createTestApp()
      const res = await request(app).post('/albums').send({})
      expect(res.status).toBe(400)
      expect(res.text).toBe('Title is required')
    })

    it('should return 400 if releaseDate is missing', async () => {
      const app = createTestApp()
      const payload = { title: 'Test Album' }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(400)
      expect(res.text).toBe('Release date is required')
    })

    it('should return 400 if band name is missing', async () => {
      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(400)
      expect(res.text).toBe('Band is required')
    })

    it('should return 404 if band not found', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { success: true, data: [] },
      })

      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
        band: 'Nonexistent Band',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(404)
      expect(res.text).toBe('Band not found')
    })

    it('should return 400 if price is missing', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
        band: 'Test Band',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(400)
      expect(res.text).toBe('Price is required')
    })

    it('should return 400 if price is not a valid number', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
        band: 'Test Band',
        price: 'NaN',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(400)
      expect(res.text).toBe('Price must be a valid number')
    })

    it('should return 400 if label is missing', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
        band: 'Test Band',
        price: 20,
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(400)
      expect(res.text).toBe('Label is required')
    })

    it('should return 404 if label not found', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      vi.spyOn(prisma.label, 'findFirst').mockResolvedValueOnce(null)

      const app = createTestApp()
      const payload = {
        title: 'Album Title',
        releaseDate: '2022-01-01',
        band: 'Test Band',
        price: 20,
        label: 'Unknown Label',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(404)
      expect(res.text).toBe('Label not found')
    })

    it('should create an album with valid data', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      vi.spyOn(prisma.label, 'findFirst').mockResolvedValueOnce({
        id: 7,
        name: 'Test Label',
      } as Label)

      vi.spyOn(prisma.album, 'create').mockResolvedValueOnce({
        id: 100,
        title: 'Valid Album',
        price: 20,
        releaseDate: new Date('2022-01-01'),
        bandId: 1,
        labelId: 7,
        label: { id: 7, name: 'Test Label' },
        band: { id: 1, name: 'Test Band' },
      } as Album)

      const app = createTestApp()
      const payload = {
        title: 'Valid Album',
        releaseDate: '2022-01-01',
        band: 'Test Band',
        price: 20,
        label: 'Test Label',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({
        id: 100,
        title: 'Valid Album',
        price: 20,
      })
    })

    it('should return 500 on unhandled error', async () => {
      vi.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          success: true,
          data: [{ id: 1, name: 'Test Band' }],
        },
      })

      vi.spyOn(prisma.label, 'findFirst').mockResolvedValueOnce({
        id: 7,
        name: 'Test Label',
      } as any)

      vi.spyOn(prisma.album, 'create').mockRejectedValueOnce(new Error('Create error'))

      const app = createTestApp()
      const payload = {
        title: 'Some Album',
        releaseDate: '2022-01-01',
        band: 'Test Band',
        price: 20,
        label: 'Test Label',
      }
      const res = await request(app).post('/albums').send(payload)
      expect(res.status).toBe(500)
      expect(res.text).toBe('Create error')
    })
  })
})
