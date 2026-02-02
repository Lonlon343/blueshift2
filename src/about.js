import './styles/main.scss';
import { Header } from './components/Header.js';
import { About } from './components/About.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const header = new Header();
    const footer = new Footer();

    const main = document.createElement('main');

    const about = new About();
    main.appendChild(about.element);

    app.appendChild(header.element);
    app.appendChild(main);
    app.appendChild(footer.element);

    // Feature: Scroll Reveal
    const revealElements = document.querySelectorAll('.section-title, .about-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
});
