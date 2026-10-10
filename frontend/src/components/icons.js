import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiLinux,
  SiJenkins,
} from "react-icons/si";
import { FaAws, FaGraduationCap, FaMapMarkerAlt, FaHeart, FaBullseye } from "react-icons/fa";

// Keys here match the `icon` values in data/siteData.js and in MongoDB.
export const brandIcons = {
  js: { Icon: SiJavascript, color: "#F7DF1E" },
  react: { Icon: SiReact, color: "#38BDF8" },
  node: { Icon: SiNodedotjs, color: "#3C873A" },
  express: { Icon: SiExpress, color: "#3f4652" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  aws: { Icon: FaAws, color: "#FF9900" },
  git: { Icon: SiGit, color: "#F05032" },
  linux: { Icon: SiLinux, color: "#1f2937" },
  jenkins: { Icon: SiJenkins, color: "#D24939" },
};

export const factIcons = {
  edu: FaGraduationCap,
  pin: FaMapMarkerAlt,
  heart: FaHeart,
  goal: FaBullseye,
};
