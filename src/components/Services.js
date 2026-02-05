import { EfficiencyChart } from './EfficiencyChart.js';

export class Services {
  constructor() {
    this.element = document.createElement('section');
    this.element.className = 'services section';
    this.element.id = 'services';
    this.render();

    setTimeout(() => {
      this.chart = new EfficiencyChart('chart-container', (hoveredId) => {
        this.handleChartHover(hoveredId);
      });
    }, 100);
  }

  handleChartHover(hoveredId) {
    // Remove active class from all labels
    const labels = this.element.querySelectorAll('.chart-label');
    labels.forEach(l => l.classList.remove('is-active'));

    if (hoveredId) {
      const activeLabel = this.element.querySelector(`.chart-label[data-id="${hoveredId}"]`);
      if (activeLabel) activeLabel.classList.add('is-active');
    }
  }

  render() {
    this.element.innerHTML = `
      <div class="container">
        <h2 class="section-title">Unsere Beratungsleistungen</h2>
        
        <!-- Main Efficiency Analysis Feature -->
        <div class="services__feature glass-card">
          <div class="feature-header">
            <h3>Digitalisierungs- & Effizienzanalyse</h3>
            <p>Viele Unternehmen arbeiten digital, aber nicht effizient. Unsere Analyse setzt genau hier an.</p>
          </div>

          <div class="chart-wrapper">
            <!-- Left Labels -->
            <div class="chart-labels left">
               <div class="chart-label" data-id="email">
                <strong>Arbeitsabläufe</strong>
                <span>Marketing & Vertrieb</span>
              </div>
              <div class="chart-label" data-id="marketing">
                <strong>Manuelle Tätigkeiten</strong>
                <span>Identifizieren & Reduzieren</span>
              </div>
            </div>

            <!-- 3D Chart Container -->
            <div id="chart-container" class="chart-container"></div>

            <!-- Right Labels -->
            <div class="chart-labels right">
              <div class="chart-label" data-id="offers">
                <strong>Automatisierung</strong>
                <span>Potenziale bewerten</span>
              </div>
               <div class="chart-label" data-id="comms">
                <strong>Wirtschaftlichkeit</strong>
                <span>Zeit & Kosten</span>
              </div>
              <div class="chart-label" data-id="docs">
                <strong>Digitalisierung</strong>
                <span>Sinnvoll priorisieren</span>
              </div>
            </div>
          </div>

          <!-- Bottom Cards -->
          <div class="feature-cards">
            <div class="feature-card blue-card">
              <h4>Konkrete Empfehlungen</h4>
              <p>Prozesse vereinfachen</p>
            </div>
            <div class="feature-card blue-card">
              <h4>Automatisierung</h4>
              <p>Wo es sinnvoll ist</p>
            </div>
            <div class="feature-card blue-card">
              <h4>Struktur</h4>
              <p>Neu ordnen</p>
            </div>
            <div class="feature-card blue-card">
              <h4>Ohne Komplexität</h4>
              <p>Einfach und klar</p>
            </div>
          </div>
        </div>

        <!-- Other Services Grid -->
        <div class="services__grid mt-lg">
           <div class="service-card glass-card">
              <h3>Vertriebs- & Marketinganalyse</h3>
              <p>Transparenz schaffen, Maßnahmen bewerten, Potenziale identifizieren.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Strategische Digitalberatung</h3>
              <p>Entwicklung realistischer Strategien, Priorisierung und Entscheidungsgrundlagen.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Performance Marketing</h3>
              <p>Google Ads, Meta Ads (Facebook & Instagram), Recruiting-Kampagnen.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Websites</h3>
              <p>Individuelle Websites und Landingpages mit klarer Funktion und Zielen.</p>
            </div>
            <div class="service-card glass-card">
              <h3>KI-Workflows</h3>
              <p>Prozesse vereinfachen und Mitarbeiter entlasten durch gezielte Automatisierung.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Umsetzung aus einer Hand</h3>
              <p>Wir setzen Maßnahmen direkt um, um flexibel und individuell zu bleiben.</p>
            </div>
        </div>

        <!-- Service Packages -->
        <h2 class="section-title mt-xxl">Unsere Leistungspakete</h2>
        <p class="section-subtitle">Modular und individuell anpassbar.</p>
        
        <div class="values__grid mt-lg">
          <div class="value-card glass-card highlight-border">
            <h3 class="subcard-title" style="font-size: 1.5rem;">Foundation</h3>
            <p style="margin-bottom: 1rem;">Der strukturierte Einstieg.</p>
            <ul class="check-list small">
              <li>Vertriebs- & Marketinganalyse</li>
              <li>Google Ads oder Meta Ads</li>
              <li>Basis-SEO</li>
              <li>Grundlegendes Tracking</li>
            </ul>
          </div>
          
          <div class="value-card glass-card highlight-border" style="border-color: rgba(59, 130, 246, 0.5);">
            <h3 class="subcard-title" style="font-size: 1.5rem; color: #2563eb;">Growth</h3>
            <p style="margin-bottom: 1rem;">Optimierung & Wachstum.</p>
            <ul class="check-list small">
              <li>Vertiefte Analyse & Beratung</li>
              <li>Google Ads und Meta Ads</li>
              <li>Produkt- oder Recruitingkampagnen</li>
              <li>Website-Pflege & Weiterentwicklung</li>
            </ul>
          </div>

          <div class="value-card glass-card highlight-border">
            <h3 class="subcard-title" style="font-size: 1.5rem;">Scale & Optimize</h3>
            <p style="margin-bottom: 1rem;">Effizienz & Steuerung.</p>
            <ul class="check-list small">
              <li>Umfassende Analyse & Priorisierung</li>
              <li>Kanalübergreifendes Marketing</li>
              <li>KI-Workflows & Optimierung</li>
              <li>Prozess- & Effizienzberatung</li>
            </ul>
          </div>
        </div>

      </div>
    `;
  }
}
