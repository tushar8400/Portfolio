import { FaHeart } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import Logo from "./Logo";
import { profile } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer fixed ">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <div>
            <strong>{profile.name}</strong>
            <span>Build &bull; Learn &bull; Grow</span>
          </div>
        </div>

        <div className="footer__right">
          <p>
            Made with <FaHeart color="#ef4444" aria-label="love" /> by {profile.name}
          </p>
          <a href="#home" className="footer__top" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
