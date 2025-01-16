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
    orderBy: {
      name: "asc",
    },
  });

  if (!bands || bands.length === 0) {
    res.status(404).json({ success: false, data: "No Bands found! :(" });
  }

  res.json({ success: true, data: bands });
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

  res.json({ success: true, data: band });
});

export default router;
