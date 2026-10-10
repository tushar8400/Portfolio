import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    status: { type: String, enum: ["Completed", "In Progress"], default: "Completed" },
    icon: { type: String, default: "aws" }, // aws | docker | linux | jenkins
    url: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
