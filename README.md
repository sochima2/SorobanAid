# SorobanAid

SorobanAid is a professional, deployment-ready landing page for a Soroban-focused developer project. It presents the product clearly, gives visitors a trustworthy first impression, and includes lightweight CI checks so the site can be deployed with confidence.

## Highlights

- **Professional landing page** with hero messaging, feature cards, workflow guidance, deployment callouts, and contact links.
- **Fast static architecture** with no runtime framework, bundler, or production dependency requirements.
- **Responsive styling** designed for desktop, tablet, and mobile screen sizes.
- **CI validation** that checks key files, metadata, accessibility markers, responsive CSS, and README deployment guidance.
- **Simple hosting path** for GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static file server.

## Project structure

```text
.
├── .github/workflows/ci.yml  # GitHub Actions workflow for repository checks
├── assets/
│   ├── favicon.svg           # SorobanAid browser icon
│   └── styles.css            # Responsive landing page styles
├── scripts/
│   └── ci-check.js           # Dependency-free validation script
├── index.html                # Landing page markup
├── package.json              # npm scripts and project metadata
└── README.md                 # Project documentation
```

## Quick start

Prerequisites:

- Node.js 18 or newer for the CI script.
- Python 3 for the local static server command.

Run the project locally:

```bash
npm start
```

Then open <http://localhost:4173> in your browser.

Run the validation checks:

```bash
npm run ci
```

## Customization checklist

Before deploying your production version, update these items to match your live project:

1. Replace the email address in `index.html` with the best contact address for your team.
2. Update external links to point to your documentation, app, waitlist, repository, or community channel.
3. Adjust hero copy and feature cards to reflect the exact SorobanAid product scope.
4. Keep `npm run ci` passing before each release.

## Deployment

This repository is a static site, so you can deploy the repository root without a build command.

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Choose the branch you deploy from and set the folder to `/root`.
4. Save the settings and wait for GitHub Pages to publish the site.

### Netlify

- Build command: leave blank.
- Publish directory: `.`

### Vercel

- Framework preset: **Other**.
- Build command: leave blank.
- Output directory: `.`

### Cloudflare Pages

- Framework preset: **None**.
- Build command: leave blank.
- Build output directory: `/` or `.` depending on the dashboard field.

## Continuous integration

The included GitHub Actions workflow runs the same validation command used locally:

```bash
npm run ci
```

The script verifies that the landing page, styling, README, package metadata, and deployment documentation are present and consistent. It is intentionally dependency-free so CI stays fast and reliable.

## License

This project is released under the MIT License. Add a `LICENSE` file if you need the full license text for distribution.
