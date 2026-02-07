export class Hero {
  constructor() {
    this.element = document.createElement('section');
    this.element.className = 'hero';
    this.render();
    this.animate();
  }

  render() {
    this.element.innerHTML = `
      <div class="hero__container">
        <div class="hero__content">
          <div class="hero__brand">
            <img src="/logo.png" alt="BlueShift Logo" class="hero__logo">
          </div>
          <h1 class="hero__title">
            <span class="reveal-text">BlueShift</span>
            <span class="reveal-text gradient-text">Consulting</span>
          </h1>
          <p class="hero__subtitle reveal-text">
            Beratung mit Fokus auf Analyse, Klarheit und Wirkung<br>
            Digitale Entscheidungen fundiert treffen – und gezielt umsetzen
          </p>
          <div class="hero__actions reveal-text">
            <a href="#services" class="btn is-primary">Unsere Leistungen</a>
            <a href="#contact" class="btn is-secondary">In Kontakt treten</a>
          </div>
        </div>
      </div>
      <div class="hero__background"></div>
    `;
  }

  animate() {
    // Basic stagger animation using CSS classes or simple JS timeout
    // In production, we'd use GSAP or IntersectionObserver for more control
    setTimeout(() => {
      const reveals = this.element.querySelectorAll('.reveal-text');
      reveals.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, index * 200);
      });
    }, 100);
  }
}
