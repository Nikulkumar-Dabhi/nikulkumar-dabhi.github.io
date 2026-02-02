# GitHub Pages website

A minimal static site built to be published at **username.github.io**. No build step — just HTML, CSS, and JS.

## Publish at username.github.io

### 1. Create the repo on GitHub

- **Repository name must be exactly:** `YOUR_USERNAME.github.io`  
  Example: if your GitHub username is `johndoe`, the repo must be named **`johndoe.github.io`**.
- Create it as **Public** (no README needed).

### 2. Push this folder to that repo

From this folder, run:

```bash
cd "/Users/nikulsinhdabhi/My protfolio website/github-pages-site"
git init
git add .
git commit -m "Initial site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username (e.g. `Nikulkumar-Dabhi` and `nikulkumar-dabhi.github.io`).

### 3. Turn on GitHub Pages

1. Open your repo on GitHub.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**.

After 1–2 minutes your site will be live at **https://YOUR_USERNAME.github.io**.

### 4. (Optional) Set as your profile website

- GitHub → your profile → **Edit profile** → **Website** → paste `https://YOUR_USERNAME.github.io` → Save.

## What’s in this project

- **index.html** — Single-page structure. Edit titles, text, and links.
- **styles.css** — All styles. Change colors in `:root` and layout as you like.
- **script.js** — Footer year and mobile menu. Add more if needed.
- **.nojekyll** — Tells GitHub to serve the site as static files (no Jekyll).

All asset paths are relative, so the site works at the root URL `https://username.github.io/` with no extra configuration.

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000
