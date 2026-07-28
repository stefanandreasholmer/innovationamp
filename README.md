# InnovationAmp landing page

Static one-page site — plain HTML, CSS, and JS, no build step.

## Structure

```
index.html          the whole page, one section at a time
css/style.css        all styles, colors and spacing live in :root variables at the top
js/main.js            nav toggle, scroll-reveal animations, product tabs, waitlist form
assets/images/        product screenshots and hero background (WebP/JPG)
assets/favicon.svg    browser tab icon
```

## Running it locally

Any static file server works, e.g.:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Editing

- Colors, fonts, and spacing are defined once as CSS variables at the top of `css/style.css` — change them there rather than hunting through each section.
- Copy lives directly in `index.html`, section by section, in the same order it appears on the page.
- The waitlist form in the footer posts to MailerLite (account 539507) via a hidden iframe target, so the page never navigates away on submit — see the comments in `js/main.js` and around the `<iframe name="ml-embed-target">` near the bottom of `index.html`.
- The "Drill-down / Insights / Reporting" tabs in the product section are plain show/hide panels driven by `js/main.js` — add a new tab by adding a button with a `data-tab` value, a panel with a matching `data-panel` value, and an entry in the `TAB_BLURBS` object.
