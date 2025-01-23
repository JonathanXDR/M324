import { Router } from "express";
import prisma from "../db/prisma";

const router = Router();

router.get("/", async (_req, res) => {
  const bands = await prisma.band.findMany({
    include: {
      genre: true,
      albums: {
        include: {
          label: true,
        },
      },
    }
  });

  if (!bands || bands.length === 0) {
    res.status(404).json({ success: false, data: "No Bands found! :(" });
  }

  const modifiedBands = bands.map(band => ({
    ...band,
    active: band.dissolutionDate === null,
  }));

  res.json({ success: true, data: modifiedBands });
});

router.get("/:id", async (_req, res) => {
  const id = parseInt(_req.params.id);
  const band = await prisma.band.findMany({
    where: {
      id
    },
    include: {
      genre: true,
      albums: {
        include: {
          label: true,
        },
      },
    }
  });

  if (!band || band.length === 0) {
    res.status(404).json({ success: false, data: "No Band found with the ID: " + id });
  }

  const modifiedBands = band.map(band => ({
    ...band,
    active: band.dissolutionDate === null,
  }));

  res.json({ success: true, data: modifiedBands });
});

router.post("/", async (_req, res) => {
  const {
    name,
    genre,
    foundingDate,
    members,
    dissolutionDate,
    genreId,
    albums,
  } = _req.body;

  const post = await prisma.band.create({
    data: {
      name,
      genre,
      foundingDate,
      members,
      dissolutionDate,
      genreId,
      albums,
    },
  });

  res.json(post);
});

export default router;
