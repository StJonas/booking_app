import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  putHotel,
} from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", putHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
