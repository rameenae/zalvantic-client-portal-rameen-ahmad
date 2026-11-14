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
> To be completed.

## Weekly pull requests
| Week | Task | Pull request |
|------|------|--------------|
| 1 | Set up the project and sign in | [link] |
| 2 | Show projects | [link] |
| 3 | Show progress | [link] |
| 4 | Let people talk and share files | [link] |
| 5 | Add the key business process | [link] |
| 6 | Show what is owed | [link] |
| 7 | Keep everyone informed | [link] |
| 8 | Make it shippable | [link] |

## Learning log
- Week 1: Set up an Express server connected to MongoDB Atlas. Built JWT login with two roles (admin and client) and a seed script. Learned that the server must check the token and the role on every protected route. Problems I hit: Git was using another GitHub account's saved login (fixed in Windows Credential Manager), PowerShell blocked npm scripts (fixed with the execution policy setting), and I created React files inside the server folder by mistake (moved them to `client/src`).

## What I learned
> To be completed at the end.

## Credit
Built as part of my internship experience with Zalvantic.