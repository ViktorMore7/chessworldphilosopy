const PHILOSOPHY_TOPICS = [
    {
        id: 'time',
        icon: 'clock',
        title: 'Time & Tempo',
        description: 'The rhythm of existence, knowing when to act and when to wait.',
        quotes: [
            { author: 'Emanuel Lasker', text: 'When you see a good move, look for a better one.', context: 'Patience in decision-making prevents premature commitment.' },
            { author: 'Mikhail Botvinnik', text: 'Chess is the art of analysis, and analysis takes time.', context: 'Deep understanding cannot be rushed. Invest time in comprehension.' },
            { author: 'Boris Spassky', text: 'The best indicator of a chess player\'s form is his ability to sense the climax of the game.', context: 'Timing is everything. The right move at the wrong moment is wrong.' },
            { author: 'Wilhelm Steinitz', text: 'A sacrifice is best refuted by accepting it.', context: 'When opportunity presents itself, hesitation is fatal. Act decisively.' }
        ]
    },
    {
        id: 'sacrifice',
        icon: 'heart',
        title: 'Sacrifice & Risk',
        description: 'The courage to give up something valuable for greater gain.',
        quotes: [
            { author: 'Mikhail Tal', text: 'You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.', context: 'True sacrifice creates confusion in others while clarifying your own path.' },
            { author: 'Alexander Alekhine', text: 'The attack is the best form of defence.', context: 'Sometimes the greatest risk is playing too safely.' },
            { author: 'Mikhail Tal', text: 'There are two types of sacrifices: correct ones, and mine.', context: 'Calculated risk and intuitive leap both have their place.' },
            { author: 'José Raúl Capablanca', text: 'A good player is always lucky.', context: 'Fortune favors the bold. Risk creates opportunity.' }
        ]
    },
    {
        id: 'strategy',
        icon: 'map',
        title: 'Strategy & Planning',
        description: 'The long view, building toward distant goals through present actions.',
        quotes: [
            { author: 'Aron Nimzowitsch', text: 'First restrain, then blockade, then destroy.', context: 'Victory comes in phases. Master each stage before advancing.' },
            { author: 'Frank Marshall', text: 'A bad plan is better than no plan at all.', context: 'Directionless action wastes energy. Any coherent strategy surpasses chaos.' },
            { author: 'Mikhail Botvinnik', text: 'The strength of the player lies in his ability to evaluate a position.', context: 'Accurate assessment of your situation precedes all effective action.' },
            { author: 'Garry Kasparov', text: 'Question the status quo at all times, especially when things are going well.', context: 'Success breeds complacency. Continuously reevaluate your position.' }
        ]
    },
    {
        id: 'struggle',
        icon: 'zap',
        title: 'Struggle & Resilience',
        description: 'Endurance through difficulty, finding strength in adversity.',
        quotes: [
            { author: 'José Raúl Capablanca', text: 'You may learn much more from a game you lose than from a game you win.', context: 'Defeat is your greatest teacher. Embrace its lessons.' },
            { author: 'Emanuel Lasker', text: 'The hardest game to win is a won game.', context: 'Victory brings its own dangers. Stay vigilant when success seems assured.' },
            { author: 'Alexander Alekhine', text: 'To win against me, you must beat me three times: in the opening, the middlegame, and the endgame.', context: 'Resilience means rising again and again. Each fall is temporary.' },
            { author: 'Max Euwe', text: 'Chess is a game of bad moves.', context: 'Everyone errs. Champions distinguish themselves by recovery.' }
        ]
    },
    {
        id: 'creativity',
        icon: 'pen-tool',
        title: 'Creativity & Imagination',
        description: 'Seeing beyond the obvious, finding unexpected solutions.',
        quotes: [
            { author: 'Mikhail Tal', text: 'You must take your opponent into a deep dark forest where 2+2=5...', context: 'Reality is negotiable. Those who redefine it gain advantage.' },
            { author: 'Vasily Smyslov', text: 'Chess is a harmony of logical thinking and artistic imagination.', context: 'Reason and creativity are not opponents but partners.' },
            { author: 'Anatoly Karpov', text: 'I don\'t study; I create.', context: 'Move beyond imitation. Generate something uniquely yours.' },
            { author: 'Bobby Fischer', text: 'All that matters on the chessboard is good moves.', context: 'Strip away convention. The unconventional solution may be best.' }
        ]
    },
    {
        id: 'knowledge',
        icon: 'layers',
        title: 'Knowledge & Mastery',
        description: 'The pursuit of understanding, the path to expertise.',
        quotes: [
            { author: 'Mikhail Botvinnik', text: 'Chess is the art of analysis.', context: 'Break complexity into components. Understanding precedes mastery.' },
            { author: 'Garry Kasparov', text: 'The ability to work hard is a talent.', context: 'Sustained effort is itself a gift. Develop it deliberately.' },
            { author: 'Bobby Fischer', text: 'Chess demands total concentration.', context: 'Divided attention yields divided results. Give your full self.' },
            { author: 'Wilhelm Steinitz', text: 'Chess is not for the faint-hearted; it absorbs a person entirely.', context: 'True mastery requires complete commitment. Half-measures fail.' }
        ]
    },
    {
        id: 'power',
        icon: 'shield',
        title: 'Power & Control',
        description: 'Influence over circumstances, commanding your domain.',
        quotes: [
            { author: 'Tigran Petrosian', text: 'The highest art of the chess player lies in not allowing the opponent to show what he can do.', context: 'True power prevents problems before they arise.' },
            { author: 'Max Euwe', text: 'The greatest art of a chess player is to make his opponent think.', context: 'Shape perception and you shape reality.' },
            { author: 'Garry Kasparov', text: 'Without rivals there is no competition.', context: 'Power is defined through challenge. Worthy opponents make you stronger.' },
            { author: 'Bobby Fischer', text: 'I like the moment when I break a man\'s ego.', context: 'Psychological dominance can be as decisive as technical superiority.' }
        ]
    },
    {
        id: 'endings',
        icon: 'flag',
        title: 'Endings & Completion',
        description: 'The final phase, where preparation meets its test.',
        quotes: [
            { author: 'Vasily Smyslov', text: 'The endgame is the most important part of the game.', context: 'How you finish matters more than how you begin.' },
            { author: 'José Raúl Capablanca', text: 'I see only one move ahead, but it is always the correct one.', context: 'You need not see the entire path. Focus on the right next step.' },
            { author: 'Viswanathan Anand', text: 'The older I grow, the more I value pawns.', context: 'Experience reveals the value of what seemed small.' },
            { author: 'Alexander Alekhine', text: 'I have had to work hard; anyone who succeeds must have that kind of capacity.', context: 'There are no shortcuts to the summit. The path requires endurance.' }
        ]
    },
    {
        id: 'truth',
        icon: 'eye',
        title: 'Truth & Authenticity',
        description: 'Seeing clearly, being genuinely yourself.',
        quotes: [
            { author: 'Emanuel Lasker', text: 'On the chessboard lies and hypocrisy do not survive long.', context: 'Reality asserts itself. Self-deception is temporary.' },
            { author: 'Vladimir Kramnik', text: 'The development of the individual is a more important goal than the development of the opening.', context: 'Your growth as a person exceeds any specific achievement.' },
            { author: 'Tigran Petrosian', text: 'I have a style that is very difficult to combat.', context: 'Authentic uniqueness is your best defense.' },
            { author: 'Magnus Carlsen', text: 'Some people think that if their opponent plays a beautiful game, it\'s OK to lose. I don\'t.', context: 'Never accept defeat when victory was possible. Your will is sacred.' }
        ]
    }
];

function renderTopics() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;

    grid.innerHTML = PHILOSOPHY_TOPICS.map(topic => `
        <div class="topic-card bg-[#f0e6d3] p-6 rounded-xl border border-[#e0d6c3] cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#b59e6a] hover:transform hover:-translate-y-1" onclick="selectTopic('${topic.id}')">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#b59e6a] bg-opacity-20 rounded-full flex items-center justify-center">
                    <i data-feather="${topic.icon}" class="w-6 h-6 text-[#b59e6a]"></i>
                </div>
                <div>
                    <h3 class="font-serif text-lg font-semibold text-[#1a1a1a]">${topic.title}</h3>
                    <p class="text-xs text-[#888]">${topic.description.substring(0, 50)}...</p>
                </div>
            </div>
        </div>
    `).join('');

    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function selectTopic(topicId) {
    const topic = PHILOSOPHY_TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    // Update topic header
    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-description').textContent = topic.description;
    
    // Update icon
    const iconEl = document.getElementById('topic-icon');
    iconEl.setAttribute('data-feather', topic.icon);

    // Render quotes
    const quotesContainer = document.getElementById('quotes-container');
    quotesContainer.innerHTML = topic.quotes.map((quote, index) => `
        <div class="bg-[#f8f5f0] p-6 rounded-xl border border-[#e0d6c3] ${index === 0 ? 'border-l-4 border-l-[#b59e6a]' : ''}">
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                    <span class="font-serif text-4xl text-[#b59e6a] opacity-30">"</span>
                </div>
                <div class="flex-1">
                    <p class="font-serif text-lg italic text-[#1a1a1a] mb-3 leading-relaxed">${quote.text}</p>
                    <p class="text-sm text-[#b59e6a] font-semibold mb-2">— ${quote.author}</p>
                    <p class="text-sm text-[#666] leading-relaxed">${quote.context}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Show wisdom section
    const wisdomSection = document.getElementById('philosophy-wisdom');
    wisdomSection.classList.remove('hidden');
    setTimeout(() => {
        wisdomSection.classList.remove('opacity-0');
        wisdomSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    // Re-render feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTopics();
});