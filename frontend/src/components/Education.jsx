import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/siteData";

export default function Education() {
  return (
    <div>
      <h2 className="section__title">Education</h2>
      <div className="edu">
        <span className="edu__icon" aria-hidden="true">
          <FaGraduationCap />
        </span>
        <div>
          <h3>{education.degree}</h3>
          <p>{education.years}</p>
          <p>{education.place}</p>
        </div>
      </div>
    </div>
  );
}
