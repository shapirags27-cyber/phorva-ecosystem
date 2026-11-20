import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHORVA FORGE — Learn, Build & Collaborate",
  description:
    "Join the PHORVA community to learn about AI and Web3, collaborate on ideas, test projects and showcase what you create.",
};

const paths = [
  {
    number: "01",
    level: "START HERE",
    title: "Explore and learn",
    description:
      "New to AI or Web3? Start with the fundamentals, ask questions, follow learning discussions and discover how the ecosystem works.",
    activities: ["Beginner-friendly discussions", "Learning resources", "Ask questions and share ideas"],
  },
  {
    number: "02",
    level: "GET INVOLVED",
    title: "Contribute and collaborate",
    description:
      "Build your experience by helping with research, design, content, testing, community activities or early product feedback.",
    activities: ["Collaborative mini-projects", "Product feedback and testing", "Research and creative contributions"],
  },
  {
    number: "03",
    level: "TAKE THE LEAD",
    title: "Build and showcase",
    description:
      "Bring your skills and ideas into practical projects. Share what you are developing, exchange feedback and help others move forward.",
    activities: ["Project showcases", "Technical experiments", "Mentorship and peer collaboration"],
  },
];

const principles = [
  {
    title: "Useful participation",
    text: "We value meaningful contributions, learning and collaboration over message-count farming or empty engagement.",
  },
  {
    title: "Open to different skills",
    text: "You do not need to be a developer. Researchers, designers, writers, educators, testers and curious beginners can all contribute.",
  },
  {
    title: "Build with responsibility",
    text: "Respect privacy, permissions, intellectual property and the people involved in every project or experiment.",
  },
];

export default function ForgePage() {
  return (
    <main className="forge-page">
      <header className="docs-topbar">
        <a className="docs-brand" href="/"><img className="docs-brand-logo" src="/logo.png" alt="PHORVA logo" /> <span>PHORVA.</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/docs">Documentation</a>
          <a href="/#products">Products</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section className="forge-page-hero">
        <img className="forge-mascot" src="/mascot.webp" alt="PHORVA mascot" />
        <span className="forge-page-eyebrow">PHORVA / COMMUNITY & BUILDERS</span>
        <h1>Ideas become stronger<br /><em>when we build together.</em></h1>
        <p>
          PHORVA FORGE is the community and builder environment for people
          exploring AI, Web3 and useful technology. Learn, collaborate,
          experiment and share what you create — wherever you are starting from.
        </p>
        <div className="forge-page-actions">
          <a className="button button-primary" href="https://discord.gg/f58PmVGFJB" target="_blank" rel="noopener noreferrer">
            Join the PHORVA community ↗
          </a>
          <a className="button button-secondary" href="https://x.com/PhorvaGuard" target="_blank" rel="noopener noreferrer">
            Follow PHORVA on X ↗
          </a>
        </div>
        <div className="forge-page-status">
          <i /> COMMUNITY INITIATIVE · DEDICATED FORGE PLATFORM IN DEVELOPMENT
        </div>
      </section>

      <section className="forge-page-intro">
        <div>
          <span className="forge-page-label">01 / THE IDEA</span>
          <h2>A place for curious minds and capable builders.</h2>
        </div>
        <p>
          Great technology is not created by one type of person. It grows
          when different skills, perspectives and experiences come together.
          PHORVA FORGE is designed to make participation accessible to
          beginners while giving experienced contributors room to build,
          lead and share knowledge.
        </p>
      </section>

      <section className="forge-paths">
        <div className="forge-paths-heading">
          <span className="forge-page-label">02 / FIND YOUR PATH</span>
          <h2>There is more than one way to contribute.</h2>
        </div>
        <div className="forge-path-grid">
          {paths.map((path) => (
            <article className="forge-path-card" key={path.number}>
              <span className="forge-path-number">{path.number}</span>
              <span className="forge-path-level">{path.level}</span>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <ul>
                {path.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="forge-activities">
        <div>
          <span className="forge-page-label">03 / WHAT WE WANT TO CREATE</span>
          <h2>From conversations<br />to real progress.</h2>
        </div>
        <div className="forge-activity-list">
          <article>
            <span>01</span>
            <div>
              <h3>Learning sessions</h3>
              <p>Accessible discussions and sessions covering AI, Web3, tools and practical skills.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Collaborative build challenges</h3>
              <p>Small, focused activities where community members work together to explore and create useful ideas.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Feedback and experimentation</h3>
              <p>Thoughtful product feedback and testing opportunities, with appropriate permissions and safeguards.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Community showcases</h3>
              <p>Opportunities to present projects, share lessons, recognize contributors and learn from each other.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="forge-principles">
        <span className="forge-page-label">04 / HOW WE BUILD</span>
        <h2>Progress over noise.</h2>
        <div className="forge-principle-grid">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="forge-page-cta">
        <span className="forge-page-label">05 / YOUR NEXT STEP</span>
        <h2>Bring your curiosity.<br /><em>Find your people.</em></h2>
        <p>
          The PHORVA FORGE initiative is growing. Join the community,
          introduce yourself and take part in the conversations.
        </p>
        <div className="forge-page-actions">
          <a className="button button-primary" href="https://discord.gg/f58PmVGFJB" target="_blank" rel="noopener noreferrer">
            Enter PHORVA Discord ↗
          </a>
          <a className="button button-secondary" href="/docs">
            Read the documentation
          </a>
        </div>
      </section>

      <footer className="docs-footer">
        <a className="docs-footer-brand" href="/"><img src="/logo.png" alt="PHORVA logo" /> PHORVA.</a>
        <span>Build Intelligence. Connect Innovation. Shape What's Next.</span>
        <span>© 2026 PHORVA</span>
      </footer>
    </main>
  );
}
