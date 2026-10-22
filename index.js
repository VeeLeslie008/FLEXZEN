const heroImg = document.getElementById('heroImg');

if (heroImg) {
  const revealHeroImage = () => heroImg.classList.add('loaded');

  if (heroImg.complete) {
    revealHeroImage();
  } else {
    heroImg.addEventListener('load', revealHeroImage, { once: true });
    heroImg.addEventListener('error', revealHeroImage, { once: true });
  }
}

// Simple CTA feedback — swap for a real destination/handler as needed
const ctaBtn = document.getElementById('ctaBtn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    ctaBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// Fade + rise sections in as they enter the viewport
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// Placeholder handler for the practice-stories card
const storyBtn = document.getElementById('storyBtn');
if (storyBtn) {
  storyBtn.addEventListener('click', () => storyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' }));
}

  const sustainImg = document.getElementById('sustainImg');
  if (sustainImg.complete) {
    sustainImg.classList.add('loaded');
  } else {
    sustainImg.addEventListener('load', () => sustainImg.classList.add('loaded'));
  }

  // Placeholder handler — swap for an actual video/lightbox trigger
  document.getElementById('sustainPlayBtn').addEventListener('click', () => {
    console.log('Play story clicked');
  });

// Mobile nav toggle behavior
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navEl = document.querySelector('nav');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (ev) => {
    if (!navEl.contains(ev.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}


(function() {
            const items = document.querySelectorAll('.faq-item');

            items.forEach(item => {
                const question = item.querySelector('.faq-question');

                question.addEventListener('click', function(e) {
                    if (e.target.closest('a')) return;

                    const isActive = item.classList.contains('active');

                    items.forEach(other => {
                        if (other !== item && other.classList.contains('active')) {
                            other.classList.remove('active');
                            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                        }
                    });

                    if (isActive) {
                        item.classList.remove('active');
                        question.setAttribute('aria-expanded', 'false');
                    } else {
                        item.classList.add('active');
                        question.setAttribute('aria-expanded', 'true');
                    }
                });

                question.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        question.click();
                    }
                });
            });
        })();

        