import { Label } from './../../node_modules/.prisma/client/index.d';
import { Router, Request, Response } from "express";
import type { Album, Band } from "@prisma/client";
import prisma from "../db/prisma";

const router = Router();
const axios = require('axios');

router.get("/", (req, res) => {
  res.json({ message: "list of albums!" });
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  /* Title */
  const title = data.title;

  /* Release Date */
  const releaseDate = data.releaseDate;

  /* Band */
  const band: string = data.band;
  const appBaseUrl = `${req.protocol}://${req.get('host')}`;
  const response = await axios.get(`${appBaseUrl}/bands`);
  const bands: Array<Band> = response.data;
  const dbBand = bands.find((b) => b.name === band);
  if (!dbBand) {
    res.status(404).send();
  }

  /* Price */
  const price: number = data.price;

  /* Label */
  const label = data.label;
  const dbLabel = await prisma.band.findFirst({
    where: {
      name: label,
    },
  });
  if (!dbLabel) {
    res.status(404).send();
  }

  const newAlbum = await prisma.album.create({
    data: {
      title: title,
      releaseDate: releaseDate,
      price: price,
      labelId: dbLabel!.id,
      bandId: dbBand!.id,
    },
  });

  res.json(newAlbum);
});

export default router;
