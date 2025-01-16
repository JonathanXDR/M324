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
