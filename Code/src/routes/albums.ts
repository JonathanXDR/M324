import { Label } from './../../node_modules/.prisma/client/index.d';
import { Router, Request, Response } from "express";
import type { Request, Response } from "express";
import type { Album, Band } from "@prisma/client";
import prisma from "../db/prisma";

const router = Router();
import axios from 'axios';


router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  /* Title */
  const title = data.title;
  if (!title || title.length === 0) {
    return res.status(400).send("Title is required");
  }

  /* Release Date */
  if (!data.releaseDate || data.releaseDate.length === 0) {
    return res.status(400).send("Release date is required");
  }
  const releaseDate = new Date(data.releaseDate);
  if (isNaN(releaseDate.getTime())) {
    return res.status(400).send("Invalid release date");
  }

  /* Band */
  const band: string = data.band;
  if (!band || band.length === 0) {
    return res.status(400).send("Band is required");
  }
  const appBaseUrl = `${req.protocol}://${req.get('host')}`;
  const response = await axios.get(`${appBaseUrl}/bands`);
  const bands: Array<Band> = response.data.data;
  const dbBand = bands.find((b) => b.name === band);
  if (!dbBand) {
    return res.status(404).send("Band not found");
  }

  /* Price */
  const priceString = data.price;
  if (!priceString || priceString.length === 0) {
    return res.status(400).send("Price is required");
  }
  if (typeof priceString !== "number" || isNaN(priceString)) {
    return res.status(400).send("Price must be a valid number");
  }
  const price: number = data.price;
  if (price < 0) {
    return res.status(400).send("Price must be positive");
  }

  /* Label */
  const label = data.label;
  if (!label || label.length === 0) {
    return res.status(400).send("Label is required");
  }
  const dbLabel = await prisma.label.findFirst({
    where: {
      name: label,
    },
  });
  if (!dbLabel) {
    return res.status(404).send("Label not found");
  }

  try {
    const newAlbum = await prisma.album.create({
      data: {
        title: title,
        releaseDate: releaseDate,
        price: price,
        labelId: dbLabel?.id,
        bandId: dbBand?.id,
      },
      include: {
        label: true,
        band: true,
      },
    });

    return res.json(newAlbum).send();
  } catch (e: any) {
    if (e instanceof Error) {
      return res.status(500).send(e.message);
    } else
      return res.status(500).send("An error occurred while creating the album");
  }
});

export default router;
