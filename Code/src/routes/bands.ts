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
  });
  res.json(bands);
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
