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
  res.json(bands);
});

export default router;
