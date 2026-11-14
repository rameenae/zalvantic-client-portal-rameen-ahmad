# Zalvantic Client Portal

A client portal where clients follow their project, approve milestones, share files and view invoices. Built as part of my internship with **Zalvantic** (programme: Building What's Next).

**Author:** Rameen Ahmad

## Overview
- Two roles: Zalvantic admin and client. Each client sees only their own projects.
- Projects with milestones, statuses and a progress bar
- Comments and file uploads
- Milestone approval flow (approve or request changes)
- Invoices with PDF download
- Email notifications and an activity feed

## Tech stack
Node.js, Express, MongoDB with Mongoose, React with Vite, TypeScript, Zod, JWT, multer, pdfkit, nodemailer, Jest, Supertest, Playwright, Docker.

## Setup and run

1. Clone the repository.
2. Copy `server/.env.example` to `server/.env` and fill in `MONGODB_URI`, `JWT_SECRET` and `PORT`.
3. Start the server:
   ```
   cd server
   npm install
   npm run seed
   npm run dev
   ```
4. In a second terminal, start the client:
   ```
   cd client
   npm install
   npm run dev
   ```
5. Open http://localhost:5173

Demo logins (synthetic data, password `Password123!`):
- Admin: `admin@zalvantic.test`
- Client: `ali@acme.test`
- Client: `sara@globex.test`

All data is synthetic demo data. No real client or personal data is used.

## Architecture
- `server/src/models`: Mongoose models (`Client`, `User`)
- `server/src/routes`, `controllers`: API endpoints (`/api/auth/login`, `/api/auth/me`, role-protected home routes)
- `server/src/middleware`: `requireAuth` checks the JWT, `requireRole` checks the user's role
- `server/src/seed.js`: creates one admin and two demo clients
- `client/src/pages`: login page, admin home, client home
- `client/src/auth`: login state shared across the app
- `client/src/components`: `ProtectedRoute`, `Layout`, `FeatureCard`

**How login works:** the client sends email and password to `POST /api/auth/login`. The server checks the password hash with bcrypt and returns a signed JWT containing the user's id, role and `clientId`. The client sends it in the `Authorization` header on later requests, and the server verifies it on every protected route.

**Data scoping (from Week 2):** every query that returns client data will be filtered by the `clientId` from the token, so a client can never read another client's data.

## Weekly pull requests
| Week | Task | Pull request |
|------|------|--------------|
| 1 | Set up the project and sign in | [PR #1](https://github.com/rameenae/zalvantic-client-portal-rameen-ahmad/pull/1) |
| 2 | Show projects | [link] |
| 3 | Show progress | [link] |
| 4 | Let people talk and share files | [link] |
| 5 | Add the key business process | [link] |
| 6 | Show what is owed | [link] |
| 7 | Keep everyone informed | [link] |
| 8 | Make it shippable | [link] |

## Learning log
What I tried, what failed, and what worked.

- **Week 1:** Set up an Express server connected to MongoDB Atlas and a React client with Vite. Built JWT login with two roles and a seed script. Learned that the server must check both the token and the role on every protected route. Problems I hit and fixed: Git was using another GitHub account's saved login (cleared in Windows Credential Manager), PowerShell blocked npm scripts (fixed with the execution policy setting), and I created React files inside the server folder by mistake (moved them to `client/src`).

## What I learned
> To be completed at the end.

## Credit
Built as part of my internship experience with Zalvantic.
