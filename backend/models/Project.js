import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 400 },
    tech: { type: [String], default: [] },
    image: { type: String, default: "" }, // e.g. "/projects/chat-app.png" (put file in client/public/projects)
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 }, // lower number shows first
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
