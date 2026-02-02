import './styles/main.scss';
import { Header } from './components/Header.js';
import { ProcessHealthWizard } from './components/ProcessHealthWizard.js';
import { ProcessTimeline } from './components/ProcessTimeline.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const header = new Header();
    const footer = new Footer();

    const main = document.createElement('main');

    // Feature: Process Health Wizard
    const wizard = new ProcessHealthWizard();
    main.appendChild(wizard.element);

    // Feature: Process Timeline
    const timeline = new ProcessTimeline();
    main.appendChild(timeline.element);

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

    // Feature: Scroll Reveal (Parallax-like effect)
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .card, .wizard__card, .timeline__item');

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
