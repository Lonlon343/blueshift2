import './styles/main.scss';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { WhyUs } from './components/WhyUs.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const header = new Header();
    const hero = new Hero();
    const about = new About();
    const services = new Services();
    const whyUs = new WhyUs();
    const footer = new Footer();

    const main = document.createElement('main');
    main.appendChild(hero.element);
    main.appendChild(about.element);
    main.appendChild(services.element);
    main.appendChild(whyUs.element);

    app.appendChild(header.element);
    app.appendChild(main);
    app.appendChild(footer.element);
});
