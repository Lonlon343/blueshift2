export class WhyUs {
  constructor() {
    this.element = document.createElement('section');
    this.element.className = 'why-us section';
    this.element.id = 'why-us';
    this.render();
  }

  render() {
    const values = [
      { title: 'Analysieren', desc: 'Statt vermuten: Fundierte Basis für Entscheidungen.' },
      { title: 'Priorisieren', desc: 'Statt alles gleichzeitig: Fokus auf das Wesentliche.' },
      { title: 'Umsetzen', desc: 'Wo es sinnvoll ist: Direkte Wirkung erzielen.' },
      { title: 'Optimieren', desc: 'Regelmäßig hinterfragen: Nachhaltiger Erfolg.' },
      { title: 'Wirtschaftlich', desc: 'Lösungen, die sich rechnen.' },
      { title: 'Realistisch', desc: 'Umsetzbar für Ihr Unternehmen.' }
    ];

    this.element.innerHTML = `
      <div class="container">
        <h2 class="section-title">Warum BlueShift Consulting</h2>
        <h3 class="section-subtitle">Ihr Erfolg ist unser Benchmark.</h3>
        
        <div class="values__grid mt-lg mb-lg">
          ${values.map(val => `
            <div class="value-card glass-card">
              <h3>${val.title}</h3>
              <p>${val.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="claim-section glass-card highlight-border text-center mt-lg">
          <h3>Unser Anspruch: Bessere Entscheidungen</h3>
          <p>Wir helfen Unternehmen, bessere Entscheidungen zu treffen – digital, effizient und wirtschaftlich sinnvoll.</p>
          <div class="claim-tags">
            <div class="claim-tag">
              <strong>Digital</strong>
              <span>Moderne Technologien</span>
            </div>
            <div class="claim-tag">
              <strong>Effizient</strong>
              <span>Zeit & Ressourcen</span>
            </div>
            <div class="claim-tag">
              <strong>Wirtschaftlich</strong>
              <span>Investitionen die sich rechnen</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
