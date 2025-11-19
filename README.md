# Deploying to GitHub Pages

This project is configured to deploy the React frontend (in the `frontend` folder) to GitHub Pages using the `gh-pages` package.

Prerequisites
- You have this repository pushed to GitHub.
- Your Git remote `origin` points to the GitHub repo.
- Node.js and npm are installed locally.

One-time GitHub setup
1) Push the latest changes (including the deploy scripts) to GitHub:
   - git add -A
   - git commit -m "Add gh-pages deploy"
   - git push
2) On GitHub: Repository → Settings → Pages
   - Build and deployment → Source: Deploy from a branch
   - Branch: gh-pages, Folder: /(root)
   - Save

How to deploy (from your computer)
1) From the repository root:
   - npm install
   - npm run deploy

What it does
- Builds the React app inside `frontend` to `frontend/build`.
- Publishes that build to the `gh-pages` branch.

Your site URL
- https://mikkelkonyher.github.io/Mikkelkonyherwebsite/

Subsequent deploys
- Just run: npm run deploy

Troubleshooting
- If `npm run deploy` isn’t found, ensure you run it from the repository root and that `package.json` contains `deploy` and `predeploy` scripts.
- If the page loads without styles or is blank, wait a couple minutes and hard refresh. The `homepage` field in `frontend/package.json` is already set to the correct URL.
- Ensure the GitHub Pages settings are set to deploy from the `gh-pages` branch.
- Confirm that the `gh-pages` branch exists after running the deploy command (GitHub → Branches).
