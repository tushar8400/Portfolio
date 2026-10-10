import { factIcons } from "./icons";
import { profile, stats, facts } from "../data/siteData";

export default function About() {
  return (
    <div className="about_h">
      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <h2 className="section__title">About Me</h2>
            <p className="about__text">{profile.about}</p>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="about__side">
            <ul className="facts">
              {facts.map((f) => {
                const Icon = factIcons[f.icon];
                return (
                  <li key={f.title} className={f.icon === "goal" ? "is-goal" : undefined}>
                    <span className="facts__icon" aria-hidden="true">
                      {Icon && <Icon />}
                    </span>
                    <div>
                      <span className="facts__title">
                        {f.label && <strong>{f.label} </strong>}
                        {f.title}
                      </span>
                      {f.sub && <small>{f.sub}</small>}
                    </div>
                  </li>
                );
              })}
            </ul>
            <blockquote className="quote">&ldquo;{profile.quote}&rdquo;</blockquote>
          </aside>
        </div>
      </section>
    </div>
  );
}
