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
            BlueShift Consulting ist eine strategische Beratungsagentur für kleine und mittlere Unternehmen, die ihre Digitalisierung wirtschaftlich sinnvoll, strukturiert und messbar vorantreiben wollen.
          </p>
          <p>
            Wir unterstützen Unternehmer und Geschäftsführer dabei, Kosten zu senken, Prozesse zu vereinfachen, Vertrieb und Marketing zu strukturieren und fundierte digitale Entscheidungen zu treffen – ohne unnötige Tools, ohne Technik-Aktionismus und ohne Abhängigkeit von Softwareanbietern.
          </p>
          <p class="highlight-text">
            BlueShift steht für Klarheit statt Komplexität und Entscheidungsgrundlagen statt Trends.
          </p>
        </div>

        <div class="about__grid mt-lg">
          <div class="about__column">
            <h3>Unsere Haltung</h3>
            <div class="glass-subcard">
              <h4>Das Problem</h4>
              <p>Viele Unternehmen investieren Zeit und Geld in Digitalisierung, ohne zu wissen:</p>
              <ul class="bullet-list">
                <li>was wirklich sinnvoll ist</li>
                <li>was sich wirtschaftlich rechnet</li>
                <li>was Mitarbeitende entlastet</li>
                <li>was langfristig funktioniert</li>
              </ul>
            </div>
            <div class="glass-subcard mt-md">
              <h4>Unsere Überzeugung</h4>
              <p>Digitalisierung ist kein Selbstzweck – sie muss sich rechnen, entlasten und strategisch passen.</p>
              <p>Deshalb beraten wir unabhängig, praxisnah und messbar.</p>
            </div>
          </div>

          <div class="about__column">
            <h3>Für wen wir arbeiten</h3>
            <p>Wir arbeiten mit KMU (5–250 Mitarbeitende) aus verschiedenen Branchen:</p>
            <div class="tags-container">
              <span class="tag">Dienstleistungen</span>
              <span class="tag">Handel</span>
              <span class="tag">Handwerk</span>
              <span class="tag">Kanzleien</span>
              <span class="tag">Praxen</span>
              <span class="tag">Agenturen</span>
            </div>

            <h4 class="mt-md">Typische Ausgangslagen</h4>
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
