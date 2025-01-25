import type { Band } from "@prisma/client";
import axios from "axios";
import type { Request, Response } from "express";
import { Router } from "express";
import prisma from "../db/prisma";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.json({ message: "list of albums!" });
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const data = req.body;

  /* Title */
  const title = data.title;

  /* Release Date */
  const releaseDate = new Date(data.releaseDate);

  /* Band */
  const band: string = data.band;
  const appBaseUrl = `${req.protocol}://${req.get("host")}`;
  const response = await axios.get(`${appBaseUrl}/bands`);
  const bands: Array<Band> = response.data;
  const dbBand = bands.find((b) => b.name === band);
  if (!dbBand) {
    res.status(404).send();
    return;
  }

  /* Price */
  const price: number = data.price;

  /* Label */
  const label = data.label;
  const dbLabel = await prisma.label.findFirst({
    where: {
      name: label,
    },
  });
  if (!dbLabel) {
    res.status(404).send();
    return;
  }

  const newAlbum = await prisma.album.create({
    data: {
      title,
      releaseDate,
      price,
      labelId: dbLabel.id,
      bandId: dbBand.id,
    },
  });

  res.json(newAlbum);
});

export default router;
