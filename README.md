# zalvantic-client-portal-rameen-ahmad
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
> To be completed as the project grows.

1. Clone the repository
2. Copy `server/.env.example` to `server/.env` and fill in the values
3. Install and run the server: `cd server && npm install && npm run dev`
4. Install and run the client: `cd client && npm install && npm run dev`
5. Seed demo data: `[seed command]`

All data is synthetic demo data. No real client or personal data is used.

## Architecture
> To be completed. Explain the folders, how login works, and how client data is filtered by `clientId`.

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
What I tried, what failed, and what worked.

- Week 1: [notes]

## What I learned
> To be completed at the end.

## Credit
Built as part of my internship experience with Zalvantic.
2. The pull request template
In VS Code’s file list, make a folder named .github (with the dot).
Inside it, make a file named pull_request_template.md.
Paste exactly this and save. Don’t fill anything in yet. Leave it as it is, because GitHub copies it into every PR and you fill it in each week:
markdown
## Week N: <task title>

### Summary
What did you build this week, in 3-5 lines?

### How to run or test it
Exact commands or links so anyone can see it working.

### Screenshots or demo
Add images, a short video, or links.

### "Done when" checklist
- [ ] Condition from the task card
- [ ] Condition from the task card

### AI tools used
Which tools, for what, and what you checked yourself.

### What I learned, and what is still unclear
Notes for yourself and for anyone reading your repository.