import { Router } from "express";
import Project from "../models/Project.js";
import adminOnly from "../middleware/adminOnly.js";

const router = Router();

// GET /api/projects  (public)
router.get("/", async (_req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// POST /api/projects  (admin)
router.post("/", adminOnly, async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

// PUT /api/projects/:id  (admin)
router.put("/:id", adminOnly, async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/projects/:id  (admin)
router.delete("/:id", adminOnly, async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
