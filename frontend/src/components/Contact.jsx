import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { sendMessage } from "../api";
import { profile } from "../data/siteData";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });
    try {
      const res = await sendMessage(form);
      setForm(empty);
      setStatus({ type: "success", text: res.message });
    } catch (err) {
      setStatus({
        type: "error",
        text: `${err.message} You can also email me at ${profile.email}.`,
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="connect">
          <div>
            <h2 className="section__title">Let&apos;s Connect</h2>
            <p className="connect__text">
              I&apos;m always open to discussing new opportunities, collaborations or just tech stuff!
            </p>
          </div>

          <div className="connect__buttons">
            <a className="btn btn--card" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" /> Email Me
            </a>
            <a className="btn btn--card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn aria-hidden="true" color="#0a66c2" /> LinkedIn
            </a>
            <a className="btn btn--card" href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <label>
              Name
              <input name="name" value={form.name} onChange={onChange} required maxLength={80} autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
            </label>
          </div>
          <label>
            Message
            <textarea name="message" rows={4} value={form.message} onChange={onChange} required maxLength={2000} />
          </label>

          <div className="form__foot">
            <button className="btn btn--primary" type="submit" disabled={status.type === "loading"}>
              {status.type === "loading" ? "Sending..." : "Send message"}
            </button>
            <p className={`form__status form__status--${status.type}`} role="status" aria-live="polite">
              {status.type !== "loading" && status.text}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
