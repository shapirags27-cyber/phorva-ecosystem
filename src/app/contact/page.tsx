import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "The best way to reach the PHORVA community is through our official channels.",
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
        <div className="eyebrow">PHORVA / CONTACT</div>
        <h1>Contact</h1>
        <p className="product-detail-description">The best way to reach the PHORVA community is through our official channels.</p>
      </section>

      <section className="product-detail-content legal-content">
        <div className="legal-block">
          <h2>Community</h2>
          <p>Join the conversation, ask questions and meet other people exploring AI and Web3.</p>
          <a href="https://discord.gg/f58PmVGFJB" target="_blank" rel="noopener noreferrer">Join the PHORVA Discord ↗</a>
        </div>
        <div className="legal-block">
          <h2>Updates</h2>
          <p>Follow PHORVA for announcements and project updates.</p>
          <a href="https://x.com/PhorvaGuard" target="_blank" rel="noopener noreferrer">Follow PHORVA on X ↗</a>
        </div>
        <div className="legal-block">
          <h2>Stay careful</h2>
          <p>Only trust links published on this website and PHORVA&apos;s official channels. PHORVA will never ask you to share a wallet seed phrase or private key.</p>
        </div>
      </section>

      <footer className="product-detail-footer">
        <a href="/">← Back to PHORVA</a>
        <span>© 2026 PHORVA. All rights reserved.</span>
      </footer>
    </main>
  );
}
