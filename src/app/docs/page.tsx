const sections = [
  { id: "about", number: "01", title: "About PHORVA", description: "What PHORVA is and the problem it aims to address." },
  { id: "vision", number: "02", title: "Vision & Mission", description: "The principles and direction behind the ecosystem." },
  { id: "ecosystem", number: "03", title: "Ecosystem Architecture", description: "How the different components connect." },
  { id: "forge", number: "04", title: "PHORVA FORGE", description: "Community, learning and builder collaboration." },
  { id: "products", number: "05", title: "Products", description: "The initial products being developed." },
  { id: "testing", number: "06", title: "Testing & Feedback", description: "How products can be tested and improved." },
  { id: "responsibility", number: "07", title: "Responsible Development", description: "Privacy, security and responsible AI principles." },
  { id: "roadmap", number: "08", title: "Roadmap", description: "The planned direction of the ecosystem." },
  { id: "faq", number: "09", title: "FAQ", description: "Answers to common questions." },
];

export default function DocsPage() {
  return (
    <main className="docs-page">
      <header className="docs-topbar">
        <a className="docs-brand" href="/"><img className="docs-brand-logo" src="/logo.png" alt="PHORVA logo" /> <span>PHORVA.</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/docs">Documentation</a>
          <a href="/#products">Products</a>
        </nav>
      </header>

      <section className="docs-hero">
        <div className="docs-eyebrow">PHORVA / DOCUMENTATION</div>
        <h1>Understand the ecosystem.<br /><span>Explore what we're building.</span></h1>
        <p>
          An introduction to PHORVA, its ecosystem components, products,
          development principles and the community helping shape what comes next.
        </p>
        <div className="docs-status">PUBLIC DOCUMENTATION <span>•</span> EARLY-STAGE ECOSYSTEM</div>
      </section>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <div className="docs-sidebar-label">ON THIS PAGE</div>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{section.number}</span>{section.title}
            </a>
          ))}
        </aside>

        <article className="docs-content">
          <section id="about" className="docs-section">
            <div className="docs-number">01 / INTRODUCTION</div>
            <h2>What is PHORVA?</h2>
            <p>
              PHORVA is an emerging AI and Web3 ecosystem focused on developing
              useful intelligent products, connecting builders and creating
              opportunities for collaboration.
            </p>
            <p>
              Rather than treating every product as an isolated project, PHORVA
              brings product development, AI agent discovery, community
              participation and collaborative testing into one connected
              environment.
            </p>
            <div className="docs-note">
              <strong>Our approach</strong>
              <p>Build useful technology. Encourage collaboration. Improve through experimentation and feedback.</p>
            </div>
          </section>

          <section id="vision" className="docs-section">
            <div className="docs-number">02 / DIRECTION</div>
            <h2>Vision & Mission</h2>
            <h3>Our vision</h3>
            <p>
              To contribute to a future where intelligent technology is more
              accessible, useful and shaped by connected communities of builders.
            </p>
            <h3>Our mission</h3>
            <p>
              To develop practical AI-powered products, support people building
              with emerging technologies and create an environment where ideas
              can be explored, tested and improved.
            </p>
          </section>

          <section id="ecosystem" className="docs-section">
            <div className="docs-number">03 / ARCHITECTURE</div>
            <h2>One ecosystem. Connected capabilities.</h2>
            <p>
              PHORVA is organized around four complementary components. Each has
              a distinct purpose, while contributing to the broader ecosystem.
            </p>
            <div className="docs-grid">
              <div className="docs-card"><span>01</span><h3>PHORVA FORGE</h3><p>Community, learning, collaboration and builder participation.</p></div>
              <div className="docs-card"><span>02</span><h3>PHORVA AI</h3><p>The technical development environment for AI agents and products.</p></div>
              <div className="docs-card"><span>03</span><h3>PHORVA MARKETPLACE</h3><p>A planned discovery space for agents, tools and ecosystem products.</p></div>
              <div className="docs-card"><span>04</span><h3>PHORVA TESTING LAB</h3><p>A planned collaborative environment for product testing and feedback.</p></div>
            </div>
          </section>

          <section id="forge" className="docs-section">
            <div className="docs-number">04 / COMMUNITY</div>
            <h2>PHORVA FORGE</h2>
            <p>
              PHORVA FORGE is the community and builder environment at the heart
              of the ecosystem. It is intended for beginners, experienced
              developers, creators and people curious about AI and Web3.
            </p>
            <ul>
              <li>Learn about AI and emerging technologies.</li>
              <li>Collaborate on ideas and practical experiments.</li>
              <li>Share projects, progress and useful resources.</li>
              <li>Exchange feedback and showcase completed work.</li>
            </ul>
            <p>
              Participation is not limited to software developers. People can
              contribute through research, design, content, testing, education
              and community support.
            </p>
          </section>

          <section id="products" className="docs-section">
            <div className="docs-number">05 / PRODUCTS</div>
            <h2>Products in development</h2>
            <p>
              PHORVA's initial products explore different applications of
              intelligent technology and digital infrastructure.
            </p>
            <div className="docs-product">
              <div><span>AI TRADING</span><h3><a href="/products/phorvatrade">PhorvaTrade ↗</a></h3></div>
              <p>An AI-powered trading platform designed to analyze markets and execute strategies within configurable risk controls.</p>
              <small>IN DEVELOPMENT</small>
            </div>
            <div className="docs-product">
              <div><span>OPPORTUNITY DISCOVERY</span><h3><a href="/products/phorvaagent">PhorvaAgent ↗</a></h3></div>
              <p>A platform concept for discovering jobs, freelance work, grants, bounties, hackathons and other opportunities.</p>
              <small>IN DEVELOPMENT</small>
            </div>
            <div className="docs-product">
              <div><span>PREDICTION INTELLIGENCE</span><h3><a href="/products/prophixy">Prophixy ↗</a></h3></div>
              <p>A prediction and decision-intelligence concept built around collective insight and information about real-world outcomes.</p>
              <small>IN DEVELOPMENT</small>
            </div>
          </section>

          <section id="testing" className="docs-section">
            <div className="docs-number">06 / EXPERIMENTATION</div>
            <h2>Testing & feedback</h2>
            <p>
              Useful AI products need more than development. They also need
              evaluation, feedback and improvement based on real needs.
            </p>
            <p>
              PHORVA aims to create opportunities for developers to introduce
              their products to suitable community testers, collect feedback
              and identify areas for improvement.
            </p>
            <p>
              Any testing involving user information, connected accounts or
              external services should require appropriate permission and
              safeguards.
            </p>
          </section>

          <section id="responsibility" className="docs-section">
            <div className="docs-number">07 / PRINCIPLES</div>
            <h2>Responsible development</h2>
            <p>
              PHORVA aims to approach AI and Web3 development with responsibility
              and transparency. Our guiding priorities include:
            </p>
            <ul>
              <li><strong>Privacy:</strong> Respect user information and limit unnecessary data collection.</li>
              <li><strong>Security:</strong> Treat application and infrastructure security as ongoing priorities.</li>
              <li><strong>Transparency:</strong> Communicate product capabilities and limitations honestly.</li>
              <li><strong>User control:</strong> Make permissions and important actions clear to users.</li>
              <li><strong>Risk awareness:</strong> Apply appropriate safeguards to products involving financial or other consequential activity.</li>
            </ul>
            <p>
              These are development principles, not a claim that every planned
              safeguard or independent security review is already complete.
            </p>
          </section>

          <section id="roadmap" className="docs-section">
            <div className="docs-number">08 / WHAT COMES NEXT</div>
            <h2>Our roadmap</h2>
            <p>
              PHORVA is an evolving ecosystem. The following stages describe
              broad areas of planned work, not guaranteed launch dates.
            </p>
            <div className="docs-roadmap">
              <div><span>PHASE 01</span><h3>Foundation</h3><p>Establish the ecosystem identity, documentation and community foundations.</p></div>
              <div><span>PHASE 02</span><h3>Product development</h3><p>Develop and validate initial AI-powered products through staged testing.</p></div>
              <div><span>PHASE 03</span><h3>Builder collaboration</h3><p>Expand learning, experimentation, community contributions and feedback.</p></div>
              <div><span>PHASE 04</span><h3>Ecosystem expansion</h3><p>Explore broader product discovery, integrations and ecosystem opportunities.</p></div>
            </div>
          </section>

          <section id="faq" className="docs-section">
            <div className="docs-number">09 / QUESTIONS</div>
            <h2>Frequently asked questions</h2>
            <div className="docs-faq">
              <h3>Is PHORVA only for developers?</h3>
              <p>No. The ecosystem is intended to welcome developers, beginners, creators, researchers, testers and other contributors.</p>
              <h3>Are all PHORVA products live?</h3>
              <p>No. The initial products are in development. Availability will be communicated as each product reaches an appropriate release stage.</p>
              <h3>What is PHORVA FORGE?</h3>
              <p>It is the community and builder environment for learning, collaboration, experimentation and showcasing work.</p>
              <h3>How can I participate?</h3>
              <p>You can follow PHORVA's development, explore the community and contribute through learning, feedback, building or sharing ideas.</p>
              <h3>Is PHORVA connected to BLE?</h3>
              <p>BLE is an education collaborator focused on Web3 fundamentals and beginner education. PHORVA focuses on developing its own ecosystem and products. They have distinct roles.</p>
            </div>
          </section>

          <div className="docs-end">
            <span>THE NEXT CHAPTER IS BUILT TOGETHER</span>
            <h2>Build intelligence.<br />Connect innovation.</h2>
            <a href="/">Return to PHORVA homepage ↗</a>
          </div>
        </article>
      </div>

      <footer className="docs-footer">
        <a className="docs-footer-brand" href="/"><img src="/logo.png" alt="PHORVA logo" /> PHORVA.</a>
        <span>Build Intelligence. Connect Innovation. Shape What's Next.</span>
        <span>© 2026 PHORVA</span>
      </footer>
    </main>
  );
}
