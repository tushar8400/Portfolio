// Very simple protection: send the header  x-admin-key: <ADMIN_KEY>
export default function adminOnly(req, res, next) {
  const key = req.header("x-admin-key");
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: "Not authorised" });
  }
  next();
}
