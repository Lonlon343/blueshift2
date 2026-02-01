import { EfficiencyChart } from './EfficiencyChart.js'; // Optional dependency if needed

export class Calculator {
    constructor() {
        this.element = document.createElement('section');
        this.element.className = 'calculator section';
        this.element.id = 'calculator';

        this.state = {
            employees: 5,
            hoursPerWeek: 4,
            hourlyRate: 45
        };

        this.render();
        this.addEventListeners();
    }

    calculateLoss() {
        const { employees, hoursPerWeek, hourlyRate } = this.state;
        return employees * hoursPerWeek * hourlyRate * 52;
    }

    render() {
        const loss = this.calculateLoss();
        const formattedLoss = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(loss);

        this.element.innerHTML = `
            <div class="container">
                <h2 class="section-title">Was kosten Sie ineffiziente Prozesse wirklich?</h2>
                <p class="section-subtitle">Finden Sie heraus, wie viel Budget durch manuelle Admin-Aufgaben jährlich verbrannt wird.</p>
                
                <div class="calculator__card glass-card">
                    <div class="calculator__inputs">
                        <!-- Input A: Employees -->
                        <div class="input-group">
                            <label for="employees">
                                Anzahl Mitarbeitende in der Verwaltung
                                <span class="input-value" id="val-employees">${this.state.employees}</span>
                            </label>
                            <input type="range" id="employees" min="1" max="50" value="${this.state.employees}" class="slider">
                        </div>

                        <!-- Input B: Hours -->
                        <div class="input-group">
                            <label for="hours">
                                Verschwendete Zeit pro Woche (Stunden)
                                <span class="input-value" id="val-hours">${this.state.hoursPerWeek} h</span>
                            </label>
                            <input type="range" id="hours" min="1" max="20" value="${this.state.hoursPerWeek}" class="slider">
                        </div>

                        <!-- Input C: Rate -->
                        <div class="input-group">
                            <label for="rate">
                                Ø Interner Stundensatz
                                <span class="input-value" id="val-rate">${this.state.hourlyRate} €</span>
                            </label>
                            <input type="range" id="rate" min="15" max="100" value="${this.state.hourlyRate}" class="slider">
                        </div>
                    </div>

                    <div class="calculator__result">
                        <span class="result-label">Jährliches Verlustpotenzial</span>
                        <div class="result-value" id="result-value">${formattedLoss}</div>
                        
                        <a href="#services" class="btn is-primary glow-effect">
                            Dieses Kapital jetzt freisetzen – EffizienzAnalyse 360°
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const inputs = {
            employees: this.element.querySelector('#employees'),
            hours: this.element.querySelector('#hours'),
            rate: this.element.querySelector('#rate')
        };

        const displays = {
            employees: this.element.querySelector('#val-employees'),
            hours: this.element.querySelector('#val-hours'),
            rate: this.element.querySelector('#val-rate')
        };

        const resultDisplay = this.element.querySelector('#result-value');

        const updateCalculation = () => {
            // Update state
            this.state.employees = parseInt(inputs.employees.value);
            this.state.hoursPerWeek = parseInt(inputs.hours.value);
            this.state.hourlyRate = parseInt(inputs.rate.value);

            // Update displays
            displays.employees.textContent = this.state.employees;
            displays.hours.textContent = `${this.state.hoursPerWeek} h`;
            displays.rate.textContent = `${this.state.hourlyRate} €`;

            // Calculate and animate result
            const currentLoss = this.calculateLoss();
            this.animateValue(resultDisplay, currentLoss);

            // Update slider background sizes for "fill" effect if needed
            this.updateSliderFill(inputs.employees);
            this.updateSliderFill(inputs.hours);
            this.updateSliderFill(inputs.rate);
        };

        Object.values(inputs).forEach(input => {
            input.addEventListener('input', updateCalculation);
            this.updateSliderFill(input); // Init fill
        });
    }

    updateSliderFill(slider) {
        const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.backgroundSize = `${val}% 100%`;
    }

    animateValue(element, end) {
        // Simple text update for now, can add count-up generic lib if requested, 
        // but Intl format + simple replacement is safer without external deps.
        // Let's do a quick formatted string update.
        const formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(end);
        element.textContent = formatted;

        // Add a pop animation class
        element.classList.remove('pop');
        void element.offsetWidth; // trigger reflow
        element.classList.add('pop');
    }
}
