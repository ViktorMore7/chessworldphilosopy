const WORLD_CHAMPIONS = [
    {
        id: 'steinitz',
        name: 'Wilhelm Steinitz',
        title: 'First World Champion',
        years: '1886-1894',
        image: 'http://static.photos/monochrome/320x240/1',
        quotes: [
            { text: "The King is a fighting piece. Use it!", context: "Courage", application: "In moments of vulnerability, remember that your core self has power. Don't hide from challenges—engage with them directly." },
            { text: "A sacrifice is best refuted by accepting it.", context: "Decision", application: "When life offers you an opportunity that requires risk, embrace it fully rather than hesitating at the threshold." },
            { text: "Chess is not for the faint-hearted; it absorbs a person entirely.", context: "Commitment", application: "Whatever path you choose, dedicate yourself completely. Half-measures yield half-results." }
        ]
    },
    {
        id: 'lasker',
        name: 'Emanuel Lasker',
        title: 'Philosopher Champion',
        years: '1894-1921',
        image: 'http://static.photos/monochrome/320x240/2',
        quotes: [
            { text: "When you see a good move, look for a better one.", context: "Excellence", application: "Don't settle for the first solution. Push yourself to find the optimal path, even when the adequate one tempts you." },
            { text: "The hardest game to win is a won game.", context: "Perseverance", application: "Success brings its own dangers—complacency, arrogance, relaxation. Stay vigilant even when victory seems certain." },
            { text: "On the chessboard lies and hypocrisy do not survive long.", context: "Authenticity", application: "Be honest with yourself about your position in life. Self-deception is the first step toward defeat." }
        ]
    },
    {
        id: 'capablanca',
        name: 'José Raúl Capablanca',
        title: 'The Chess Machine',
        years: '1921-1927',
        image: 'http://static.photos/monochrome/320x240/3',
        quotes: [
            { text: "You may learn much more from a game you lose than from a game you win.", context: "Growth", application: "Embrace your failures as your greatest teachers. The sting of defeat carries lessons that victory cannot provide." },
            { text: "A good player is always lucky.", context: "Preparation", application: "Luck favors the prepared. Create your own fortune through disciplined practice and readiness." },
            { text: "I see only one move ahead, but it is always the correct one.", context: "Clarity", application: "You need not see the entire path. Focus on making the right next step, and the path will reveal itself." }
        ]
    },
    {
        id: 'alekhine',
        name: 'Alexander Alekhine',
        title: 'The Attacker',
        years: '1927-1935, 1937-1946',
        image: 'http://static.photos/monochrome/320x240/4',
        quotes: [
            { text: "The attack is the best form of defence.", context: "Proactivity", application: "When under pressure, don't just react—create your own initiatives. The best way to solve problems is to make progress." },
            { text: "I have had to work hard; anyone who succeeds must have that kind of capacity.", context: "Effort", application: "Genius is not born—it is forged through relentless effort. Your capacity for work determines your ceiling." },
            { text: "To win against me, you must beat me three times: in the opening, the middlegame, and the endgame.", context: "Resilience", application: "Life will test you repeatedly. Each challenge overcome only brings the next. Endure through all phases." }
        ]
    },
    {
        id: 'euwe',
        name: 'Max Euwe',
        title: 'The Mathematician',
        years: '1935-1937',
        image: 'http://static.photos/monochrome/320x240/5',
        quotes: [
            { text: "Strategy requires thought, tactics require observation.", context: "Awareness", application: "Balance your long-term planning with present-moment attention. Both are necessary for success." },
            { text: "Chess is a game of bad moves.", context: "Forgiveness", application: "Everyone makes mistakes. The winner is not the one who never errs, but the one who recovers best." },
            { text: "The greatest art of a chess player is to make his opponent think.", context: "Influence", application: "True power lies not in forcing others, but in shaping their perceptions and decisions." }
        ]
    },
    {
        id: 'botvinnik',
        name: 'Mikhail Botvinnik',
        title: 'The Patriarch',
        years: '1948-1957, 1958-1960, 1961-1963',
        image: 'http://static.photos/monochrome/320x240/6',
        quotes: [
            { text: "Chess is the art of analysis.", context: "Understanding", application: "Break down complex situations into their components. Understanding precedes mastery." },
            { text: "The strength of the player lies in his ability to evaluate a position.", context: "Judgment", application: "Your ability to accurately assess your situation is more valuable than any specific skill." },
            { text: "If you are going to make your mark among masters, you have to work twice as hard as them.", context: "Excellence", application: "To rise above the ordinary requires extraordinary effort. Accept this price or accept mediocrity." }
        ]
    },
    {
        id: 'smyslov',
        name: 'Vasily Smyslov',
        title: 'The Virtuoso',
        years: '1957-1958',
        image: 'http://static.photos/monochrome/320x240/7',
        quotes: [
            { text: "I consider myself a 'universal' player in the true sense of the word.", context: "Versatility", application: "Develop competence across many domains. The narrow specialist is vulnerable to changing circumstances." },
            { text: "The endgame is the most important part of the game.", context: "Finishing", application: "How you conclude matters more than how you begin. Pay attention to your endings." },
            { text: "Chess is a harmony of logical thinking and artistic imagination.", context: "Balance", application: "Cultivate both reason and creativity. Neither alone is sufficient for a full life." }
        ]
    },
    {
        id: 'tal',
        name: 'Mikhail Tal',
        title: 'The Magician from Riga',
        years: '1960-1961',
        image: 'http://static.photos/monochrome/320x240/8',
        quotes: [
            { text: "You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.", context: "Creativity", application: "Create situations where your unique strengths become decisive. Shape the battlefield to your advantage." },
            { text: "There are two types of sacrifices: correct ones, and mine.", context: "Intuition", application: "Sometimes logic must yield to deeper knowing. Trust your instincts when they speak clearly." },
            { text: "To play for a draw, at any rate with White, is to some degree a crime against chess.", context: "Ambition", application: "Never approach your endeavors with the goal of merely avoiding failure. Play to win." }
        ]
    },
    {
        id: 'petrosian',
        name: 'Tigran Petrosian',
        title: 'The Iron Tiger',
        years: '1963-1969',
        image: 'http://static.photos/monochrome/320x240/9',
        quotes: [
            { text: "The criterion of real strength is a deep penetration into the secrets of a position.", context: "Depth", application: "Surface knowledge is common. True strength comes from seeing what others miss." },
            { text: "I have a style that is very difficult to combat.", context: "Uniqueness", application: "Develop your own way of being that others cannot easily counter. Be authentically yourself." },
            { text: "The highest art of the chess player lies in not allowing the opponent to show what he can do.", context: "Prevention", application: "Sometimes the best move is the one that prevents problems before they arise." }
        ]
    },
    {
        id: 'spassky',
        name: 'Boris Spassky',
        title: 'The Universal Champion',
        years: '1969-1972',
        image: 'http://static.photos/monochrome/320x240/10',
        quotes: [
            { text: "Chess is like life.", context: "Analogy", application: "The principles that govern chess—preparation, calculation, courage—govern life as well." },
            { text: "The best indicator of a chess player's form is his ability to sense the climax of the game.", context: "Timing", application: "Success requires not just knowing what to do, but when to do it. Sense the critical moments." },
            { text: "I don't believe in psychology. I believe in good moves.", context: "Substance", application: "Focus on fundamentals rather than tricks. Solid work outlasts temporary advantages." }
        ]
    },
    {
        id: 'fischer',
        name: 'Bobby Fischer',
        title: 'The American Genius',
        years: '1972-1975',
        image: 'http://static.photos/monochrome/320x240/11',
        quotes: [
            { text: "All that matters on the chessboard is good moves.", context: "Simplicity", application: "Strip away the noise. In any situation, identify the correct action and take it." },
            { text: "Chess demands total concentration.", context: "Focus", application: "Divided attention yields divided results. Give your full self to what matters." },
            { text: "I like the moment when I break a man's ego.", context: "Competition", application: "In any contest, psychological dominance can be as decisive as technical superiority." }
        ]
    },
    {
        id: 'karpov',
        name: 'Anatoly Karpov',
        title: 'The Python',
        years: '1975-1985',
        image: 'http://static.photos/monochrome/320x240/12',
        quotes: [
            { text: "Chess is everything: art, science, and sport.", context: "Integration", application: "Life's richest pursuits engage your whole being—your creativity, your intellect, your physical vitality." },
            { text: "The strongest players are those who can make the fewest mistakes.", context: "Consistency", application: "Champions are built on reliability, not just brilliance. Minimize your unforced errors." },
            { text: "I don't study; I create.", context: "Originality", application: "Don't just absorb what others have done. Generate something new from your own understanding." }
        ]
    },
    {
        id: 'kasparov',
        name: 'Garry Kasparov',
        title: 'The Beast from Baku',
        years: '1985-2000',
        image: 'http://static.photos/monochrome/320x240/13',
        quotes: [
            { text: "The ability to work hard is a talent.", context: "Industry", application: "Capacity for sustained effort is not given to everyone. If you possess it, you possess something precious." },
            { text: "Without rivals there is no competition.", context: "Challenge", application: "Your adversaries make you stronger. Be grateful for worthy opponents." },
            { text: "Question the status quo at all times, especially when things are going well.", context: "Disruption", application: "Comfort is dangerous. Continuously examine and improve your position, especially when it seems secure." }
        ]
    },
    {
        id: 'kramnik',
        name: 'Vladimir Kramnik',
        title: 'The Classical World Champion',
        years: '2000-2006',
        image: 'http://static.photos/monochrome/320x240/14',
        quotes: [
            { text: "The beauty of chess is it can be whatever you want it to be.", context: "Freedom", application: "Life offers no single correct path. Define success according to your own values." },
            { text: "Chess is not only knowledge and logic.", context: "Mystery", application: "Acknowledge that not everything can be calculated. Leave room for the unknown." },
            { text: "The development of the individual is a more important goal than the development of the opening.", context: "Priority", application: "Your growth as a person matters more than any specific achievement or skill." }
        ]
    },
    {
        id: 'anand',
        name: 'Viswanathan Anand',
        title: 'The Tiger of Madras',
        years: '2007-2013',
        image: 'http://static.photos/monochrome/320x240/15',
        quotes: [
            { text: "Confidence is very important – even pretending to be confident.", context: "Presence", application: "Sometimes you must act the part before you feel it. Confidence follows action, not the reverse." },
            { text: "I don't know if I am the best, but I am on top.", context: "Humility", application: "Achievement need not breed arrogance. Stay grounded even at the summit." },
            { text: "The older I grow, the more I value pawns.", context: "Appreciation", application: "With experience comes recognition of subtle value. What seemed small reveals its importance." }
        ]
    },
    {
        id: 'carlsen',
        name: 'Magnus Carlsen',
        title: 'The Mozart of Chess',
        years: '2013-Present',
        image: 'http://static.photos/monochrome/320x240/16',
        quotes: [
            { text: "Some people think that if their opponent plays a beautiful game, it's OK to lose. I don't.", context: "Will", application: "Never accept defeat gracefully when victory was possible. Your competitive fire is sacred." },
            { text: "I don't look at computers as opponents. For me it is much more interesting to beat humans.", context: "Humanity", application: "The greatest satisfactions come from overcoming other conscious beings, not systems." },
            { text: "It's easy to get obsessed with chess.", context: "Passion", application: "Find something worthy of your complete absorption. Such devotion is the mark of a life well-lived." }
        ]
    }
];

function renderChampions() {
    const grid = document.getElementById('champions-grid');
    if (!grid) return;

    grid.innerHTML = WORLD_CHAMPIONS.map(champion => `
        <div class="champion-card bg-[#f0e6d3] p-6 rounded-xl border border-[#e0d6c3] cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#b59e6a] hover:transform hover:-translate-y-1" onclick="selectChampion('${champion.id}')">
            <div class="flex items-center gap-4">
                <img src="${champion.image}" alt="${champion.name}" class="w-16 h-16 rounded-full object-cover border-2 border-[#b59e6a]">
                <div>
                    <h3 class="font-serif text-lg font-semibold text-[#1a1a1a]">${champion.name}</h3>
                    <p class="text-xs text-[#888] uppercase tracking-wider">${champion.title}</p>
                    <p class="text-xs text-[#b59e6a]">${champion.years}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function selectChampion(championId) {
    const champion = WORLD_CHAMPIONS.find(c => c.id === championId);
    if (!champion) return;

    // Select random quote
    const quote = champion.quotes[Math.floor(Math.random() * champion.quotes.length)];

    // Update wisdom section
    document.getElementById('champion-image').src = champion.image;
    document.getElementById('champion-image').alt = champion.name;
    document.getElementById('champion-name').textContent = champion.name;
    document.getElementById('champion-title').textContent = champion.title;
    document.getElementById('champion-years').textContent = champion.years;
    document.getElementById('wisdom-quote').textContent = `"${quote.text}"`;
    document.getElementById('wisdom-application').textContent = quote.application;

    // Show wisdom section
    const wisdomSection = document.getElementById('champion-wisdom');
    wisdomSection.classList.remove('hidden');
    setTimeout(() => {
        wisdomSection.classList.remove('opacity-0');
        wisdomSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);

    // Re-render feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderChampions();
});