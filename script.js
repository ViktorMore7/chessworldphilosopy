// Chess piece unicode mapping
const PIECES = {
    'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
    'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
};

const PIECE_MEANINGS = {
    'K': { 
        name: 'King', 
        meaning: 'The Core Self', 
        quote: 'The King is a fighting piece. Use it! – Wilhelm Steinitz',
        description: 'Your essence and identity. Not the strongest, but the most vital.'
    },
    'Q': { 
        name: 'Queen', 
        meaning: 'Freedom & Potential', 
        quote: 'The attack is the best form of defence. – Alexander Alekhine',
        description: 'Your vast capabilities and untapped reserves of power.'
    },
    'R': { 
        name: 'Rook', 
        meaning: 'Support Systems', 
        quote: 'The most powerful weapon in chess is to have the next move. – David Bronstein',
        description: 'Your foundations, home, and the structures that support you.'
    },
    'B': { 
        name: 'Bishop', 
        meaning: 'Values & Beliefs', 
        quote: 'A player with a bishop pair holds a small, but lasting advantage. – José Capablanca',
        description: 'Your guiding principles and long-term vision.'
    },
    'N': { 
        name: 'Knight', 
        meaning: 'Adaptability & Risks', 
        quote: 'You must take your opponent into a deep, dark forest where 2+2=5... – Mikhail Tal',
        description: 'Your creativity and ability to jump over obstacles.'
    },
    'P': { 
        name: 'Pawn', 
        meaning: 'Daily Decisions', 
        quote: 'Pawns are the soul of chess. – François-André Danican Philidor',
        description: 'Your habits, small choices, and the power of steady progress.'
    }
};

const CHAMPION_QUOTES = [
    { text: "First restrain, then blockade, then destroy.", author: "Aron Nimzowitsch", context: "Strategic" },
    { text: "When you see a good move, look for a better one.", author: "Emanuel Lasker", context: "Opportunity" },
    { text: "The blunders are all there on the board, waiting to be made.", author: "Savielly Tartakower", context: "Awareness" },
    { text: "Chess is the gymnasium of the mind.", author: "Blaise Pascal", context: "Growth" },
    { text: "A bad plan is better than no plan at all.", author: "Frank Marshall", context: "Action" }
];

// Position presets based on life themes
const POSITION_PRESETS = {
    young: [
        "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", // King's Pawn Opening
        "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1", // Queen's Pawn
    ],
    establishment: [
        "r1bq1rk1/ppp2ppp/2n2n2/2bpp3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 w - - 4 7", // Italian Game
        "rnbq1rk1/ppp1ppbp/6p1/3n4/3P4/2P2NP1/PP2PPBP/RNBQ1RK1 b - - 4 7", // Ruy Lopez
    ],
    crisis: [
        "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", // Open, tactical
        "r3k2r/pppq1ppp/2npbn2/1B2p3/1b2P3/2NPBN2/PPPQ1PPP/R3K2R w KQkq - 7 7", // Double-edged
    ],
    wisdom: [
        "4k3/4p3/4K3/8/8/8/8/8 w - - 0 1", // King and Pawn ending
        "8/8/4k3/8/4K3/8/8/8 w - - 0 1", // Lone kings (end of road)
    ],
    creative: [
        "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 4 3", // Symmetrical but creative
        "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3", // Active knight play
    ],
    defensive: [
        "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 0 5", // Solid Caro-Kann style
        "r1bq1rk1/ppp1bppp/2np1n2/1B1Np3/2B1P3/2PP1N2/PP3PPP/R2Q1RK1 b - - 6 7", // Fortress
    ]
};

class LifeChessReading {
    constructor() {
        this.chess = new Chess();
        this.currentFEN = null;
        this.themes = {
            development: 0.5,
            tension: 0.5,
            material: 0.5,
            kingSafety: 0.5,
            space: 0.5,
            creativity: 0.5
        };
    }

    parseInput(input) {
        const age = parseInt(input.match(/\d+/)?.[0]);
        const text = input.toLowerCase();
        
        // Reset themes
        this.themes = {
            development: 0.5,
            tension: 0.5,
            material: 0.5,
            kingSafety: 0.5,
            space: 0.5,
            creativity: 0.5
        };

        // Age-based adjustments
        if (age) {
            if (age < 25) {
                this.themes.development = 0.2;
                this.themes.tension = 0.3;
                this.themes.material = 0.9;
                this.themes.space = 0.6;
            } else if (age < 35) {
                this.themes.development = 0.7;
                this.themes.tension = 0.6;
                this.themes.space = 0.7;
                this.themes.creativity = 0.8;
            } else if (age < 50) {
                this.themes.development = 0.9;
                this.themes.tension = 0.7;
                this.themes.kingSafety = 0.8;
                this.themes.material = 0.7;
            } else {
                this.themes.material = 0.3;
                this.themes.development = 1;
                this.themes.kingSafety = 0.3; // King comes out
            }
        }

        // Keyword analysis
        const keywords = {
            stress: ['stress', 'chaos', 'hard', 'difficult', 'struggle', 'overwhelmed'],
            calm: ['calm', 'peace', 'balance', 'serene', 'quiet', 'meditation'],
            new: ['new', 'start', 'beginning', 'career', 'job', 'launch'],
            love: ['love', 'relationship', 'partner', 'marriage', 'heart'],
            creative: ['create', 'art', 'write', 'design', 'imagination', 'innovation'],
            stable: ['stable', 'home', 'family', 'rooted', 'secure', 'safe']
        };

        if (keywords.stress.some(k => text.includes(k))) {
            this.themes.tension = 0.9;
            this.themes.kingSafety = 0.2;
        }
        if (keywords.calm.some(k => text.includes(k))) {
            this.themes.tension = 0.1;
            this.themes.space = 0.9;
        }
        if (keywords.new.some(k => text.includes(k))) {
            this.themes.development = 0.3;
            this.themes.creativity = 0.8;
        }
        if (keywords.love.some(k => text.includes(k))) {
            this.themes.kingSafety = 0.9;
            this.themes.material = 0.6;
        }
        if (keywords.creative.some(k => text.includes(k))) {
            this.themes.creativity = 0.9;
            this.themes.space = 0.8;
        }
        if (keywords.stable.some(k => text.includes(k))) {
            this.themes.kingSafety = 0.9;
            this.themes.development = 0.8;
            this.tensions = 0.2;
        }

        return { age, text };
    }

    generatePosition(input) {
        this.parseInput(input);
        
        let selectedFEN;
        
        // Select position based on dominant themes
        if (this.themes.tension > 0.7) {
            selectedFEN = POSITION_PRESETS.crisis[Math.floor(Math.random() * POSITION_PRESETS.crisis.length)];
        } else if (this.themes.creativity > 0.7) {
            selectedFEN = POSITION_PRESETS.creative[Math.floor(Math.random() * POSITION_PRESETS.creative.length)];
        } else if (this.themes.development < 0.4) {
            selectedFEN = POSITION_PRESETS.young[Math.floor(Math.random() * POSITION_PRESETS.young.length)];
        } else if (this.themes.material < 0.4) {
            selectedFEN = POSITION_PRESETS.wisdom[Math.floor(Math.random() * POSITION_PRESETS.wisdom.length)];
        } else if (this.themes.kingSafety > 0.8) {
            selectedFEN = POSITION_PRESETS.defensive[Math.floor(Math.random() * POSITION_PRESETS.defensive.length)];
        } else {
            selectedFEN = POSITION_PRESETS.establishment[Math.floor(Math.random() * POSITION_PRESETS.establishment.length)];
        }

        this.chess.load(selectedFEN);
        this.currentFEN = selectedFEN;
        
        return {
            fen: selectedFEN,
            interpretation: this.generateInterpretation(),
            nextMove: this.suggestNextMove(),
            keyPieces: this.identifyKeyPieces()
        };
    }

    generateInterpretation() {
        const pieces = [];
        const board = this.chess.board();
        
        // Count material and assess position
        let whitePieces = 0;
        let blackPieces = 0;
        let centerControl = 0;
        let kingExposed = false;

        board.forEach((row, rank) => {
            row.forEach((piece, file) => {
                if (piece) {
                    if (piece.color === 'w') whitePieces++;
                    else blackPieces++;
                    
                    // Check center control
                    if ((rank === 3 || rank === 4) && (file === 3 || file === 4)) {
                        centerControl++;
                    }
                    
                    // Check king safety
                    if (piece.type === 'k' && piece.color === 'w') {
                        if (rank > 2) kingExposed = true;
                    }
                }
            });
        });

        let narrative = "";
        
        if (this.themes.tension > 0.7) {
            narrative += "Your position reveals a battlefield. Pieces are under fire, yet this is where true growth occurs. ";
        } else if (this.themes.tension < 0.3) {
            narrative += "A serene landscape of clear horizons and open files. You possess the luxury of time. ";
        }

        if (this.themes.development < 0.4) {
            narrative += "Your forces are just awakening—potential energy waiting to transform into kinetic. ";
        } else if (this.themes.development > 0.8) {
            narrative += "All your resources are in play, fully mobilized for the challenges ahead. ";
        }

        if (kingExposed) {
            narrative += "Your King stands in the open, vulnerable yet potent—a time of exposure and authenticity. ";
        } else {
            narrative += "Your core remains well-guarded, allowing you to venture boldly. ";
        }

        if (centerControl > 2) {
            narrative += "You command the center of your existence, giving you flexibility and influence. ";
        } else {
            narrative += "The center remains contested, suggesting a period of finding your footing. ";
        }

        return narrative;
    }

    identifyKeyPieces() {
        const board = this.chess.board();
        const keyPieces = [];
        
        // Find most advanced or central pieces
        board.forEach((row, rank) => {
            row.forEach((piece, file) => {
                if (piece && piece.color === 'w') {
                    const isAdvanced = rank < 4;
                    const isCentral = (file >= 2 && file <= 5);
                    
                    if (isAdvanced || (isCentral && piece.type !== 'p')) {
                        const pieceKey = piece.type.toUpperCase();
                        keyPieces.push({
                            type: pieceKey,
                            ...PIECE_MEANINGS[pieceKey],
                            position: `${String.fromCharCode(97 + file)}${8 - rank}`
                        });
                    }
                }
            });
        });

        return keyPieces.slice(0, 3); // Top 3 most significant
    }

    suggestNextMove() {
        const moves = this.chess.moves({ verbose: true });
        if (moves.length === 0) return null;

        // Filter for thematic moves
        let candidateMoves = moves;
        
        if (this.themes.tension > 0.7) {
            // Look for defensive moves or exchanges
            candidateMoves = moves.filter(m => m.flags.includes('c') || m.piece === 'k');
        } else if (this.themes.creativity > 0.7) {
            // Look for knight moves (creative) or queen moves
            candidateMoves = moves.filter(m => m.piece === 'n' || m.piece === 'q');
        } else if (this.themes.development < 0.5) {
            // Look for developing moves
            candidateMoves = moves.filter(m => (m.piece === 'n' || m.piece === 'b') && !m.flags.includes('c'));
        }

        if (candidateMoves.length === 0) candidateMoves = moves;
        
        const move = candidateMoves[Math.floor(Math.random() * candidateMoves.length)];
        const moveStr = `${move.piece.toUpperCase()}${move.from}-${move.to}`;
        
        let lifeAdvice = "";
        let quote = CHAMPION_QUOTES[Math.floor(Math.random() * CHAMPION_QUOTES.length)];
        
        switch(move.piece) {
            case 'p':
                lifeAdvice = "Advance steadily, one square at a time. Small steps create unstoppable momentum.";
                break;
            case 'n':
                lifeAdvice = "Leap over obstacles with unconventional thinking. Your path need not be straight.";
                break;
            case 'b':
                lifeAdvice = "Align your long-term vision with your daily actions. Diagonal thinking sees around corners.";
                break;
            case 'r':
                lifeAdvice = "Consolidate your foundations. Sometimes the most powerful move is to control the file you're on.";
                break;
            case 'q':
                lifeAdvice = "Deploy your full potential, but avoid overextension. Power requires precision.";
                break;
            case 'k':
                lifeAdvice = "Step forward with courage. Even the King must become a fighting piece in the endgame.";
                break;
        }

        return {
            san: move.san,
            from: move.from,
            to: move.to,
            piece: move.piece,
            lifeAdvice,
            quote
        };
    }
}

// UI Controller
const reading = new LifeChessReading();

document.addEventListener('DOMContentLoaded', () => {
    const inputSection = document.getElementById('input-section');
    const resultsSection = document.getElementById('results-section');
    const revealBtn = document.getElementById('reveal-btn');
    const newReadingBtn = document.getElementById('new-reading-btn');
    const shareBtn = document.getElementById('share-btn');
    const lifeInput = document.getElementById('life-input');

    revealBtn.addEventListener('click', generateReading);
    
    lifeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateReading();
    });

    newReadingBtn.addEventListener('click', () => {
        resultsSection.classList.add('hidden');
        resultsSection.style.opacity = '0';
        inputSection.classList.remove('hidden');
        setTimeout(() => {
            inputSection.classList.remove('opacity-0');
        }, 50);
        lifeInput.value = '';
        lifeInput.focus();
    });

    shareBtn.addEventListener('click', shareReading);

    function generateReading() {
        const input = lifeInput.value.trim();
        if (!input) {
            lifeInput.classList.add('ring-2', 'ring-[#c9a8a9]');
            setTimeout(() => lifeInput.classList.remove('ring-2', 'ring-[#c9a8a9]'), 1000);
            return;
        }

        // Add loading state
        revealBtn.innerHTML = '<span class="loading-pulse">Consulting the pieces...</span>';
        revealBtn.disabled = true;

        setTimeout(() => {
            const result = reading.generatePosition(input);
            displayResults(result);
            
            revealBtn.innerHTML = '<span>Reveal My Board</span><i data-feather="chevron-right" class="w-5 h-5"></i>';
            feather.replace();
            revealBtn.disabled = false;
        }, 1500);
    }

    function displayResults(result) {
        // Transition
        inputSection.classList.add('opacity-0');
        setTimeout(() => {
            inputSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
            setTimeout(() => {
                resultsSection.classList.remove('opacity-0');
            }, 50);
        }, 500);

        // Update Board
        const board = document.getElementById('main-board');
        board.setAttribute('fen', result.fen);
        if (result.nextMove) {
            board.setAttribute('highlight', `${result.nextMove.from},${result.nextMove.to}`);
        }

        // Update FEN display
        document.getElementById('position-fen').textContent = result.fen.split(' ')[0];

        // Update Insights
        const insightsPanel = document.getElementById('insights');
        insightsPanel.setAttribute('interpretation', result.interpretation);
        insightsPanel.setAttribute('pieces', JSON.stringify(result.keyPieces));

        // Update Next Move
        if (result.nextMove) {
            document.getElementById('next-move-chess').textContent = 
                `${result.nextMove.piece.toUpperCase()} to ${result.nextMove.to} (${result.nextMove.san})`;
            document.getElementById('next-move-life').textContent = result.nextMove.lifeAdvice;
            document.getElementById('next-move-quote').textContent = 
                `"${result.nextMove.quote.text}" — ${result.nextMove.quote.author}`;
        }

        // Update Champion Quotes
        const quotesPanel = document.getElementById('champion-quotes');
        quotesPanel.setAttribute('pieces', JSON.stringify(result.keyPieces));
    }

    async function shareReading() {
        const text = `My Life Board: A chess position reflecting my journey. "${reading.generateInterpretation().substring(0, 100)}..." Generate yours at The Sacred Geometry of Your Path.`;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'My Life Chess Board',
                    text: text,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share failed', err);
            }
        } else {
            navigator.clipboard.writeText(text);
            const originalText = shareBtn.innerHTML;
            shareBtn.innerHTML = '<i data-feather="check" class="w-4 h-4"></i> Copied!';
            feather.replace();
            setTimeout(() => {
                shareBtn.innerHTML = originalText;
                feather.replace();
            }, 2000);
        }
    }
});