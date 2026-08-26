# Chronowire Studio — Astro Site

This is the content-driven version of the Chronowire Studio website.

## What Astro does

Astro is the website framework. You write pages/components plus Markdown content, and Astro turns it all into fast static HTML.

The important part for day-to-day updates is that you usually **do not edit the page layout**.

### Blog posts
Add files to:

`src/content/blog/`

Example:

```md
---
title: "Combat System Preview"
description: "A first look at combat in Digimon Odyssey."
pubDate: 2026-09-10
project: "Digimon Odyssey"
category: "Development Blog"
featured: true
draft: false
---

Write the article here.
```

The site automatically:
- Creates the article page
- Adds it to the Updates page
- Sorts it by date
- Uses a featured post on the homepage

### Database entries
Add files to:

`src/content/database/`

Example:

```md
---
title: "Greymon"
description: "Information about Greymon in Digimon Odyssey."
category: "Digimon"
project: "Digimon Odyssey"
order: 30
draft: false
---

## Overview

Write the information here.

## Evolution

Add evolution information.
```

The site automatically:
- Creates a wiki page
- Adds it to the Database
- Makes it searchable
- Places it in its category

## Local development

Install Node.js 22+, then:

```bash
npm install
npm run dev
```

Open the local URL Astro prints in your terminal.

## GitHub setup

1. Create a new GitHub repository, for example `chronowire-studio-site`.
2. Upload all files from this folder to the repository.
3. Make sure the default branch is named `main`.
4. In the repository open:
   Settings → Pages
5. Under **Build and deployment**, choose **GitHub Actions** as the Source.
6. Push/commit a change to `main`.
7. Open the repository's **Actions** tab and wait for "Deploy Astro site to GitHub Pages" to complete.
8. GitHub will show the live Pages URL.

After that, every commit to `main` automatically rebuilds and publishes the website.

## ChatGPT workflow

Once your GitHub repository is available to ChatGPT with write access, the intended workflow is:

- "Add this as a Digimon Odyssey blog post."
- "Create a database entry for Greymon using these details."
- "Update the evolution page with these requirements."
- "Make this article featured."

ChatGPT edits the Markdown/content files in GitHub. The commit triggers the GitHub Pages action, and the live website updates automatically.

For safer production use, prefer:
1. ChatGPT creates a branch / pull request.
2. You review it.
3. Merge into `main`.
4. GitHub Pages deploys it.

That gives you live updates without allowing accidental unreviewed changes to the production site.

## Main URLs

Roblox Group:
https://www.roblox.com/communities/4473875/Chronowire-Studio#!/about

Digimon Odyssey:
https://www.roblox.com/games/92494551546395/Digimon-Odyssey
