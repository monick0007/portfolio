# Portfolio — Monik Aghariya

Incident response portfolio. Built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

Live at: https://monick0007.github.io/portfolio/

## Run locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Open http://127.0.0.1:8000/portfolio/ — live-reloads as you edit files in `docs/`.

To preview the built output exactly as it deploys:

```bash
mkdocs build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and force-pushes it to the `gh-pages` branch. Set the Pages source to `gh-pages`
once, in repo Settings → Pages.

First time:

```bash
git add .
git commit -m "Portfolio site"
git push -u origin main
```

Create the repo at github.com/new named `portfolio` before pushing. If you name it
something else, update `site_url` in `mkdocs.yml` to match.

## Structure

```
mkdocs.yml                     site config, nav, theme
requirements.txt               pinned build dependencies
docs/
  index.md                     home: masthead, lifecycle, mission
  experience.md                roles, education
  skills.md                    toolkit, certifications
  projects/index.md            the three projects
  contact.md                   contact links
  assets/                      portrait, certification badges
  stylesheets/extra.css        the custom identity layer over Material
  javascripts/portfolio.js     toolkit filter, reading progress
```

`site/` is generated output and is git-ignored.

## Notes

- Dependencies are pinned. MkDocs 2.0 is a breaking release, so do not loosen
  them without rebuilding and checking every page.
- The employer is deliberately anonymized throughout. Keep it that way.
