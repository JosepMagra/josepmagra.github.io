# josepmagra.dev

Source of my personal site: **[josepmagra.dev](https://josepmagra.dev)**.

I'm Josep Magraner, a Data Science graduate from UPV (València). The site collects my projects, my CV and how to reach me, in English and Spanish.

## Projects on the site

- **Macu Apps**: custom apps for personal trainers. Next.js, PostgreSQL and Supabase on my own Linux server.
- **finance-copilot**: the offline-first PWA I use to track my money. Python standard library and SQLite.
- **Rebuilding gaps in energy data**: my thesis (10/10), a hybrid system that rebuilds missing meter data so it matches the energy the meter recorded.
- **Energy forecasting for food plants**: demand and solar forecasts from 24 hours up to two weeks ahead, built during my internship at the IUIIE (UPV).

## How it's built

A static site with no framework and no build step: plain HTML, CSS and JavaScript modules, served by GitHub Pages.

- Every text has an English and a Spanish version, and `js/lang.js` switches between them.
- `js/video.js` only plays the videos while they're on screen and respects reduced motion.
- `assets/` holds the parts of the [taste-skill](assets/LICENSE-taste-skill.txt) design kit that the site uses (MIT licence).

To run it locally, serve the folder (the scripts are ES modules, so opening the file directly won't work):

```bash
python -m http.server 8000
```

## Contact

[LinkedIn](https://www.linkedin.com/in/josepmagra) · [GitHub](https://github.com/JosepMagra) · josepmagra@gmail.com

The code in `assets/` is MIT-licensed. The rest of the content (texts, photo, videos and CV) is mine, all rights reserved.
