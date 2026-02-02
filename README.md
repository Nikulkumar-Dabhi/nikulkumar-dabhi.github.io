# Nikulkumar Dabhi — Portfolio

Personal portfolio site: **Data Analyst | AI Enthusiast | Python | SQL | Power BI**

Live preview: open `index.html` in a browser, or host on **GitHub Pages** (see below).

## Contents

- **About** — Summary and focus areas  
- **Experience** — McMaster, Linamar, CUPE 3906  
- **Education** — McMaster M.Eng (Co-op), Gujarat B.E.  
- **Skills** — Data & viz, ML/AI, tools, web  
- **Projects** — CNN melt pool classification, BMED techno-economic analysis  
- **Publication** — ACS 2024  
- **Certifications** — Data viz, DFLP, Python, GIS, etc.  
- **Contact** — Email, LinkedIn, Streamlit portfolio link  

## Tech

- Plain **HTML**, **CSS**, **JavaScript** (no build step)  
- Responsive layout, smooth scroll, mobile nav  
- Fonts: Outfit, JetBrains Mono (Google Fonts)  

## Use as your GitHub profile default website

To have this portfolio appear as your main profile website (e.g. `https://YOUR_USERNAME.github.io` and linked on your profile):

### 1. Create the profile Pages repo

- **Repository name must be exactly:** `YOUR_USERNAME.github.io`  
  (e.g. `nikulkumar-dabhi.github.io` for username `nikulkumar-dabhi`)
- Create the repo as **Public**, no README needed.

### 2. Push this project into that repo

```bash
cd "/Users/nikulsinhdabhi/My protfolio website"
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

- In the repo: **Settings** → **Pages**
- **Source:** Deploy from a branch  
- **Branch:** `main`, **Folder:** `/ (root)`  
- **Save**

Your site will be live at **https://YOUR_USERNAME.github.io** (e.g. `https://nikulkumar-dabhi.github.io`).

### 4. Set it as the website on your GitHub profile

- On GitHub: click your **profile picture** (top right) → **Your profile**
- Click **Edit profile** (the pencil icon)
- In **Website**, paste: `https://YOUR_USERNAME.github.io`
- Click **Save profile**

Your portfolio will then show as your default website on your GitHub profile.

---

## Host on GitHub Pages (other repo names)

If you use a different repo name (e.g. `portfolio`):

1. Create the repo and push this folder (same `git` steps as above, with your repo URL).
2. **Settings** → **Pages** → deploy from branch `main`, folder **/ (root)**.
3. Site URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`
4. In **Edit profile** → **Website**, use that full URL.  

## Optional: Use project repo as subpath

If the site is at `https://username.github.io/portfolio/`, add a `<base>` tag in `index.html` inside `<head>`:

```html
<base href="https://username.github.io/portfolio/">
```

Then asset links will resolve correctly. For a repo named `username.github.io` with content at root, no `<base>` is needed.

---

© Nikulkumar Dabhi
