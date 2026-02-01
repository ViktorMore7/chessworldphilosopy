class AppHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                header {
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #e0d6c3;
                    background: rgba(248, 245, 240, 0.95);
                    backdrop-filter: blur(10px);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    color: #1a1a1a;
                }
                .logo-icon {
                    font-size: 1.5rem;
                }
                .logo-text {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                }
                nav {
                    display: flex;
                    gap: 2rem;
                    font-family: 'Inter', sans-serif;
                    font-size: 0.875rem;
                    color: #666;
                }
                a {
                    text-decoration: none;
                    color: inherit;
                    transition: color 0.2s;
                    position: relative;
                }
                a:hover {
                    color: #b59e6a;
                }
                a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #b59e6a;
                    transition: width 0.3s;
                }
                a:hover::after {
                    width: 100%;
                }
                @media (max-width: 640px) {
                    nav { display: none; }
                    header { padding: 1rem; }
                }
            </style>
            <header>
                <a href="index.html" class="logo">
                    <span class="logo-icon">♟️</span>
                    <span class="logo-text">Sacred Geometry</span>
                </a>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="champions.html">Champions</a>
                    <a href="philosophy.html">Philosophy</a>
                </nav>
</header>
        `;
    }
}
customElements.define('app-header', AppHeader);