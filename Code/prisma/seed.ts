/*
 This file was created by ChatGPT
*/

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  const rock = await prisma.genre.create({
    data: { name: 'Rock' },
  })

  const jazz = await prisma.genre.create({
    data: { name: 'Jazz' },
  })

  const sony = await prisma.label.create({
    data: { name: 'Sony Music' },
  })

  const universal = await prisma.label.create({
    data: { name: 'Universal Music' },
  })

  await prisma.band.create({
    data: {
      name: 'The Beatles',
      genreId: rock.id,
      foundingDate: new Date('1960-01-01'),
      members: 4,
      albums: {
        create: [
          {
            title: 'Abbey Road',
            price: 20,
            labelId: sony.id,
            releaseDate: new Date('1969-09-26'),
          },
          {
            title: 'Let It Be',
            price: 25,
            labelId: universal.id,
            releaseDate: new Date('1970-05-08'),
          },
        ],
      },
    },
  })

    await prisma.band.create({
    data: {
      name: 'Miles Davis Quintet',
      genreId: jazz.id,
      foundingDate: new Date('1955-01-01'),
      dissolutionDate: new Date('1969-01-01'),
      members: 5,
      albums: {
        create: [
          {
            title: 'Kind of Blue',
            price: 30,
            labelId: sony.id,
            releaseDate: new Date('1969-01-01'),
          },
        ],
      },
    },
  })

  console.log('Seeded data successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
