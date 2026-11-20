import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Please read these terms before using this website. Last updated: November 20, 2026.",
};

export default function Page() {
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

      <section className="product-detail-hero legal-hero">
        <div className="eyebrow">PHORVA / TERMS</div>
        <h1>Terms of Use</h1>
        <p className="product-detail-description">Please read these terms before using this website. Last updated: November 20, 2026.</p>
      </section>

      <section className="product-detail-content legal-content">
        <div className="legal-block">
          <h2>Informational purposes only</h2>
          <p>Content on this website is provided for general information about the PHORVA ecosystem. It is not financial, investment, trading or legal advice.</p>
        </div>
        <div className="legal-block">
          <h2>Products in development</h2>
          <p>PhorvaTrade, PhorvaAgent, Prophixy and other planned components are in development. Features, availability and timelines may change, and nothing here is a promise of release or performance.</p>
        </div>
        <div className="legal-block">
          <h2>Risk</h2>
          <p>Trading, digital assets and predictions involve risk, including the loss of funds. Do your own research and make your own decisions.</p>
        </div>
        <div className="legal-block">
          <h2>External links</h2>
          <p>We are not responsible for the content or practices of third-party websites linked from this site.</p>
        </div>
        <div className="legal-block">
          <h2>Intellectual property</h2>
          <p>The PHORVA name, branding and original site content belong to PHORVA unless stated otherwise. Please do not reproduce them in a misleading way.</p>
        </div>
        <div className="legal-block">
          <h2>Changes</h2>
          <p>We may update these terms as the project evolves. Continued use of the site means you accept the current version.</p>
        </div>
      </section>

      <footer className="product-detail-footer">
        <a href="/">← Back to PHORVA</a>
        <span>© 2026 PHORVA. All rights reserved.</span>
      </footer>
    </main>
  );
}
