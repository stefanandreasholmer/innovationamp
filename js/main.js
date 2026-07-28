// InnovationAmp landing page — small progressive-enhancement behaviors.
// Nothing here is required for the page to work; it's all "nice to have".

document.body.classList.add('js-ready');

// ---- Mobile nav toggle ------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const navMobilePanel = document.getElementById('navMobilePanel');

navToggle.addEventListener('click', () => {
  const isOpen = navMobilePanel.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the mobile menu after tapping a link in it.
navMobilePanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobilePanel.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Scroll-triggered reveal animations ------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---- Product tabs (Drill-down / Insights / Reporting) ----------------------
const TAB_BLURBS = {
  drill: "Cut every ISO 56002 component by business unit, job function, tenure, or site. When a capability divides opinion instead of averaging out, it's flagged rather than smoothed over.",
  report: 'A quarterly report generated straight from pulse data — what moved, what was flagged, what is still open. Nothing manually assembled, so the numbers always match the dashboard.',
  insights: 'Anonymized open text sits next to the scores that prompted it, themed by AmpAI and ranked by severity — so a number always comes with the language behind it, and a recommendation for where to act.',
};

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const tabBlurb = document.getElementById('tabBlurb');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.tab;

    tabButtons.forEach((b) => {
      b.classList.toggle('is-active', b === button);
      b.setAttribute('aria-selected', String(b === button));
    });
    tabPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === key);
    });
    tabBlurb.textContent = TAB_BLURBS[key];
  });
});

// ---- Waitlist form ---------------------------------------------------------
// Posts to MailerLite with target="ml-embed-target", a hidden iframe (see
// the bottom of index.html), so the real page never navigates away. We
// don't preventDefault — the submission happens in the background — we
// just swap in the success message right away.
const waitlistForm = document.querySelector('[data-waitlist-form]');
const waitlistSuccess = document.querySelector('[data-waitlist-success]');

waitlistForm.addEventListener('submit', () => {
  waitlistForm.style.display = 'none';
  waitlistSuccess.style.display = 'block';
});
