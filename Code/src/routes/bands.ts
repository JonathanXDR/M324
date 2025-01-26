import { Router } from "express";
import prisma from "../db/prisma";
import type { Album } from "@prisma/client";

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
    },
    orderBy: {
      name: "asc",
    },
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
      id,
    },
  });

  if (!band || band.length === 0) {
    res
      .status(404)
      .json({ success: false, data: "No Band found with the ID: " + id });
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
    include: {
      albums: true,
      genre: true
    },
    data: {
      foundingDate,
      members,
      dissolutionDate,
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
  });

  res.json(post);
});

export default router;
