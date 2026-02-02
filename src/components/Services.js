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
        <h2 class="section-title">Leistungen</h2>
        
        <!-- Main Efficiency Analysis Feature -->
        <div class="services__feature glass-card">
          <div class="feature-header">
            <h3>EffizienzAnalyse 360°</h3>
            <p>Unsere Kernleistung: Wir analysieren kaufmännische und administrative Prozesse End-to-End.</p>
          </div>

          <div class="chart-wrapper">
            <!-- Left Labels -->
            <div class="chart-labels left">
               <div class="chart-label" data-id="email">
                <strong>E-Mail & Anfragen</strong>
                <span>Bearbeitung optimieren</span>
              </div>
              <div class="chart-label" data-id="marketing">
                <strong>Marketing & Vertrieb</strong>
                <span>Abläufe verbessern</span>
              </div>
            </div>

            <!-- 3D Chart Container -->
            <div id="chart-container" class="chart-container"></div>

            <!-- Right Labels -->
            <div class="chart-labels right">
              <div class="chart-label" data-id="offers">
                <strong>Angebote & Aufträge</strong>
                <span>Prozesse beschleunigen</span>
              </div>
               <div class="chart-label" data-id="comms">
                <strong>Kommunikation</strong>
                <span>Intern strukturieren</span>
              </div>
              <div class="chart-label" data-id="docs">
                <strong>Dokumente & Daten</strong>
                <span>Flüsse optimieren</span>
              </div>
            </div>
          </div>

          <!-- Bottom Cards -->
          <div class="feature-cards">
            <div class="feature-card blue-card">
              <h4>Optimierungsvorschläge</h4>
              <p>Konkrete Maßnahmen</p>
            </div>
            <div class="feature-card blue-card">
              <h4>Automatisierung & KI</h4>
              <p>Moderne Ansätze</p>
            </div>
            <div class="feature-card blue-card">
              <h4>Priorisierung</h4>
              <p>Nach Wirkung sortiert</p>
            </div>
            <div class="feature-card blue-card">
              <h4>ROI-Berechnung</h4>
              <p>Messbare Wirtschaftlichkeit</p>
            </div>
          </div>
        </div>

        <!-- Other Services Grid -->
        <div class="services__grid mt-lg">
           <div class="service-card glass-card">
              <h3>Digitale Strategie</h3>
              <p>Wir entwickeln Ihren Fahrplan für die digitale Zukunft.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Sales & Growth</h3>
              <p>Stabile und zukunftsfähige Vertriebsstrukturen aufbauen.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Business Process</h3>
              <p>Struktur und Klarheit in Organisation und Abläufen.</p>
            </div>
             <div class="service-card glass-card">
              <h3>Performance Marketing</h3>
              <p>Messbare Verbesserung der digitalen Performance.</p>
            </div>
        </div

      </div>
    `;
  }
}
