# CLAUDE.md

## Project Overview

Minimal single-page personal site for Antonio Riccelli: photo, LinkedIn and GitHub links, a short bio, emoji-labelled lines (Programming Languages, Frontend, Backend & Data, Testing & AI, Cloud & DevOps, Methodologies, Interests) and a "Let's connect!" link. Dark only, plain sans-serif, white text on dark grey with blue underlined links.

## Tech Stack

- Plain HTML and CSS, no framework, no build step, no JavaScript
- **Deploy**: Netlify, publishing the repo root as-is (`netlify.toml`)

## Development

Open `index.html` in a browser. No install or build needed.

## Project Structure

```
index.html     # The whole page
styles.css     # All styles; colours are custom properties on :root
images/        # profile.webp (448px square, shown at 224px)
favicon.png
netlify.toml   # Static deploy config
```

## Conventions

- **Indentation**: Tabs (not spaces)
- **Quotes**: Single quotes in CSS
- **Print width**: 100 characters
- **Theme**: Always dark, no light mode or toggle
- **Colors**: Background #1f1f1f, text #e8e8e8, links #4ea1ff, rules #333
- **Font**: System sans-serif stack (`system-ui`)
- **Content**: Bio and skill lines are drawn from Antonio's real work history. Don't invent facts, quotes or a personal motto. `[TODO: …]` markers are placeholders for Antonio to fill in.
