# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio site (`truongvanvuembedded.github.io`) for Vu Truong, an Embedded Software Engineer. It is plain HTML/CSS/JS with no build system, package manager, bundler, or test suite - files are served as-is (e.g. via GitHub Pages).

## Development

There is no build/lint/test tooling in this repo. To preview changes, just open `index.html` in a browser or serve the directory statically, e.g.:

```
python3 -m http.server 8000
```

There are no automated tests. Verify changes by opening the affected page(s) in a browser.

## Architecture

- `index.html` - the single-page site (home, about, skills, experience, key projects, contact sections identified by `id`).
- `assets/css/styles.css` - the compiled stylesheet actually linked by all HTML pages.
- `assets/scss/styles.scss` - the SCSS source for `styles.css`. **There is no build step configured in this repo** - after editing the `.scss`, the `.css` must be compiled/updated by hand (e.g. with the Sass CLI or a Sass-enabled editor plugin) and kept in sync manually.
- `assets/js/main.js` - nav menu toggle, scroll-based active-link highlighting, and ScrollReveal animation setup (loaded from a CDN in `index.html`).
- `assets/js/contact.js` - EmailJS integration for the contact form (service/template IDs and the public key are embedded directly in the file).
- `assets/project/*.html` - one static detail page per key project (e.g. `ebike.html`, `ev_charger.html`, `mpp-charger.html`, `agv.html`), linked from the "Key Projects" section of `index.html`. Each follows the same structure: header with image/overlay, then `project-body` sections (Project Description, Key Feature, Role, My Responsibilities, Technologies), then a footer link back to `../../index.html`. These pages reference `../css/styles.css` and `../img/project/...` (paths relative to `assets/project/`).
- `assets/blog/<topic>/*.html` - placeholder pages for a planned blog/notes section, organized into topic folders (`mcu`, `os`, `protocols`, `rtos`, `serial`, `test`, `build`, `wireless`, `buffer`, `tool`, `udpate`). Most of these files are currently empty stubs; the blog nav link in `index.html` is commented out, so this section is not yet live.
- `assets/img/` - images grouped by section (`about`, `project`, `blog`, `degree`).
- `assets/cv/` - downloadable CV PDF linked from the home section.

## Conventions

- When adding a new key project, add both a card entry in the `#project` section of `index.html` (image + `work__label`) and a corresponding detail page under `assets/project/` following the existing template structure (header/body/footer sections listed above).
- CSS class names follow BEM-style naming (`block__element`, `block__element--modifier`), consistent with the existing `styles.scss`.
- Content in `index.html` (experience, skills, project descriptions) reflects the site owner's real resume - treat wording changes here as content edits, not just markup edits.
