# SABR Versicherungsagentur – Website

Marketing site for SABR insurance consulting: Next.js (App Router), TypeScript, Tailwind CSS. Bilingual (DE/EN).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Contact form with Nodemailer (SMTP)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

Copy env template and fill in your values (needed for the contact form):

```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP and `CONTACT_EMAIL` / `SMTP_FROM`.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Run production server   |
| `npm run lint` | Run ESLint               |

## Deploy on Vercel (from GitHub)

1. **Push to GitHub**
   - Create a new repo on [github.com](https://github.com/new).
   - In your project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
     git push -u origin main
     ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub).
   - **Add New** → **Project** → **Import Git Repository** and select this repo.
   - Vercel will detect Next.js; keep **Build Command** `next build` and **Output Directory** default.
   - Click **Deploy** (optional: add a custom domain later).

3. **Environment variables**
   - In the Vercel project: **Settings** → **Environment Variables**.
   - Add the same variables as in `.env.example` (e.g. `CONTACT_EMAIL`, `SMTP_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`) for **Production** (and **Preview** if you want contact form on preview URLs).
   - Redeploy after saving (Deployments → … → Redeploy).

Your site will be live at `https://your-project.vercel.app` and will redeploy on every push to `main`.
