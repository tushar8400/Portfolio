old one update this # Tushar Kumar - MERN Portfolio

Portfolio built with **MongoDB, Express, React (Vite) and Node.js**.
Projects and certifications are stored in MongoDB and served by the Express API. The contact form saves messages to MongoDB.
If the API is offline, the site falls back to the data in `client/src/data/siteData.js`, so it never looks broken.

## 1. Setup

You need Node.js 18+ and either local MongoDB or a free MongoDB Atlas cluster.

```bash
npm run install:all           # installs root, server and client dependencies
cp server/.env.example server/.env
# edit server/.env  ->  set MONGO_URI and ADMIN_KEY
npm run seed                  # puts the starter projects + certifications in MongoDB
npm run dev                   # API on :5000, site on http://localhost:5173
```

## 2. Make it yours (checklist)

| What | Where |
| --- | --- |
| Your photo | Save as `client/public/tushar.jpg` (a portrait on a dark or transparent background looks best; edges fade into the hero automatically). Without it, a "TK" monogram is shown. |
| Resume | Save as `client/public/resume.pdf` (the Resume button downloads it) |
| Email, GitHub, LinkedIn, LeetCode | `client/src/data/siteData.js` |
| Intro, about text, stats, skills, education | `client/src/data/siteData.js` |
| Project screenshots | Save in `client/public/projects/` (the two included images are placeholders) |
| Project titles, links, tech chips | `server/seed.js`, then run `npm run seed` again |
| Colours | CSS variables at the top of `client/src/index.css` |

`npm run seed` replaces all projects and certifications, so run it only when you want to reset them.

## 3. Project structure

```
server/
  server.js            Express app (CORS, helmet, routes, error handler)
  config/db.js         Mongoose connection
  models/              Project, Certification, Message
  routes/              projects, certifications, contact
  middleware/adminOnly.js   protects write routes with the ADMIN_KEY
  seed.js              starter data
client/
  index.html
  public/              tushar.jpg, resume.pdf, projects/*.png
  src/
    components/        Navbar, Hero, About, Skills, Projects, Education,
                       Certifications, Contact, Footer
    data/siteData.js   text, links, skills, fallback data
    api.js, hooks/useRemote.js
    index.css
```

## 4. API

| Method | Route | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/api/projects` | public | list projects |
| POST / PUT / DELETE | `/api/projects[/:id]` | admin | add / edit / remove |
| GET | `/api/certifications` | public | list certifications |
| POST / PUT / DELETE | `/api/certifications[/:id]` | admin | add / edit / remove |
| POST | `/api/contact` | public (5 per hour per IP) | save a message |
| GET | `/api/contact` | admin | read your messages |

Admin routes need the header `x-admin-key: <ADMIN_KEY from server/.env>`:

```bash
# add a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" -H "x-admin-key: YOUR_KEY" \
  -d '{"title":"My New App","description":"What it does","tech":["React","Node.js"],"githubUrl":"https://github.com/you/app","order":3}'

# read contact messages
curl http://localhost:5000/api/contact -H "x-admin-key: YOUR_KEY"
```

## 5. Deploy

**Option A - one service (simplest, e.g. Render / Railway):**
1. Push to GitHub. Create a MongoDB Atlas cluster and copy its connection string.
2. Create a Web Service with build command `npm run install:all && npm run build` and start command `npm start`.
3. Set env vars: `NODE_ENV=production`, `MONGO_URI`, `ADMIN_KEY`, `CLIENT_URL` (your final site URL).
4. In Atlas, allow the service's IP (or `0.0.0.0/0` while testing). Then run `npm run seed` once with the same `MONGO_URI`.

The Express server serves the built React app, so everything lives on one domain.

**Option B - split:** deploy `client` on Vercel/Netlify (build `npm run build`, output `dist`) and `server` on Render.
Set `VITE_API_URL=https://your-api.onrender.com/api` on the client and `CLIENT_URL=https://your-site.vercel.app` on the server.
