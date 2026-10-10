const BASE = import.meta.env.VITE_API_URL || "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Request failed. Please try again.");
  return data;
}

export const getProjects = () => request("/projects");
export const getCertifications = () => request("/certifications");
export const sendMessage = (body) =>
  request("/contact", { method: "POST", body: JSON.stringify(body) });
