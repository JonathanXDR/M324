import type { Band } from '@prisma/client'
import axios from 'axios'
import type { Request, Response } from 'express'
import { Router } from 'express'
import prisma from '../db/prisma.js'

const router = Router()

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const data = req.body

  /* Title */
  const title = data.title
  if (!title || title.length === 0) {
    res.status(400).send('Title is required')
    return
  }

  /* Release Date */
  if (!data.releaseDate || data.releaseDate.length === 0) {
    res.status(400).send('Release date is required')
    return
  }
  const releaseDate = new Date(data.releaseDate)
  if (isNaN(releaseDate.getTime())) {
    res.status(400).send('Invalid release date')
    return
  }

  /* Band */
  const band: string = data.band
  if (!band || band.length === 0) {
    res.status(400).send('Band is required')
    return
  }
  const appBaseUrl = `${req.protocol}://${req.get('host')}`
  const response = await axios.get(`${appBaseUrl}/bands`)
  const bands: Array<Band> = response.data.data
  const dbBand = bands.find((b) => b.name === band)
  if (!dbBand) {
    res.status(404).send('Band not found')
    return
  }

  /* Price */
  const priceString = data.price
  if (!priceString || priceString.length === 0) {
    res.status(400).send('Price is required')
    return
  }
  if (typeof priceString !== 'number' || isNaN(priceString)) {
    res.status(400).send('Price must be a valid number')
    return
  }
  const price: number = data.price
  if (price < 0) {
    res.status(400).send('Price must be positive')
    return
  }

  /* Label */
  const label = data.label
  if (!label || label.length === 0) {
    res.status(400).send('Label is required')
    return
  }
  const dbLabel = await prisma.label.findFirst({
    where: {
      name: label,
    },
  })
  if (!dbLabel) {
    res.status(404).send('Label not found')
    return
  }

  try {
    const newAlbum = await prisma.album.create({
      data: {
        title,
        releaseDate,
        price,
        labelId: dbLabel?.id,
        bandId: dbBand?.id,
      },
      include: {
        label: true,
        band: true,
      },
    })

    res.json(newAlbum).send()
  } catch (e: any) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else res.status(500).send('An error occurred while creating the album')
  }
})

export default router
