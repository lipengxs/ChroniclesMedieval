# Chronicles: Medieval SEO change log — 2026-10-07

## Release-status update

- Live source checked: Steam App 2231020 on 2026-10-07.
- Current source wording: “Planned Release Date: 2027”; the store also says the game is not yet available.
- Updated `/release-date`, `/`, `/guides`, `/news`, `/media`, `/beginner-guide`, `/system-requirements`, `/similar-games`, and legal footer wording so they no longer present the superseded 2026 release window as current.
- `/release-date` title experiment started 2026-10-07: `Chronicles: Medieval Release Date, Platforms & Latest Status`.
- Previous title: `Chronicles: Medieval Release Date - 2026 Window & Gameplay Updates`.
- Observation window: do not make another title change until at least 500 comparable impressions or 14 days, whichever is later.

## Measurement hooks

- Added GA4 `official_source_click` events to the release-status Steam and Steam News links.
- Keep the release page as the single current-status answer; news, media and guides link to it instead of repeating a date.

## Advertising and QA

- Kept the existing Adsterra unit; on updated pages it remains a single script/container placed after the primary answer and source CTA.
- Local validation passed for JSON-LD parsing, sitemap URL mapping, canonical coverage, external-link `noopener`, and `git diff --check`.
