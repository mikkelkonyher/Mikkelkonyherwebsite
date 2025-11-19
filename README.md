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

Authentication notes
- The deploy script pushes over SSH to avoid interactive HTTPS password prompts (GitHub no longer accepts account passwords for Git operations).
- Ensure your machine has an SSH key added to your GitHub account:
  1) Check: `ssh -T git@github.com` — you should see a success message.
  2) If not set up:
     - Generate a key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
     - Start agent and add key: `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519`
     - Copy the public key: `pbcopy < ~/.ssh/id_ed25519.pub` (macOS) or `cat ~/.ssh/id_ed25519.pub`
     - Add it at GitHub → Settings → SSH and GPG keys → New SSH key.
  3) Retry: `ssh -T git@github.com` then `npm run deploy`.

Your site URL
- https://mikkelkonyher.github.io/Mikkelkonyherwebsite/

Subsequent deploys
- Just run: npm run deploy

Troubleshooting
- If `npm run deploy` isn’t found, ensure you run it from the repository root and that `package.json` contains a `deploy` script.
- If the page loads without styles or is blank, wait a couple minutes and hard refresh. The `homepage` field in `frontend/package.json` is already set to the correct URL.
- Ensure the GitHub Pages settings are set to deploy from the `gh-pages` branch.
- Confirm that the `gh-pages` branch exists after running the deploy command (GitHub → Branches).
- If you see "Invalid username or token. Password authentication is not supported": your Git is trying to use HTTPS. Our deploy uses SSH; set up your SSH key (see Authentication notes above) and try again.

Notes
- The deploy script now delegates to the frontend app and automatically cleans any previous temporary gh-pages cache before publishing. This prevents errors like: "fatal: a branch named 'gh-pages' already exists".
