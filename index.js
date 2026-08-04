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
