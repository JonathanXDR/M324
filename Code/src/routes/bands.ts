import type { Album } from '@prisma/client'
import { Router } from 'express'
import prisma from '../db/prisma.js'

const router = Router()

router.get('/', async (_req, res) => {
  const bands = await prisma.band.findMany({
    include: {
      genre: true,
      albums: {
        include: {
          label: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  if (!bands || bands.length === 0) {
    res.status(400).json({ success: false, data: 'Band is required' })
    return
  }

  const modifiedBands = bands.map((band) => ({
    ...band,
    active: band.dissolutionDate === null,
  }))

  res.json({ success: true, data: modifiedBands })
})

router.get('/:id', async (_req, res) => {
  const id = parseInt(_req.params.id)
  const band = await prisma.band.findMany({
    where: {
      id,
    },
  })

  if (!band || band.length === 0) {
    res
      .status(400)
      .json({ success: false, data: `Band with id ${id} not found` })
  }

  const modifiedBands = band.map((band) => ({
    ...band,
    active: band.dissolutionDate === null,
  }))

  res.json({ success: true, data: modifiedBands })
})

router.post('/', async (_req, res) => {
  try {
    const { name, foundingDate, members, dissolutionDate, genreId, albums } =
      _req.body

    if (!name || name.length === 0) {
      res.status(400).send('Name is required')
      return
    }

    if (!foundingDate || foundingDate.length === 0) {
      res.status(400).send('Founding date is required')
      return
    }

    if (!members || members.length === 0) {
      res.status(400).send('Member amount is required')
      return
    }

    if (
      !(!dissolutionDate || dissolutionDate === 0) &&
      dissolutionDate < foundingDate
    ) {
      res
        .status(400)
        .send('Dissolution date cannot be before the founding date')
      return
    }

    const post = await prisma.band.create({
      include: {
        albums: true,
        genre: true,
      },
      data: {
        foundingDate: new Date(foundingDate),
        members,
        dissolutionDate: dissolutionDate ? new Date(dissolutionDate) : null,
        genreId,
        albums: {
          create: albums.map((album: Album) => ({
            title: album.title,
            price: album.price,
            labelId: album.labelId,
          })),
        },
        name,
      },
    })
    res.json({
      success: true,
      message: `Band ${name} created successfully`,
      data: post,
    })
  } catch (e: any) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else res.status(500).send('An error occurred while creating the band')
  }
})

export default router
