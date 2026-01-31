export class Footer {
    constructor() {
        this.element = document.createElement('footer');
        this.element.className = 'footer';
        this.render();
    }

    render() {
        const year = new Date().getFullYear();
        this.element.innerHTML = `
      <div class="footer__container">
        <div class="footer__brand">
          <span class="footer__logo">BlueShift Consulting</span>
          <p class="footer__copyright">&copy; ${year} All rights reserved.</p>
        </div>
        <nav class="footer__nav">
          <a href="/impressum">Impressum</a>
          <a href="/privacy">Datenschutz</a>
        </nav>
      </div>
    `;
    }
}
