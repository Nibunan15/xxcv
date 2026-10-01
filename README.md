# Cybernaut Website: MERN project

MongoDB + Express + React + Node. The Express server delivers the **whole approved website, pixel-identical to the design** (every page, animation, video and the mobile layouts), plus the API.

## Folders

| Folder | What it is |
|---|---|
| `web/` | The complete website: all 48 pages, shared Navbar/Footer, animations, images, videos, favicon. **Source of truth, do not edit the look here without the designer.** |
| `server/` | Express. Serves `web/` with clean URLs and runs the API (leads, events, programs, resources, auth with JWT). |
| `client/` | React 18 + Vite + React Router scaffold, for pages you later want as React components (for example logged-in dashboards). Optional. |

## Run it

```bash
cp server/.env.example server/.env    # set MONGO_URI + JWT_SECRET
npm run setup                         # installs root, server, client
npm run seed                          # optional sample programs + events
npm start                             # http://localhost:5000
```

The website works even without MongoDB. Only the `/api` routes that need the database fail.

## Deploy (one Node server)

1. Upload the project to any Node host (Render, Railway, a VPS with PM2, Hostinger Node).
2. Set `MONGO_URI`, `JWT_SECRET` and `PORT` as environment variables.
3. Build: `npm run setup`. Start: `npm start`.
4. Point the domain at it. Every page is at a clean URL, as in the table below.

## Page URLs

| URL | File |
|---|---|
| `/ai-agents` | `web/AI Agents.dc.html` |
| `/ai-machine-learning` | `web/AI Machine Learning.dc.html` |
| `/aarvam-community` | `web/Aarvam Community.dc.html` |
| `/about` | `web/About Company.dc.html` |
| `/blogs` | `web/Blogs.dc.html` |
| `/campus-leads` | `web/Campus Leads.dc.html` |
| `/careers` | `web/Careers.dc.html` |
| `/coming-soon` | `web/Coming Soon.dc.html` |
| `/contact` | `web/Contact.dc.html` |
| `/saas` | `web/Cybernaut SaaS.dc.html` |
| `/cybersecurity` | `web/Cybersecurity.dc.html` |
| `/data-analytics` | `web/Data Analytics.dc.html` |
| `/events` | `web/Events.dc.html` |
| `/foundation-programs` | `web/Foundation Programs.dc.html` |
| `/full-stack-development` | `web/Full Stack Development.dc.html` |
| `/generative-ai` | `web/Generative AI.dc.html` |
| `/` | `web/Home.dc.html` |
| `/insights` | `web/Insights.dc.html` |
| `/login` | `web/Login.dc.html` |
| `/partner-with-us` | `web/Partner With Us.dc.html` |
| `/placement-1-year-track` | `web/Placement 1-Year Track.dc.html` |
| `/placement-2-year-track` | `web/Placement 2-Year Track.dc.html` |
| `/placement-4-year-track` | `web/Placement 4-Year Track.dc.html` |
| `/placement-training` | `web/Placement Training.dc.html` |
| `/product-updates` | `web/Product Updates.dc.html` |
| `/professional-programs` | `web/Professional Programs.dc.html` |
| `/programs-college` | `web/Programs College.dc.html` |
| `/programs-students` | `web/Programs Students.dc.html` |
| `/programs` | `web/Programs.dc.html` |
| `/prompt-engineering` | `web/Prompt Engineering.dc.html` |
| `/resources` | `web/Resources.dc.html` |
| `/student-community` | `web/Student Community.dc.html` |
| `/student-contest-leaderboard` | `web/Student Contest Leaderboard.dc.html` |
| `/student-contest-live` | `web/Student Contest Live.dc.html` |
| `/student-contest-mock` | `web/Student Contest Mock.dc.html` |
| `/student-contest` | `web/Student Contest.dc.html` |
| `/student-courses` | `web/Student Courses.dc.html` |
| `/student-dashboard` | `web/Student Dashboard.dc.html` |
| `/student-practice` | `web/Student Practice.dc.html` |
| `/student-profile` | `web/Student Profile.dc.html` |
| `/student-resumecraft` | `web/Student ResumeCraft.dc.html` |
| `/student-stories` | `web/Student Stories.dc.html` |
| `/student-study-room` | `web/Student Study Room.dc.html` |
| `/sunday-series-masterclass` | `web/Sunday Series Masterclass.dc.html` |
| `/sunday-series` | `web/Sunday Series.dc.html` |
| `/system-design` | `web/System Design.dc.html` |
| `/tech-trio` | `web/Tech Trio.dc.html` |
| `/ui-ux-design` | `web/UI UX Design.dc.html` |

`GET /sitemap.json` returns this list. An unknown URL shows the Coming Soon page with status 404.

## Editing pages

Each `web/*.dc.html` holds its markup between `<x-dc>` and `</x-dc>` with inline styles, plus a `<script data-dc-script>` logic class (a React class component minus `render()`). `support.js` renders them in the browser with React. Keep `support.js`, `Navbar.dc.html` and `Footer.dc.html` next to the pages.

- Text or colour change: edit the inline style or text directly in the page's `.dc.html`.
- Navbar or Footer: edit once in `web/Navbar.dc.html` or `web/Footer.dc.html`. It applies to every page.

## API

| Method | Path | Body / query |
|---|---|---|
| POST | `/api/leads` | `{name, email, phone?, role, interest?, message?, source}` |
| GET | `/api/events`, `/api/events/:slug` | |
| POST | `/api/events/:slug/register` | `{name, email, phone, college}` |
| GET | `/api/programs?audience=students\|college`, `/api/programs/:slug` | |
| GET | `/api/resources` | |
| POST | `/api/auth/register`, `/api/auth/login` | `{email, password, role?}` → `{token, role}` |
| GET | `/api/health` | → `{ok, db}` |

To connect a form, add a `fetch('/api/leads', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})` in that page's submit handler.
