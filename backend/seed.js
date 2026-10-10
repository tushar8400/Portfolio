// Run with:  npm run seed
// Fills MongoDB with your starting projects and certifications.
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Project from "./models/Project.js";
import Certification from "./models/Certification.js";

const projects = [
  {
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat application with authentication, deployed on Kubernetes with a CI/CD pipeline using Jenkins.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    image: "/projects/chat-app.png",
    liveUrl: "https://your-live-demo.example.com",
    githubUrl: "https://github.com/your-username/realtime-chat",
    order: 1,
  },
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline to build, test and deploy applications on Kubernetes with monitoring and logging.",
    tech: ["Jenkins", "Docker", "Kubernetes", "AWS", "Monitoring"],
    image: "/projects/cicd-pipeline.png",
    liveUrl: "https://your-live-demo.example.com",
    githubUrl: "https://github.com/your-username/devops-cicd",
    order: 2,
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner", status: "In Progress", icon: "aws", order: 1 },
  { name: "Docker & Kubernetes", status: "Completed", icon: "docker", order: 2 },
  { name: "Linux Fundamentals", status: "Completed", icon: "linux", order: 3 },
  { name: "Jenkins for CI/CD", status: "Completed", icon: "jenkins", order: 4 },
];

async function run() {
  await connectDB();
  await Project.deleteMany({});
  await Certification.deleteMany({});
  await Project.insertMany(projects);
  await Certification.insertMany(certifications);
  console.log(`Seeded ${projects.length} projects and ${certifications.length} certifications`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
