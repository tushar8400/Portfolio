import { Router } from "express";
import Certification from "../models/Certification.js";
import adminOnly from "../middleware/adminOnly.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    res.json(await Certification.find().sort({ order: 1, createdAt: 1 }));
  } catch (err) {
    next(err);
  }
});

router.post("/", adminOnly, async (req, res, next) => {
  try {
    res.status(201).json(await Certification.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put("/:id", adminOnly, async (req, res, next) => {
  try {
    const cert = await Certification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cert) return res.status(404).json({ message: "Certification not found" });
    res.json(cert);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", adminOnly, async (req, res, next) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ message: "Certification not found" });
    res.json({ message: "Certification deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
