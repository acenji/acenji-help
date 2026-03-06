# ACENji Help (Documentation)

## Project Overview

Documentation site for ACENji built with VitePress. Provides user guides, tutorials, and developer documentation.

## Tech Stack

- **Framework**: VitePress 1.6
- **Hosting**: GitHub Pages
- **Domain**: help.acenji.com (via CNAME)

## Local Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
/
├── docs/                     # All content lives here
│   ├── .vitepress/
│   │   └── config.mjs        # VitePress config (sidebar, nav, theme)
│   ├── public/
│   │   ├── images/            # Static images
│   │   └── CNAME              # GitHub Pages domain
│   ├── index.md               # Homepage (VitePress frontmatter)
│   ├── getting-started/       # Getting started guides
│   ├── create-web-application/    # Web app docs + elements
│   ├── create-native-mobile-app/  # Mobile app docs + elements
│   ├── shared-concepts/       # Variables, gates, conditions
│   ├── FAQs/                  # FAQ page
│   ├── compliance/            # Compliance docs
│   └── ...                    # Other sections
├── package.json
└── .gitignore
```

## Adding New Element Docs

1. Create `docs/create-web-application/elements/<element-name>/index.md`
2. Add sidebar entry in `docs/.vitepress/config.mjs` under Web Elements items
3. Run `npm run dev` to preview

## Git Workflow

- **Default branch**: `main`
- **Feature branch**: `ivan`
- Never commit directly to `main`
- Push to `ivan`, merge via Pull Request on GitHub

## Commit Messages

- Do NOT add Co-Authored-By, Signed-off-by, or any signature lines
- Just describe what was changed, use bullet points if needed

## GitHub Pages Deployment

The site deploys via GitHub Pages. After merging to `main`:
- Build output: `docs/.vitepress/dist/`
- CNAME in `docs/public/CNAME` ensures custom domain works
- May need GitHub Actions workflow for automated builds

## Related Projects

- **acenji-website**: Marketing website
- **acenji-admin**: Admin builder (documented here)
- **acenji-ai**: Claude configuration and skills
