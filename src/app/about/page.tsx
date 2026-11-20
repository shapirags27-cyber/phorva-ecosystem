const pillars = [
  {
    number: "01",
    title: "Build useful intelligence",
    text: "Develop AI-powered products that address practical needs and create meaningful utility."
  },
  {
    number: "02",
    title: "Connect people and ideas",
    text: "Bring developers, creators, researchers and curious minds together to share knowledge and collaborate."
  },
  {
    number: "03",
    title: "Learn through experimentation",
    text: "Encourage testing, feedback and continuous improvement rather than building in isolation."
  },
  {
    number: "04",
    title: "Create opportunities",
    text: "Explore new ways for people to discover technology, participate in development and contribute to the digital economy."
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="docs-topbar">
        <a className="docs-brand" href="/"><img className="docs-brand-logo" src="/logo.png" alt="PHORVA logo" /> <span>PHORVA.</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/docs">Documentation</a>
          <a href="/#products">Products</a>
        </nav>
      </header>

      <section className="about-hero">
        <span className="about-eyebrow">PHORVA / ABOUT US</span>
        <h1>We are building<br /><em>what comes next.</em></h1>
        <p>
          PHORVA is an emerging AI and Web3 ecosystem bringing together
          intelligent products, builders and communities to explore what
          technology can make possible.
        </p>
        <a href="/docs">Explore our documentation ↗</a>
      </section>

      <section className="about-story">
        <div className="about-label">01 / OUR STORY</div>
        <div>
          <h2>Technology moves forward when people build together.</h2>
          <p>
            Artificial intelligence and Web3 are creating new possibilities
            for how people work, discover opportunities, exchange information
            and interact with digital services.
          </p>
          <p>
            But meaningful innovation needs more than technology alone.
            It needs people who can develop ideas, share knowledge, experiment
            with new approaches and improve products through real feedback.
          </p>
          <p>
            PHORVA is being built around that belief: a connected environment
            where product development and community collaboration can grow
            together.
          </p>
        </div>
      </section>

      <section className="about-purpose">
        <div className="about-label">02 / OUR PURPOSE</div>
        <h2>Build intelligence.<br />Connect innovation.<br /><em>Shape what's next.</em></h2>
        <p>
          Our purpose is to contribute to a more accessible and useful digital
          future by developing practical intelligent products and supporting
          the people who help bring them to life.
        </p>
      </section>

      <section className="about-pillars">
        <div className="about-label">03 / WHAT GUIDES US</div>
        <h2>Four principles.<br />One connected direction.</h2>
        <div className="about-pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-ecosystem">
        <div className="about-label">04 / THE ECOSYSTEM</div>
        <h2>Different roles.<br />Shared ambition.</h2>
        <p>
          PHORVA is organized around complementary components, each contributing
          to the development and growth of the ecosystem.
        </p>
        <div className="about-ecosystem-list">
          <article>
            <span>01</span>
            <div><h3>PHORVA FORGE</h3><p>The community and builder environment for learning, collaboration, experimentation and showcasing work.</p></div>
          </article>
          <article>
            <span>02</span>
            <div><h3>PHORVA AI</h3><p>The technical development side focused on intelligent agents and practical AI-powered products.</p></div>
          </article>
          <article>
            <span>03</span>
            <div><h3>PHORVA MARKETPLACE</h3><p>A planned discovery space for AI agents, tools and products developed across the ecosystem.</p></div>
          </article>
          <article>
            <span>04</span>
            <div><h3>PHORVA TESTING LAB</h3><p>A planned collaborative environment for product testing, feedback and improvement.</p></div>
          </article>
        </div>
      </section>

      <section className="about-products">
        <div className="about-label">05 / WHAT WE ARE DEVELOPING</div>
        <h2>Ideas with practical ambition.</h2>
        <div className="about-product-grid">
          <article><span>AI TRADING</span><h3>PhorvaTrade</h3><p>AI-assisted market analysis and trading with configurable risk controls.</p><small>IN DEVELOPMENT</small></article>
          <article><span>OPPORTUNITY DISCOVERY</span><h3>PhorvaAgent</h3><p>Discover jobs, freelance work, grants, bounties, hackathons and more.</p><small>IN DEVELOPMENT</small></article>
          <article><span>PREDICTION INTELLIGENCE</span><h3>Prophixy</h3><p>Collective insight and information to support better understanding of real-world outcomes.</p><small>IN DEVELOPMENT</small></article>
        </div>
      </section>

      <section className="about-collaboration">
        <div className="about-label">06 / COLLABORATION</div>
        <h2>Different strengths.<br />A stronger ecosystem.</h2>
        <p>
          PHORVA welcomes collaboration with communities, educators,
          developers, creators and organizations whose work aligns with
          responsible innovation and useful technology.
        </p>
        <div className="about-ble">
          <span>EDUCATION COLLABORATION</span>
          <h3>PHORVA × BLE</h3>
          <p>
            BLE focuses on Web3 fundamentals and beginner education.
            PHORVA focuses on developing its own AI and Web3 ecosystem
            and products. Each has a distinct role, with collaboration
            creating opportunities to connect learning and building.
          </p>
        </div>
      </section>

      <section className="about-community">
        <span>07 / BE PART OF THE JOURNEY</span>
        <h2>The future is not just<br />something to observe.</h2>
        <p>
          Whether you are learning, building, researching, creating or
          sharing ideas, there is room to contribute to the PHORVA journey.
        </p>
        <a href="/docs">Discover PHORVA ↗</a>
      </section>

      <footer className="docs-footer">
        <a className="docs-footer-brand" href="/"><img src="/logo.png" alt="PHORVA logo" /> PHORVA.</a>
        <span>Build Intelligence. Connect Innovation. Shape What's Next.</span>
        <span>© 2026 PHORVA</span>
      </footer>
    </main>
  );
}
