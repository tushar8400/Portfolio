Tushar Kumar — Cloud & DevOps, MERN and AI Portfolio
A full-stack developer portfolio built with MongoDB, Express.js, React (Vite), and Node.js. It showcases projects, technical skills, certifications, and contact information, with an emphasis on MERN Stack development, Cloud & DevOps, and practical AI integration.
Projects and certifications are stored in MongoDB and served by the Express API. The contact form saves messages to MongoDB. If the API is offline, the frontend falls back to the local data in client/src/data/siteData.js, helping the portfolio remain usable.
Build with MERN. Deploy with DevOps. Innovate with AI.

Focus Areas
MERN Stack Development
- React with Vite for the frontend
- Node.js and Express.js for REST APIs
- MongoDB and Mongoose for data storage
- Reusable UI components and responsive design
- Contact form and project/certification data management
Cloud & DevOps
This portfolio can also be used to demonstrate a practical application delivery workflow. Depending on what has been configured in the repository, potential additions include:
- Git and GitHub for version control
- Docker and Docker Compose for containerization
- CI/CD with GitHub Actions or Jenkins
- Cloud deployment using Render, Railway, AWS, or another platform
- Kubernetes for container orchestration
- Logging, monitoring, and deployment documentation
AI Integration
AI features can be added as a separate backend-powered capability, for example:
- A portfolio assistant that answers questions about projects and skills
- AI-powered project search or summaries
- An AI support assistant for a featured project
- Workflow automation using an AI provider API
Note: DevOps tools and AI features listed as possible extensions should only be described as completed after they have been implemented and tested. Keep this README aligned with the actual repository.
1. Setup
You need Node.js 18+ and either a local MongoDB instance or a MongoDB Atlas cluster.
npm run install:all
cp server/.env.example server/.env
# Edit server/.env and set MONGO_URI and ADMIN_KEY
npm run seed
npm run dev
The API runs on port 5000 and the site runs at http://localhost:5173.
Environment variables
Configure these in server/.env:
MONGO_URI=your_mongodb_connection_string
ADMIN_KEY=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
Use the variable names required by your actual server configuration. Never commit .env files or real secrets to GitHub.
If you later add an AI provider, keep its API key on the server, for example as AI_API_KEY. Never expose private AI keys in frontend variables such as VITE_AI_API_KEY.
2. Make It Yours
What to customize	Where
Profile photo	Save as client/public/tushar.jpg. A portrait on a dark or transparent background works well. Without it, the site displays a TK monogram.
Resume	Save as client/public/resume.pdf. The Resume button downloads it.
Email, GitHub, LinkedIn, LeetCode	client/src/data/siteData.js
Introduction, About text, stats, skills, education	client/src/data/siteData.js
Project screenshots	Save in client/public/projects/. The included images may be placeholders.
Project titles, links, technology tags	server/seed.js, then run npm run seed
Colors and styling	CSS variables at the top of client/src/index.css


Important: npm run seed replaces all projects and certifications with the starter data. Run it only when you want to reset those collections.
3. Project Structure
server/
  server.js                 Express app (CORS, Helmet, routes, error handler)
  config/
    db.js                   Mongoose connection
  models/
    Project.js
    Certification.js
    Message.js
  routes/
    projects
    certifications
    contact
  middleware/
    adminOnly.js             Protects write routes with ADMIN_KEY
  seed.js                    Starter project and certification data

client/
  index.html
  public/
    tushar.jpg
    resume.pdf
    projects/
  src/
    components/              Navbar, Hero, About, Skills, Projects,
                             Education, Certifications, Contact, Footer
    data/siteData.js         Text, links, skills, fallback data
    api.js
    hooks/useRemote.js
    index.css
If you add deployment or AI integrations later, a possible extension is:
portfolio/
  client/
  server/
    services/                 External services, such as AI integrations
  Dockerfile                  Optional container configuration
  docker-compose.yml          Optional local multi-container setup
  .github/workflows/           Optional GitHub Actions CI/CD
  Jenkinsfile                 Optional Jenkins pipeline
  k8s/                         Optional Kubernetes manifests
Only add files and folders that exist in your project.
4. API Reference
Method	Route	Access	Purpose
GET	/api/projects	Public	List projects
POST / PUT / DELETE	/api/projects[/:id]	Admin	Add, edit, or remove projects
GET	/api/certifications	Public	List certifications
POST / PUT / DELETE	/api/certifications[/:id]	Admin	Add, edit, or remove certifications
POST	/api/contact	Public, rate-limited	Save a contact message (5 per hour per IP)
GET	/api/contact	Admin	Read contact messages


Admin routes require the header x-admin-key with the value of ADMIN_KEY from server/.env.
Add a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "x-admin-key: YOUR_KEY" \
  -d '{"title":"My New App","description":"What it does","tech":["React","Node.js"],"githubUrl":"https://github.com/you/app","order":3}'
Read contact messages
curl http://localhost:5000/api/contact \
  -H "x-admin-key: YOUR_KEY"
Do not expose the admin key in frontend code or commit it to version control.
5. Deployment
Option A — One service
Suitable for platforms such as Render or Railway when the Express server serves the built React application.
1. Push the repository to GitHub.
2. Create a MongoDB Atlas cluster and copy its connection string.
3. Create a web service with build command:
   npm run install:all && npm run build
4. Set the start command:
   npm start
5. Configure environment variables:
   - NODE_ENV=production
   - MONGO_URI
   - ADMIN_KEY
   - CLIENT_URL set to your final site URL
6. Configure Atlas network access for your deployment. Avoid broad access such as 0.0.0.0/0 in production unless you understand and accept the security implications.
7. Run npm run seed once against the intended database if you need the starter records.
Confirm that your hosting platform's build and start commands match the scripts in your root package.json.
Option B — Separate frontend and backend
1. Deploy client to Vercel or Netlify with build command npm run build and output directory dist.
2. Deploy server to Render or another Node.js host.
3. Configure the frontend environment variable:
   VITE_API_URL=https://your-api.example.com/api
4. Configure the backend environment variable:
   CLIENT_URL=https://your-site.example.com
Replace example domains with your actual deployment URLs and ensure the Express CORS configuration allows the frontend origin.
6. DevOps Roadmap
A practical path for making this portfolio demonstrate DevOps skills:
GitHub
  ↓
CI pipeline (GitHub Actions or Jenkins)
  ↓
Install dependencies and run checks
  ↓
Build React frontend and Node.js backend
  ↓
Build Docker image(s)
  ↓
Publish to a container registry
  ↓
Deploy to cloud hosting or Kubernetes
  ↓
Logs, monitoring, and maintenance
Suggested milestones:
- [ ] Add linting and automated tests
- [ ] Create and test Dockerfiles
- [ ] Run the application locally with Docker Compose
- [ ] Configure CI for pull requests and pushes
- [ ] Deploy to a cloud platform
- [ ] Add Kubernetes manifests if needed for the learning goal
- [ ] Document environment configuration, health checks, and rollback steps
- [ ] Add monitoring and logging where appropriate
7. AI Integration Ideas
AI is an optional extension and is not required for the existing portfolio to run.
Possible future features:
- Portfolio AI assistant: answers visitor questions using approved portfolio content.
- Project summarizer: creates concise summaries of project descriptions.
- Smart project search: helps visitors find projects by technology or use case.
- Support assistant: provides guidance for a project such as TK Ride.
A typical architecture:
React UI → Express API → AI Provider API
                    ↘ MongoDB (only if persistence is needed)
Keep provider credentials on the backend, validate inputs, set usage limits, and avoid sending private or sensitive data to external AI services.
8. Security Checklist
- [ ] Keep .env and all secrets out of Git.
- [ ] Use a long, random ADMIN_KEY.
- [ ] Restrict database and hosting access appropriately.
- [ ] Validate and sanitize contact form and API input.
- [ ] Keep admin credentials and AI keys on the server.
- [ ] Retain rate limiting on public endpoints.
- [ ] Use HTTPS in production.
- [ ] Avoid committing private messages or production database exports.
9. Contact
- Name: Tushar Kumar
- GitHub: Add your GitHub profile URL
- LinkedIn: Add your LinkedIn profile URL
- Email: Add your professional email
- Portfolio: Add your deployed portfolio URL
License
Add a license if you want to specify how others may use, modify, and distribute this project.
MERN Stack • Cloud & DevOps • AI
