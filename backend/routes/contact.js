import { Router } from "express";
import rateLimit from "express-rate-limit";
import Message from "../models/Message.js";
import adminOnly from "../middleware/adminOnly.js";

const router = Router();

// Max 5 messages per IP per hour, so the form can't be spammed
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many messages. Please try again in an hour." },
});

// POST /api/contact  (public)
router.post("/", limiter, async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    await Message.create({ name, email, message });
    res.status(201).json({ message: "Message sent. Thanks for reaching out!" });
  } catch (err) {
    next(err);
  }
});

// GET /api/contact  (admin) - read the messages people sent you
router.get("/", adminOnly, async (_req, res, next) => {
  try {
    res.json(await Message.find().sort({ createdAt: -1 }));
  } catch (err) {
    next(err);
  }
});

export default router;
