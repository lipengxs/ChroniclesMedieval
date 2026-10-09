# Medieval Field Notes — independent fan guide

Static HTML/CSS/JavaScript commentary about Chronicles: Medieval. This site is not affiliated with, operated by, or endorsed by Raw Power Games.

## Images

All current illustrations are historical artworks supplied as CC0 by The Cleveland Museum of Art. They are not game screenshots or official game artwork. See `/media` for credits and `static/images/open-art/credits.json` for individual sources, license URLs, dates and hashes. The site icon is an original simple book symbol.

Previous game images, the game logo and the old favicon were withdrawn on October 9, 2026. Do not restore them from Git history or redeploy older revisions. Keep any evidence archives outside the publish directory.

## Local preview

No build step or npm dependencies are required. Run `python3 -m http.server 8000`, then open `http://localhost:8000/`. With this basic server, visit secondary pages using their `.html` filenames. Cloudflare Pages provides the extensionless production routes.

## Deployment

The Cloudflare Pages project `chroniclesmedieval` is connected to this repository's `main` branch and serves `chronicles-medieval.com`. Verify deployment status after each push. The top-level `404.html` is intentional: removed asset URLs must return 404, never the homepage.

`_headers` prevents caching of the retirement worker and removed asset routes. `sw.js` only retires the previous advertising worker; it must not import third-party scripts. Advertising integrations have been removed.

Deployment history may retain old public copies. Updating production does not remove historical deployment URLs; audit those separately. Internal case records and private backups are not part of this repository.
