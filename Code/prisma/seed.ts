import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Genres
  const rock = await prisma.genre.create({
    data: { name: 'Rock' },
  });

  const jazz = await prisma.genre.create({
    data: { name: 'Jazz' },
  });

  // Create Labels
  const sony = await prisma.label.create({
    data: { name: 'Sony Music' },
  });

  const universal = await prisma.label.create({
    data: { name: 'Universal Music' },
  });

  // Create Bands
  const beatles = await prisma.band.create({
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
          },
          {
            title: 'Let It Be',
            price: 25,
            labelId: universal.id,
          },
        ],
      },
    },
  });

  const milesDavis = await prisma.band.create({
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
          },
        ],
      },
    },
  });

  console.log({ rock, jazz, sony, universal, beatles, milesDavis });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
