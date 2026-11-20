import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website handles information. Last updated: November 20, 2026.",
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
        <div className="eyebrow">PHORVA / PRIVACY</div>
        <h1>Privacy Policy</h1>
        <p className="product-detail-description">How this website handles information. Last updated: November 20, 2026.</p>
      </section>

      <section className="product-detail-content legal-content">
        <div className="legal-block">
          <h2>Overview</h2>
          <p>This website is an informational site about the PHORVA ecosystem. It does not require an account and does not include forms that collect personal information.</p>
        </div>
        <div className="legal-block">
          <h2>Technical information</h2>
          <p>Like most websites, the hosting provider may automatically process basic technical data, such as IP address, browser type and pages requested, to deliver and secure the site.</p>
        </div>
        <div className="legal-block">
          <h2>Third-party links</h2>
          <p>This site links to services such as Discord and X. Those services have their own privacy practices, and we encourage you to review them before sharing information there.</p>
        </div>
        <div className="legal-block">
          <h2>Changes</h2>
          <p>If we add features that collect information, such as analytics or sign-up forms, we will update this policy to describe them.</p>
        </div>
        <div className="legal-block">
          <h2>Questions</h2>
          <p>Reach us through the channels on the <a href="/contact">Contact</a> page.</p>
        </div>
      </section>

      <footer className="product-detail-footer">
        <a href="/">← Back to PHORVA</a>
        <span>© 2026 PHORVA. All rights reserved.</span>
      </footer>
    </main>
  );
}
