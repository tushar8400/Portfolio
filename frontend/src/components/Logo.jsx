import { profile } from "../data/siteData";

export default function Logo() {
  return (
    <span className="logo" aria-hidden="true">
      {profile.initials}
    </span>
  );
}
