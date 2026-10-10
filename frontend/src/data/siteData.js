// =====================================================================
//  EDIT THIS FILE to change your text, links and skills.
//  Projects & certifications also come from MongoDB (see server/seed.js);
//  the fallback lists below are shown if the API is offline or empty.
// =====================================================================

export const profile = {
  name: "Tushar",
  initials: "T",
  tagline: ["DevOps & Cloud Engineer", "Aspiring AI/ML Engineer", "Full Stack Developer"],
  intro:
    "I build web applications and love deploying them on cloud. Passionate about creating scalable solutions and learning new technologies.",
  about:
    "I'm a final year Computer Science student with a strong interest in full-stack development, DevOps, and Cloud technologies. I enjoy building projects that solve real-world problems and love working on deployment, automation, and scalable infrastructure.",
  quote: "Consistent learning today, a better tomorrow.",

  // TODO: replace with your real links
  email: "tusharvalmiki0204@gmail.com",
  github: "https://github.com/tushar8400",
  linkedin: "www.linkedin.com/in/tushar-kumar-6203902b0",
  leetcode: "https://leetcode.com/u/Tushar84/",

  // Put these files in client/public/
  resume: "/resume.pdf",
  photo: "/tushar.jpg",
};

export const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "Cloud & DevOps", label: "Focus Area" },
  { value: "AI/ML enthusiast! ", label: "Learning" },
  { value: "Mern stack", label: "Completed" },
  { value: "Always", label: "Learning" },
];

// icon: edu | pin | heart | goal
export const facts = [
  { icon: "edu", title: "B.Tech in Computer Science", sub: "Final Year" },
  { icon: "pin", title: "India" },
  { icon: "heart", title: "Open to Opportunities" },
  { icon: "goal", label: "Goal:", title: "Build a career in Cloud + DevOps" },
];

export const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "Python", icon: "py" },
  { name: "Java", icon: "java" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
  { name: "Linux", icon: "linux" },
];

export const education = {
  degree: "B.Tech in Computer Science",
  years: "2023 - 2027 (Expected)",
  place: "India",
};

// ---------- Fallbacks (used when the API has no data) ----------
export const fallbackProjects = [
  {
    title: "RideX ride booking Platform",
    description:
      "A full-stack real-time chat application with authentication, deployed on Kubernetes with a CI/CD pipeline using Jenkins.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    image: "/projects/chat-app.png",
    liveUrl: "https://your-chat-app.example.com",
    githubUrl: "https://github.com/your-username/realtime-chat",
  },
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline to build, test and deploy applications on Kubernetes with monitoring and logging.",
    tech: ["Jenkins", "Docker", "Kubernetes", "AWS", "Monitoring"],
    image: "/projects/cicd-pipeline.png",
    liveUrl: "https://your-pipeline.example.com",
    githubUrl: "https://github.com/your-username/devops-cicd",
  },
];

// icon: aws | docker | linux | jenkins
export const fallbackCertifications = [
  { name: "DevOps - Zero To Hero (Junoon Batch 9) ", status: "Completed", icon: "" },
  { name: "Agentic AI For DevOps", status: "Completed", icon: "AI" },
  { name: "AWS Cloud Practitioner", status: "In Progress", icon: "aws" },
  { name: "Docker & Kubernetes", status: "Completed", icon: "docker" },
  { name: "Linux Fundamentals", status: "Completed", icon: "linux" },
  { name: "Jenkins for CI/CD", status: "Completed", icon: "jenkins" },
];
