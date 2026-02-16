# ACENji Help (Documentation)

## Project Overview

Documentation site for ACENji built with Docsify. Provides user guides, tutorials, and developer documentation.

## Tech Stack

- **Framework**: Docsify
- **Hosting**: GitHub Pages
- **Domain**: Configured via CNAME

## Local Development

```bash
# Install docsify-cli globally
npm install -g docsify-cli

# Serve locally
docsify serve .
```

## Project Structure

```
/
├── _sidebar.md           # Navigation sidebar
├── index.html            # Docsify configuration
├── README.md             # Homepage content
├── about/                # About section
├── getting-started/      # Getting started guides
├── create-web-application/   # Web app tutorials
├── create-native-mobile-app/ # Mobile app tutorials
├── for-developers/       # Developer docs
├── shared-concepts/      # Shared concepts
├── FAQs/                 # Frequently asked questions
├── compliance/           # Compliance docs
├── support/              # Support info
└── images/               # Documentation images
```

## Git Workflow

- **Default branch**: `main`
- **Feature branch**: `ivan`
- Never commit directly to `main`
- Push to `ivan`, merge via Pull Request on GitHub

## Commit Messages

- Do NOT add Co-Authored-By, Signed-off-by, or any signature lines
- Just describe what was changed, use bullet points if needed

## Related Projects

- **acenji-website**: Marketing website
- **acenji-admin**: Admin builder (documented here)
- **acenji-ai**: Claude configuration and skills
