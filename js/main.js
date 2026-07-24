// InnovationAmp landing page — small progressive-enhancement behaviors.
// Nothing here is required for the page to work; it's all "nice to have".

document.body.classList.add('js-ready');

// ---- Sticky nav shadow once the page has scrolled a bit -------------------
const nav = document.getElementById('nav');
const updateNavShadow = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
updateNavShadow();
window.addEventListener('scroll', updateNavShadow, { passive: true });

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

// ---- Waitlist forms ---------------------------------------------------------
// There's no backend wired up yet — this just gives visual confirmation.
// Swap the body of handleWaitlistSubmit for a real request (e.g. to
// Formspree, Mailchimp, or your own API) when you're ready to collect emails.
document.querySelectorAll('[data-waitlist-form]').forEach((form) => {
  form.addEventListener('submit', handleWaitlistSubmit);
});

function handleWaitlistSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const successMessage = form.parentElement.querySelector('[data-waitlist-success]');

  form.style.display = 'none';
  if (successMessage) {
    successMessage.style.display = 'block';
  }
}
