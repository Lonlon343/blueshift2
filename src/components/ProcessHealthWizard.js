export class ProcessHealthWizard {
    constructor() {
        this.element = document.createElement('section');
        this.element.className = 'wizard section';
        this.element.id = 'diagnosis';

        this.state = {
            step: 1,
            totalSteps: 4,
            selections: {
                industry: null,
                challenge: null,
                goal: null
            },
            isAnalyzing: false
        };

        this.data = {
            industries: [
                { id: 'craft', label: 'Handwerk', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' },
                { id: 'legal', label: 'Kanzlei/Recht', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8 21h8"/><path d="M3 7h2"/><path d="M19 7h2"/><path d="M6 7l2.12-2.12a2 2 0 0 1 2.83 0L12 6l1.05-1.12a2 2 0 0 1 2.83 0L18 7"/><path d="M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/></svg>' },
                { id: 'retail', label: 'Handel/E-Com', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>' },
                { id: 'service', label: 'Dienstleistung', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>' },
                { id: 'agency', label: 'Agentur', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 12v.01"/><path d="M12 16v.01"/></svg>' },
                { id: 'health', label: 'Gesundheit', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>' }
            ],
            challenges: [
                { id: 'admin', label: 'Zu hoher Admin-Aufwand', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' },
                { id: 'sales', label: 'Unklare Vertriebszahlen', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>' },
                { id: 'speed', label: 'Langsame Angebote', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
                { id: 'strategy', label: 'Fehlende Strategie', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 7 18 13 22 19 18 25 22 25 6 19 2 13 6 7 2 1 6"/></svg>' }
            ],
            goals: [
                { id: 'cost', label: 'Kosten senken' },
                { id: 'revenue', label: 'Umsatz steigern' },
                { id: 'relief', label: 'Mitarbeiter entlasten' },
                { id: 'compliance', label: 'Rechtssicherheit' }
            ]
        };

        this.render();
    }

    handleSelection(type, value) {
        this.state.selections[type] = value;

        if (this.state.step < 3) {
            this.state.step++;
        } else {
            this.state.step = 4;
            this.state.isAnalyzing = true;
            this.render();

            // Simulate analysis
            setTimeout(() => {
                this.state.isAnalyzing = false;
                this.render();

                // Trigger 'wizard-completed' event for Glue logic
                const event = new CustomEvent('wizard-completed', {
                    detail: this.state.selections,
                    bubbles: true
                });
                this.element.dispatchEvent(event);
            }, 2000);
            return;
        }

        this.render();
    }

    render() {
        const progress = ((this.state.step - 1) / (this.state.totalSteps - 1)) * 100;

        this.element.innerHTML = `
            <div class="container">
                 <div class="wizard__card glass-card">
                    ${this.state.step < 4 ? `
                    <div class="wizard__header">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="step-indicator">Schritt ${this.state.step} von 3</span>
                    </div>
                    ` : ''}

                    <div class="wizard__content">
                        ${this.renderStepContent()}
                    </div>
                 </div>
            </div>
        `;

        this.attachEvents();
    }

    renderStepContent() {
        if (this.state.step === 1) {
            return `
                <h2 class="wizard__title">In welcher Branche sind Sie tätig?</h2>
                <div class="wizard__grid">
                    ${this.data.industries.map(item => `
                        <button class="wizard__option" data-type="industry" data-value="${item.label}">
                            <div class="option-icon">${item.icon}</div>
                            <span class="option-label">${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }

        if (this.state.step === 2) {
            return `
                <h2 class="wizard__title">Was ist aktuell Ihre größte Bremse?</h2>
                <div class="wizard__grid col-2">
                    ${this.data.challenges.map(item => `
                        <button class="wizard__option" data-type="challenge" data-value="${item.label}">
                            <div class="option-icon">${item.icon}</div>
                            <span class="option-label">${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }

        if (this.state.step === 3) {
            return `
                <h2 class="wizard__title">Was ist Ihr primäres Ziel?</h2>
                <div class="wizard__grid col-2">
                    ${this.data.goals.map(item => `
                        <button class="wizard__option" data-type="goal" data-value="${item.label}">
                            <span class="option-label large">${item.label}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }

        if (this.state.step === 4) {
            if (this.state.isAnalyzing) {
                return `
                    <div class="wizard__loading">
                        <div class="loading-spinner"></div>
                        <p class="loading-text">Analysiere Potenzial für ${this.state.selections.industry}...</p>
                    </div>
                `;
            }

            return `
                <div class="wizard__result">
                    <h2 class="result-headline">Ihre Roadmap für ${this.state.selections.industry} ist bereit.</h2>
                    <p class="result-subline">Wir haben 3 konkrete Ansätze identifiziert, um ${this.state.selections.challenge} zu lösen.</p>
                    
                    <div class="result-summary glass-card dimmed">
                        <div class="summary-item">
                            <span class="label">Branche</span>
                            <span class="value">${this.state.selections.industry}</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Herausforderung</span>
                            <span class="value">${this.state.selections.challenge}</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Ziel</span>
                            <span class="value">${this.state.selections.goal}</span>
                        </div>
                    </div>

                    <a href="#contact" class="btn is-primary glow-effect pulse">
                        Strategie-Gespräch anfordern
                    </a>
                </div>
            `;
        }
    }

    attachEvents() {
        const options = this.element.querySelectorAll('.wizard__option');
        options.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                const value = btn.dataset.value;
                this.handleSelection(type, value);
            });
        });
    }
}
