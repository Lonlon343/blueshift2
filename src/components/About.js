export class About {
  constructor() {
    this.element = document.createElement('section');
    this.element.className = 'about section';
    this.element.id = 'about';
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="container">
        <h2 class="section-title">Über uns</h2>
        
        <div class="about__intro glass-card">
          <h3>Wer wir sind</h3>
          <p>
            BlueShift Consulting ist eine Beratung mit klarem Fokus auf Analyse, Struktur und Wirtschaftlichkeit.
            Wir unterstützen Unternehmen dabei, Marketing, digitale Prozesse und Automatisierung nicht isoliert, sondern im Gesamtkontext zu betrachten.
          </p>
          <p>
            Im Mittelpunkt unserer Arbeit stehen fundierte Analysen, klare Handlungsempfehlungen und sinnvolle Priorisierung.
            Performance Marketing, Websites und KI-Workflows setzen wir gezielt aus eigener Hand um, um flexibel zu bleiben, individuell auf Unternehmen eingehen zu können und Empfehlungen direkt wirksam zu machen.
          </p>
          <p class="highlight-text">
            Wir verstehen uns nicht als klassische Agentur, sondern als beratender Partner, der Strategie, Umsetzung und Optimierung sinnvoll verbindet.
          </p>
        </div>

        <div class="about__grid mt-lg text-center">
          <div class="about__column">
            <div class="glass-subcard">
              <h3 class="sub-header">Unser Beratungsansatz</h3>
              <p>Digitale Maßnahmen entfalten nur dann Wirkung, wenn sie auf einer sauberen Analyse basieren.</p>
              <p>Deshalb beginnt jede Zusammenarbeit bei BlueShift mit dem Verstehen des Unternehmens – nicht mit Tools oder Kampagnen.</p>
            </div>
            <div class="glass-subcard mt-lg">
              <h3 class="sub-header">Unser Ansatz</h3>
              <ul class="check-list">
                <li>Analysieren statt vermuten</li>
                <li>Priorisieren statt alles gleichzeitig machen</li>
                <li>Umsetzen, wo es sinnvoll ist</li>
                <li>Regelmäßig hinterfragen und optimieren</li>
              </ul>
              <p class="mt-sm">So entstehen Lösungen, die wirtschaftlich tragfähig, realistisch umsetzbar und nachhaltig wirksam sind.</p>
            </div>
          </div>

          <div class="about__column">
            <h3 class="sub-header">Für wen wir arbeiten</h3>
            <p>Wir arbeiten mit KMU (5–250 Mitarbeitende) aus verschiedenen Branchen:</p>
            <div class="tags-container">
              <span class="tag">Dienstleistungen</span>
              <span class="tag">Handel</span>
              <span class="tag">Handwerk</span>
              <span class="tag">Kanzleien</span>
              <span class="tag">Praxen</span>
              <span class="tag">Agenturen</span>
            </div>

            <h4 class="subcard-title mt-lg">Typische Ausgangslagen</h4>
            <ul class="check-list">
              <li>Hoher administrativer Aufwand</li>
              <li>Langsame Angebots- und Auftragsprozesse</li>
              <li>Zu viele manuelle Tätigkeiten</li>
              <li>Unklare Marketing- und Vertriebsperformance</li>
              <li>Unsicherheit bei Digital- und KI-Themen</li>
              <li>Fehlende Priorisierung bei Investitionen</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
