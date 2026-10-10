import { useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { profile } from "../data/siteData";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>{profile.name}</span>
        </a>

        <nav id="site-menu" className={`nav__links${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--outline btn--sm nav__resume" href={profile.resume} download>
            <FaDownload aria-hidden="true" /> Resume
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
