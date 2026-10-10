import { brandIcons } from "./icons";
import { skills } from "../data/siteData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">My Skills</h2>
          <span className="section__aside">Tools I work with</span>
        </div>

        <ul className="skills">
          {skills.map(({ name, icon }) => {
            const brand = brandIcons[icon];
            return (
              <li className="skill" key={name}>
                <span className="skill__icon" aria-hidden="true">
                  {icon === "js" ? (
                    <span className="js-badge">JS</span>
                  ) : (
                    brand && <brand.Icon style={{ color: brand.color }} />
                  )}
                </span>
                <span className="skill__name">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
