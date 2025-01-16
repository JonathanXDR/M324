import { Router } from "express";
import type { Band } from "@prisma/client";

const router = Router();
const axios = require('axios');

router.get("/", (req, res) => {
  res.json({ message: "list of albums!" });
});

router.post("/", async (req, res) => {


  const appBaseUrl = `${req.protocol}://${req.get('host')}`;
  const bands: Array<Band> = await axios.get(`${appBaseUrl}/bands`);


  res.json(response.data);
});

export default router;
