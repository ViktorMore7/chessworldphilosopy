class ChessBoard extends HTMLElement {
    constructor() {
        super();
        this.chess = new Chess();
        this.highlightedSquares = [];
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        
        if (this.hasAttribute('fen')) {
            this.loadPosition(this.getAttribute('fen'));
        }
    }

    static get observedAttributes() {
        return ['fen', 'highlight'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'fen' && newVal) {
            this.loadPosition(newVal);
        }
        if (name === 'highlight' && newVal) {
            this.highlightedSquares = newVal.split(',');
            this.render();
        }
    }

    loadPosition(fen) {
        this.chess.load(fen);
        this.render();
    }

    render() {
        const board = this.chess.board();
        const isFlipped = false; // Always show from white's perspective for life metaphor
        
        let html = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    font-family: 'Inter', sans-serif;
                }
                .board-container {
                    width: 100%;
                    aspect-ratio: 1;
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                    border: 3px solid #1a1a1a;
                    border-radius: 4px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                .square {
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: clamp(1.5rem, 6vw, 2.5rem);
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s ease;
                    user-select: none;
                }
                .square:hover {
                    transform: scale(1.1);
                    z-index: 10;
                    filter: brightness(1.15);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                }
                .light {
                    background-color: #f0d9b5;
                    color: #1a1a1a;
                }
                .dark {
                    background-color: #b58863;
                    color: #f8f5f0;
                }
                .highlight {
                    box-shadow: inset 0 0 0 4px #b59e6a !important;
                    animation: pulse 2s infinite;
                }
                .piece {
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 2;
                }
                .piece.enter {
                    animation: pieceEnter 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                .coord {
                    position: absolute;
                    font-size: 0.5rem;
                    font-weight: 600;
                    opacity: 0.6;
                    pointer-events: none;
                }
                .coord.file {
                    bottom: 2px;
                    right: 4px;
                }
                .coord.rank {
                    top: 2px;
                    left: 4px;
                }
                .tooltip {
                    position: fixed;
                    background: #1a1a1a;
                    color: #f8f5f0;
                    padding: 0.75rem;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    max-width: 200px;
                    pointer-events: none;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                    z-index: 1000;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                    border-left: 3px solid #b59e6a;
                }
                .tooltip.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .tooltip-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: 600;
                    color: #b59e6a;
                    margin-bottom: 0.25rem;
                }
                .tooltip-quote {
                    font-style: italic;
                    font-size: 0.75rem;
                    color: #ccc;
                    margin-top: 0.5rem;
                    border-top: 1px solid #333;
                    padding-top: 0.5rem;
                }
                @keyframes pulse {
                    0%, 100% { box-shadow: inset 0 0 0 4px #b59e6a; }
                    50% { box-shadow: inset 0 0 0 6px #b59e6a; }
                }
                @keyframes pieceEnter {
                    0% { transform: scale(0) rotate(180deg); opacity: 0; }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
            </style>
            <div class="board-container">
        `;

        const pieces = {
            'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
            'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
        };

        const meanings = {
            'K': { title: 'The King', meaning: 'Your Core Self', quote: 'The King is a fighting piece. Use it! – Wilhelm Steinitz' },
            'Q': { title: 'The Queen', meaning: 'Potential & Freedom', quote: 'The attack is the best form of defence. – Alexander Alekhine' },
            'R': { title: 'The Rook', meaning: 'Support Systems', quote: 'The most powerful weapon is to have the next move. – David Bronstein' },
            'B': { title: 'The Bishop', meaning: 'Values & Beliefs', quote: 'A bishop pair holds a lasting advantage. – José Capablanca' },
            'N': { title: 'The Knight', meaning: 'Adaptability', quote: 'Take them into a deep forest where 2+2=5. – Mikhail Tal' },
            'P': { title: 'The Pawn', meaning: 'Daily Habits', quote: 'Pawns are the soul of chess. – François-André Philidor' }
        };

        for (let rank = 0; rank < 8; rank++) {
            for (let file = 0; file < 8; file++) {
                const isDark = (rank + file) % 2 === 1;
                const square = board[rank][file];
                const squareName = `${String.fromCharCode(97 + file)}${8 - rank}`;
                const isHighlighted = this.highlightedSquares.includes(squareName);
                
                let pieceHtml = '';
                if (square) {
                    const pieceKey = square.type.toUpperCase();
                    const displayPiece = square.color === 'w' ? pieces[pieceKey] : pieces[pieceKey.toLowerCase()];
                    const meaning = meanings[pieceKey];
                    
                    pieceHtml = `<span class="piece enter" data-piece="${pieceKey}" data-meaning="${meaning.meaning}" data-title="${meaning.title}" data-quote="${meaning.quote}">${displayPiece}</span>`;
                }

                const coordHtml = (file === 7) ? `<span class="coord rank">${8 - rank}</span>` : '';
                const fileLabel = (rank === 7) ? `<span class="coord file">${String.fromCharCode(97 + file)}</span>` : '';

                html += `
                    <div class="square ${isDark ? 'dark' : 'light'} ${isHighlighted ? 'highlight' : ''}" 
                         data-square="${squareName}">
                        ${pieceHtml}
                        ${coordHtml}
                        ${fileLabel}
                    </div>
                `;
            }
        }

        html += '</div><div class="tooltip" id="tooltip"></div>';
        this.shadowRoot.innerHTML = html;

        // Add interaction
        const tooltip = this.shadowRoot.getElementById('tooltip');
        const squares = this.shadowRoot.querySelectorAll('.square');
        
        squares.forEach(square => {
            const piece = square.querySelector('.piece');
            if (piece) {
                square.addEventListener('mouseenter', (e) => {
                    const rect = square.getBoundingClientRect();
                    tooltip.innerHTML = `
                        <div class="tooltip-title">${piece.dataset.title}</div>
                        <div>${piece.dataset.meaning}</div>
                        <div class="tooltip-quote">${piece.dataset.quote}</div>
                    `;
                    tooltip.style.left = `${rect.left + rect.width / 2 - 100}px`;
                    tooltip.style.top = `${rect.top - 120}px`;
                    tooltip.classList.add('visible');
                });
                
                square.addEventListener('mouseleave', () => {
                    tooltip.classList.remove('visible');
                });
            }
        });
    }
}

customElements.define('chess-board', ChessBoard);