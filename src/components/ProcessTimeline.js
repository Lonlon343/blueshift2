export class ProcessTimeline {
    constructor() {
        this.element = document.createElement('section');
        this.element.className = 'timeline section';
        this.element.id = 'process';

        this.phases = [
            {
                id: 1,
                title: "Erstgespräch & Zielklärung",
                description: "Ihre Herausforderungen verstehen. Wir klären, wo der Schuh drückt.",
                cta: "Kostenloses Erstgespräch buchen",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'
            },
            {
                id: 2,
                title: "Analysephase",
                description: "Tiefgehende Prozessanalyse. Wir prüfen Ihre administrativen Abläufe.",
                cta: "Potenzial-Check starten",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
            },
            {
                id: 3,
                title: "Strategie & Maßnahmenplan",
                description: "Konkrete Handlungsempfehlungen und Roadmap-Entwicklung.",
                cta: "Beispiel-Roadmap ansehen",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 7 18 13 22 19 18 25 22 25 6 19 2 13 6 7 2 1 6"/><line x1="8" y1="2" x2="8" y2="16"/><line x1="16" y1="2" x2="16" y2="16"/></svg>'
            },
            {
                id: 4,
                title: "Business-Cases & ROI",
                description: "Wirtschaftliche Absicherung und ROI-Bewertung aller Maßnahmen.",
                cta: "ROI-Kalkulation anfragen",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>'
            },
            {
                id: 5,
                title: "Entscheidungsworkshop",
                description: "Präsentation & nächste Schritte für die Geschäftsführung.",
                cta: "Workshop anfragen",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
            }
        ];

        this.activeIndex = null; // All closed by default
        this.render();
    }

    togglePhase(index) {
        if (this.activeIndex === index) {
            this.activeIndex = null; // Toggle off
        } else {
            this.activeIndex = index;
        }
        this.renderItems(); // Re-render just items to keep structure
    }

    openPhase(index) {
        this.activeIndex = index;
        this.renderItems();

        // Find and scroll
        const container = this.element.querySelector('#timeline-items');
        if (container) {
            const item = container.querySelector(`[data-index="${index}"]`);
            if (item) {
                // Wait for expansion animation
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }

    render() {
        this.element.innerHTML = `
            <div class="container">
                <h2 class="section-title">Unser Beratungsprozess</h2>
                <p class="section-subtitle">In 5 Phasen zur operativen Exzellenz.</p>
                
                <div class="timeline__container">
                    <div class="timeline__line"></div>
                    <div class="timeline__items" id="timeline-items">
                        <!-- Items rendered here -->
                    </div>
                </div>
            </div>
        `;
        this.renderItems();
    }

    renderItems() {
        const container = this.element.querySelector('#timeline-items');
        if (!container) return;

        container.innerHTML = this.phases.map((phase, index) => {
            const isActive = this.activeIndex === index;
            return `
                <div class="timeline__item ${isActive ? 'is-active' : ''}" data-index="${index}">
                    <div class="timeline__marker">
                        <div class="marker-circle">
                            ${isActive ? phase.icon : `<span class="marker-number">${index + 1}</span>`}
                        </div>
                    </div>
                    
                    <div class="timeline__card glass-card">
                        <div class="timeline__header">
                            <span class="phase-label">Phase ${index + 1}</span>
                            <h3 class="phase-title">${phase.title}</h3>
                            <div class="phase-icon-mobile">${phase.icon}</div>
                        </div>
                        
                        <div class="timeline__body" style="height: ${isActive ? 'auto' : '0px'}">
                            <div class="timeline__content">
                                <p class="phase-description">${phase.description}</p>
                                <button class="btn is-small glow-effect">${phase.cta}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-attach events
        container.querySelectorAll('.timeline__card').forEach(card => {
            card.addEventListener('click', (e) => {
                const item = e.target.closest('.timeline__item');
                const index = parseInt(item.dataset.index);
                this.togglePhase(index);
            });
        });
    }
}
