import { FiChevronRight } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { SiDocker, SiLinux, SiJenkins } from "react-icons/si";
import useRemote from "../hooks/useRemote";
import { getCertifications } from "../api";
import { fallbackCertifications } from "../data/siteData";

const icons = {
  aws: <FaAws color="#ff9900" />,
  docker: <SiDocker color="#2496ed" />,
  linux: <SiLinux color="#111827" />,
  jenkins: <SiJenkins color="#d24939" />,
};

export default function Certifications() {
  const certs = useRemote(getCertifications, fallbackCertifications);

  return (
    <div>
      <h2 className="section__title">
        Certifications <small>(In Progress / Completed)</small>
      </h2>
      <ul className="certs">
        {certs.map((c) => {
          const inner = (
            <>
              <span className="certs__icon" aria-hidden="true">
                {icons[c.icon] || icons.aws}
              </span>
              <span className="certs__name">
                {c.name}
                {c.status === "In Progress" && <small> (In Progress)</small>}
              </span>
              <FiChevronRight className="certs__chev" aria-hidden="true" />
            </>
          );
          return (
            <li key={c._id || c.name}>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="certs__row">
                  {inner}
                </a>
              ) : (
                <div className="certs__row">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
