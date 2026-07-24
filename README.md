# InnovationAmp landing page

Static one-page site — plain HTML, CSS, and JS, no build step.

## Structure

```
index.html          the whole page, one section at a time
css/style.css        all styles, colors and spacing live in :root variables at the top
js/main.js            nav toggle, scroll-reveal animations, waitlist form handling
assets/images/        product screenshots and the founder photo (WebP)
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
- The waitlist forms (`js/main.js`) currently just show a success message — no email is actually sent anywhere yet. Wire `handleWaitlistSubmit` up to a real endpoint (Formspree, Mailchimp, your own API, etc.) when you're ready to start collecting signups.
