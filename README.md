# Andrei Popov's portfolio

My personal site, with an about section, projects and a contact form. Live at [andrei-popov.me](https://andrei-popov.me).

Built with Next.js, React, Motion, Tailwind CSS and Nodemailer.

## Run locally

Requires Node.js 24.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

The contact form sends mail through Gmail. To try it, create `.env.local`:

```bash
USER_EMAIL=you@gmail.com   # Gmail account that sends the message
PASS_EMAIL=...             # an app password for that account
SEND_EMAIL=you@example.com # where messages are delivered
```

Without these the form shows a send error. `NEXT_PUBLIC_GA_TRACKING_ID` is optional and turns on Google Analytics.

Other scripts: `npm run build`, `npm start`, `npm run lint`.
