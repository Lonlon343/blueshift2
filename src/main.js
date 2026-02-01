import './styles/main.scss';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { Calculator } from './components/Calculator.js';
import { ProcessHealthWizard } from './components/ProcessHealthWizard.js';
import { ProcessTimeline } from './components/ProcessTimeline.js';
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

    // Feature: Inefficiency Calculator
    const calculator = new Calculator();
    main.appendChild(calculator.element);

    // Feature: Process Health Wizard
    const wizard = new ProcessHealthWizard();
    main.appendChild(wizard.element);

    // Feature: Process Timeline
    const timeline = new ProcessTimeline();
    main.appendChild(timeline.element);

    main.appendChild(whyUs.element);

    // Integration: Wizard -> Timeline ("The Glue")
    document.addEventListener('wizard-completed', (e) => {
        const selections = e.detail;
        console.log('Wizard Completed:', selections);

        // Logic Mapping
        let phaseIndex = 0; // Default Phase 1

        if (selections.challenge === 'Zu hoher Admin-Aufwand') {
            phaseIndex = 1; // Phase 2: Analyse
        } else if (selections.challenge === 'Unklare Vertriebszahlen') {
            phaseIndex = 3; // Phase 4: Business Case / ROI
        } else if (selections.challenge === 'Fehlende Digital-Strategie') {
            phaseIndex = 2; // Phase 3: Strategie
        }

        // Trigger Timeline Interaction
        timeline.openPhase(phaseIndex);
    });

    app.appendChild(header.element);
    app.appendChild(main);
    app.appendChild(footer.element);
    // Feature: Scroll Reveal (Parallax-like effect for all elements)
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .card, .wizard__card, .calculator__card, .timeline__item');

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
