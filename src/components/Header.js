export class Header {
  constructor() {
    this.element = document.createElement('header');
    this.element.className = 'header';
    this.render();
    this.addEventListeners();
  }

  render() {
    this.element.innerHTML = `
      <div class="header__container">
        <a href="/" class="header__logo">
          <img src="/logo.png" alt="BlueShift Consulting" class="header__logo-img">
          <span>BlueShift</span>
        </a>
        
        <button class="header__toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="header__nav">
          <ul class="header__menu">
            <li><a href="/process.html">Prozess</a></li>
            <li><a href="/about.html">Über uns</a></li>
            <li><a href="/index.html#services">Services</a></li>
            <li><a href="/index.html#why-us">Warum BlueShift</a></li>
            <li><a href="/index.html#contact" class="btn is-primary">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    `;
  }

  addEventListeners() {
    const toggle = this.element.querySelector('.header__toggle');
    const nav = this.element.querySelector('.header__nav');

    toggle.addEventListener('click', () => {
      this.element.classList.toggle('is-open');
    });

    // Close menu when clicking a link
    this.element.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.element.classList.remove('is-open');
      });
    });

    // Glass effect on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.element.classList.add('is-scrolled');
      } else {
        this.element.classList.remove('is-scrolled');
      }
    });
  }
}
