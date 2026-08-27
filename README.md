# mikkelkonyher.dk

React-frontend (i mappen `frontend`) som deployes til GitHub Pages via GitHub Actions.

## Kør lokalt

```
cd frontend
npm install
npm start
```

Appen kører på http://localhost:3000.

## Deploy

Deploy sker automatisk: **push til `main`**, så bygger og udgiver
`.github/workflows/deploy.yml` sitet til https://mikkelkonyher.dk.

Status for det enkelte deploy kan følges under repoets fanen **Actions**.
Workflowet kan også startes manuelt derfra (**Run workflow**).

## Opsætning

- GitHub Pages-kilden er sat til **GitHub Actions** (Settings → Pages).
- Custom domæne `mikkelkonyher.dk` er sat i Settings → Pages og ligger
  desuden i `frontend/public/CNAME`, så det følger med i buildet.
- `homepage` i `frontend/package.json` skal matche domænet — ellers får
  assets et forkert sti-præfiks og sitet bliver blankt.

## Fejlfinding

- Blankt site efter deploy: tjek `homepage` i `frontend/package.json`
  og at `CNAME` stadig ligger i `frontend/public`.
- Build fejler i Actions men virker lokalt: workflowet sætter `CI: false`,
  fordi `react-scripts` ellers behandler eslint-warnings som fejl.
