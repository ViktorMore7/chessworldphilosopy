class InsightPanel extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['interpretation', 'pieces'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'interpretation') {
            this.interpretation = newVal;
        }
        if (name === 'pieces') {
            try {
                this.keyPieces = JSON.parse(newVal);
            } catch(e) {
                this.keyPieces = [];
            }
        }
        this.render();
    }

    render() {
        const pieces = this.keyPieces || [];
        const interpretation = this.interpretation || '';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: 'Inter', sans-serif;
                }
                .insight-container {
                    background: #f0e6d3;
                    border: 1px solid #e0d6c3;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #b59e6a;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .interpretation {
                    font-family: 'Cormorant', serif;
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: #1a1a1a;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid #e0d6c3;
                    font-style: italic;
                }
                .pieces-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1rem;
                }
                .piece-card {
                    background: #f8f5f0;
                    border: 1px solid #e0d6c3;
                    border-radius: 8px;
                    padding: 1rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .piece-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    border-color: #b59e6a;
                }
                .piece-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    display: block;
                }
                .piece-name {
                    font-family: 'Playfair Display', serif;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #1a1a1a;
                    margin-bottom: 0.25rem;
                }
                .piece-meaning {
                    font-size: 0.75rem;
                    color: #666;
                    line-height: 1.4;
                }
                .position-badge {
                    display: inline-block;
                    background: #b59e6a;
                    color: #f8f5f0;
                    font-size: 0.65rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 12px;
                    margin-top: 0.5rem;
                    font-family: 'Inter', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            </style>
            
            <div class="insight-container">
                <div class="section-title">Your Life Pieces
                    </div>
>
                <div class="interpretation">${interpretation}</div>
                
                <div class="section-title">Active Forces</div>
                <div class="pieces-grid">
                    ${pieces.map(piece => `
                        <div class="piece-card">
                            <span class="piece-icon">${this.getPieceIcon(piece.type)}</span>
                            <div class="piece-name">${piece.name}</div>
                            <div class="piece-meaning">${piece.meaning}</div>
                            <span class="position-badge">${piece.position}</span>
                        </div