import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prophixy | PHORVA",
  description: "A prediction and decision-intelligence concept built around collective insight and information about real-world outcomes.",
};

const capabilities = [
  "Explore questions about economic and digital trends.",
  "Understand collective perspectives and emerging signals.",
  "Use structured information to support better decisions.",
];

export default function ProductPage() {
  return (
    <main className="product-detail-page">
      <header className="product-detail-header">
        <a className="brand" href="/">
          <span className="brand-mark"><img src="/logo.png" alt="PHORVA logo" /></span>
          <span>PHORVA<span className="brand-period">.</span></span>
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/docs">Documentation</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section className="product-detail-hero">
        <div className="eyebrow">PHORVA ECOSYSTEM / PRODUCT</div>
        <div className="product-detail-status">
          <span className="development-dot" />
          IN DEVELOPMENT
        </div>
        <h1>Prophixy</h1>
        <p className="product-detail-description">
          A prediction and decision-intelligence concept built around collective insight and information about real-world outcomes.
        </p>
        <div className="product-detail-actions">
          <a className="button button-primary" href="https://discord.gg/f58PmVGFJB" target="_blank" rel="noopener noreferrer">Join the community ↗</a>
          <a className="button button-secondary" href="/">Explore PHORVA</a>
        </div>
      </section>

      <section className="product-detail-content">
        <div className="eyebrow">THE PRODUCT</div>
        <h2>What we're building.</h2>
        <p>
          Prophixy is being developed around collective intelligence: bringing people together to interpret information, explore possible outcomes and make more informed decisions. Its focus is insight and decision support, not simply speculation.
        </p>

        <div className="product-capability-grid">
          {capabilities.map((item, index) => (
            <article className="product-capability" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="product-development-note">
          <span className="eyebrow">CURRENT STATUS</span>
          <h2>Building with purpose.</h2>
          <p>
            This product is in development. Its features, availability and
            release plans may evolve as research, testing and development
            progress. Follow PHORVA for future updates.
          </p>
          <a href="https://x.com/PhorvaGuard" target="_blank" rel="noopener noreferrer">Follow PHORVA on X ↗</a>
        </div>
      </section>

      <footer className="product-detail-footer">
        <a href="/">← Back to PHORVA</a>
        <span>© 2026 PHORVA. All rights reserved.</span>
      </footer>
    </main>
  );
}
