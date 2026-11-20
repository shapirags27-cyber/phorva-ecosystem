const phases = [
  {
    number: "01",
    status: "FOUNDATION",
    title: "Establish the ecosystem",
    description: "Build the identity, structure and community foundations that support PHORVA's long-term direction.",
    items: [
      "Establish the PHORVA brand and public presence",
      "Publish ecosystem documentation",
      "Develop PHORVA FORGE community foundations",
      "Define product direction and development priorities",
    ],
  },
  {
    number: "02",
    status: "PRODUCT DEVELOPMENT",
    title: "Turn ideas into useful products",
    description: "Advance the initial product concepts through implementation, evaluation and staged testing.",
    items: [
      "Continue PhorvaTrade development and safety validation",
      "Develop PhorvaAgent opportunity discovery capabilities",
      "Advance the Prophixy prediction intelligence concept",
      "Improve product usability and technical foundations",
    ],
  },
  {
    number: "03",
    status: "BUILDER COLLABORATION",
    title: "Grow through participation",
    description: "Create more ways for people with different skills and experience to contribute.",
    items: [
      "Expand learning and builder activities through PHORVA FORGE",
      "Encourage collaborative experiments and mini-builds",
      "Create opportunities for product feedback",
      "Recognize meaningful community contributions",
    ],
  },
  {
    number: "04",
    status: "ECOSYSTEM EXPANSION",
    title: "Connect more possibilities",
    description: "Explore additional infrastructure and capabilities as the ecosystem and its products mature.",
    items: [
      "Explore the PHORVA MARKETPLACE concept",
      "Develop the PHORVA TESTING LAB concept",
      "Explore integrations and ecosystem partnerships",
      "Expand product discovery and collaboration opportunities",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="roadmap-page">
      <header className="docs-topbar">
        <a className="docs-brand" href="/"><img className="docs-brand-logo" src="/logo.png" alt="PHORVA logo" /> <span>PHORVA.</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/docs">Documentation</a>
          <a href="/#products">Products</a>
        </nav>
      </header>

      <section className="roadmap-hero">
        <span>PHORVA / ROADMAP</span>
        <h1>Building today.<br /><em>Shaping what's next.</em></h1>
        <p>
          A view of PHORVA's development direction — from ecosystem foundations
          and product development to builder collaboration and future expansion.
        </p>
        <div className="roadmap-disclaimer">
          DEVELOPMENT DIRECTION <i /> NO FIXED LAUNCH DATES
        </div>
      </section>

      <section className="roadmap-intro">
        <div>
          <span>THE BIGGER PICTURE</span>
          <h2>An evolving ecosystem.<br />A direction worth building.</h2>
        </div>
        <p>
          PHORVA is being developed in stages. Priorities may evolve as products
          are tested, community feedback is received and new opportunities emerge.
          The roadmap describes intended areas of work, not guaranteed delivery dates.
        </p>
      </section>

      <section className="roadmap-timeline">
        {phases.map((phase) => (
          <article className="roadmap-phase" key={phase.number}>
            <div className="roadmap-marker">{phase.number}</div>
            <div className="roadmap-phase-content">
              <span className="roadmap-phase-status">{phase.status}</span>
              <h2>{phase.title}</h2>
              <p>{phase.description}</p>
              <ul>
                {phase.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="roadmap-principles">
        <span>HOW WE MOVE FORWARD</span>
        <h2>Progress over promises.</h2>
        <p>
          We believe meaningful progress comes from building, testing, learning
          and improving. PHORVA will communicate development progress honestly
          and distinguish working products from concepts and planned capabilities.
        </p>
      </section>

      <section className="roadmap-cta">
        <span>BUILD THE NEXT CHAPTER</span>
        <h2>There is room<br />to contribute.</h2>
        <p>Explore the ecosystem and discover ways to participate.</p>
        <a href="/docs">Explore documentation ↗</a>
      </section>

      <footer className="docs-footer">
        <a className="docs-footer-brand" href="/"><img src="/logo.png" alt="PHORVA logo" /> PHORVA.</a>
        <span>Build Intelligence. Connect Innovation. Shape What's Next.</span>
        <span>© 2026 PHORVA</span>
      </footer>
    </main>
  );
}
