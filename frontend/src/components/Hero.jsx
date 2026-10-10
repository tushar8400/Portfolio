import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/siteData";

const terminalLines = ["code", "deploy", "learn", "repeat"];
const dotColors = ["#ff5f57", "#febc2e", "#28c840"];

export default function Hero() {
  // If client/public/tushar.jpg is missing, show a TK monogram instead of a broken image.
  const [photoOk, setPhotoOk] = useState(true);

  const socials = [
    { label: "GitHub", href: profile.github, Icon: FaGithub },
    { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
    { label: "Email", href: `mailto:${profile.email}`, Icon: FaEnvelope },
    { label: "LeetCode", href: profile.leetcode, Icon: SiLeetcode },
  ];

  return (
    <div className="h-screen bg-black">
      <section id="home" className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">Build &bull; Deploy &bull; Scale</p>
            <h1 className="hero__title">
              Hi, I&apos;m <span className="text-blue">{profile.name}</span>
            </h1>
            <p className="hero__role">{profile.tagline.join(" | ")}</p>
            <p className="hero__intro">{profile.intro}</p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                View My Work <FiArrowRight aria-hidden="true" />
              </a>
              <a className="btn btn--ghost" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero__socials">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__glow" />

            {photoOk ? (
              <img
                className="hero__photo"
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="hero__monogram" aria-hidden="true">
                {profile.initials}
              </div>
            )}

            <div className="hero__note" aria-hidden="true">
              Keep
              <br />
              Building
              <svg viewBox="0 0 60 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M40 4 C44 22 30 38 10 44" strokeDasharray="0.5 5" />
                <path d="M19 36 L9 44 L22 48" />
              </svg>
            </div>

            <p className="hero__slogan" aria-hidden="true">
              Good
              <br />
              Code
              <br />
              Better
              <br />
              Future
            </p>

            <div className="terminal" aria-hidden="true">
              <div className="terminal__dots">
                {dotColors.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
              {terminalLines.map((line) => (
                <div key={line}>
                  <b>&gt;</b>
                  {line}
                </div>
              ))}
              <div className="terminal__cursor">_</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
