import ScrollReveal from "./ScrollReveal";

const products = [
  {
    number: "01",
    name: "PhorvaTrade",
    type: "AI-POWERED TRADING",
    description:
      "A trading platform designed to help users analyze markets and execute strategies through configurable AI agents and risk controls.",
    audience: "For people exploring AI-assisted markets",
    status: "In development",
    href: "/products/phorvatrade",
    features: ["Market analysis", "Strategy execution", "Risk controls"],
  },
  {
    number: "02",
    name: "PhorvaAgent",
    type: "OPPORTUNITY DISCOVERY",
    description:
      "An AI-powered discovery platform for finding jobs, freelance projects, grants, bounties, hackathons and opportunities across the digital economy.",
    audience: "For builders, creators and opportunity seekers",
    status: "In development",
    href: "/products/phorvaagent",
    features: ["Jobs and freelance work", "Grants and bounties", "Hackathons and testnets"],
  },
  {
    number: "03",
    name: "Prophixy",
    type: "PREDICTION INTELLIGENCE",
    description:
      "A prediction and decision-intelligence concept that brings collective insight together to help people understand possible real-world outcomes.",
    audience: "For curious minds and informed decision-makers",
    status: "In development",
    href: "/products/prophixy",
    features: ["Collective insight", "Real-world topics", "Decision intelligence"],
  },
];

const layers = [
  {
    number: "01",
    name: "PHORVA FORGE",
    tag: "COMMUNITY & BUILDING",
    description:
      "A welcoming environment where beginners, developers and creators can learn, collaborate, experiment and share what they make.",
  },
  {
    number: "02",
    name: "PHORVA AI",
    tag: "PRODUCT DEVELOPMENT",
    description:
      "The technical direction behind intelligent agents and practical AI-powered products built to address real needs.",
  },
  {
    number: "03",
    name: "PHORVA MARKETPLACE",
    tag: "DISCOVERY & ACCESS",
    description:
      "A planned discovery space for exploring AI agents, useful tools and products emerging across the ecosystem.",
  },
  {
    number: "04",
    name: "PHORVA TESTING LAB",
    tag: "EXPERIMENTATION & FEEDBACK",
    description:
      "A planned collaborative environment for product testing, structured feedback and responsible improvement.",
  },
];

const audiences = [
  {
    number: "01",
    title: "Explore",
    description:
      "New to AI or Web3? Learn the fundamentals, ask questions and find a starting point without needing to be an expert.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn ideas into experiments, work with other contributors and develop practical skills through collaboration.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "Find emerging tools, opportunities and products that can help you take your next step.",
  },
  {
    number: "04",
    title: "Contribute",
    description:
      "Share feedback, test ideas, showcase your work and help make useful technology better.",
  },
];

const loopSteps = [
  { number: "01", tag: "PHORVA FORGE", title: "Learn & ideate", text: "Community members explore ideas and build skills together.", planned: false },
  { number: "02", tag: "PHORVA AI", title: "Build", text: "Ideas are shaped into practical, AI-powered products.", planned: false },
  { number: "03", tag: "PHORVA TESTING LAB", title: "Test", text: "Structured feedback helps reveal what works and what needs work.", planned: true },
  { number: "04", tag: "PHORVA MARKETPLACE", title: "Discover", text: "Useful agents and tools become easier to find and try.", planned: true },
];

const productIcons: Record<string, string> = { "01": "▲", "02": "◎", "03": "✦" };
const layerIcons: Record<string, string> = { "01": "❖", "02": "✦", "03": "◎", "04": "▲" };
const audienceIcons: Record<string, string> = { "01": "◎", "02": "❖", "03": "✦", "04": "◆" };
const loopIcons: Record<string, string> = { "01": "❖", "02": "✦", "03": "▲", "04": "◎" };

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <div className="announcement">
        <span className="status-dot" />
        PHORVA IS GROWING — EXPLORE THE ECOSYSTEM
      </div>

      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark"><img src="/logo.png" alt="PHORVA logo" /></span>
          <span>PHORVA<span className="brand-period">.</span></span>
        </a>

        <nav className="desktop-nav">
          <a href="#ecosystem">Ecosystem</a>
          <a href="#products">Products</a>
          <a href="/forge">Forge</a>
          <a href="/docs">Docs</a>
        </nav>

        <a className="header-cta" href="#community">
          Get involved <span>↗</span>
        </a>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            AN AI & WEB3 ECOSYSTEM
          </div>

          <h1>
            Ideas into
            <br />
            <span className="gradient-text">intelligence.</span>
            <br />
            Built together.
          </h1>

          <p className="hero-description">
            PHORVA brings people, builders and intelligent products into one
            growing ecosystem — creating space to learn, discover, build and
            explore what useful technology can become.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#ecosystem">
              Explore PHORVA <span>↗</span>
            </a>
            <a className="button button-secondary" href="/forge">
              Enter PHORVA FORGE <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            OPEN TO CURIOUS MINDS, BUILDERS AND COLLABORATORS
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract PHORVA ecosystem illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="core-glow" />
          <div className="core core-mascot">
            <img src="/mascot.webp" alt="PHORVA mascot" />
          </div>
          <div className="orbit-label label-top">INTELLIGENCE</div>
          <div className="orbit-label label-right">CREATE</div>
          <div className="orbit-label label-bottom">DISCOVERY</div>
          <div className="orbit-label label-left">COMMUNITY</div>
          <div className="float-card float-one"><span>01</span>PhorvaTrade<small>In development</small></div>
          <div className="float-card float-two"><span>02</span>PhorvaAgent<small>In development</small></div>
          <div className="float-card float-three"><span>03</span>Prophixy<small>In development</small></div>
          <div className="art-caption">
            One connected vision.
            <br />
            Multiple paths to participate.
          </div>
        </div>
      </section>

      <section className="signal-strip">
        <div>LEARN <span>✳</span></div>
        <div>DISCOVER <span>✳</span></div>
        <div>BUILD <span>✳</span></div>
        <div>COLLABORATE <span>✳</span></div>
        <div>IMPROVE <span>✳</span></div>
      </section>

      <section className="intro section-wrap" id="ecosystem">
        <div className="section-heading">
          <div className="eyebrow">01 / THE BIGGER PICTURE</div>
          <h2>
            Not just another
            <br />
            <span className="muted-heading">collection of products.</span>
          </h2>
        </div>

        <div className="intro-bottom">
          <p>
            AI and Web3 are opening new ways to create, work and solve
            problems. But useful innovation needs more than technology.
            It needs people who can learn, build, test ideas and share
            knowledge.
          </p>
          <p>
            PHORVA is being shaped around that idea: a connected ecosystem
            where community, intelligent products and collaboration can
            support one another as the project develops.
          </p>
        </div>
      </section>

      <section className="layers-section section-wrap">
        <div className="layers-top">
          <div>
            <div className="eyebrow">02 / THE PHORVA ARCHITECTURE</div>
            <h2>
              Different roles.
              <br />
              <span className="muted-heading">One connected direction.</span>
            </h2>
          </div>
          <p>
            Each part of PHORVA has a purpose — from the people who shape
            ideas to the products being developed and the environments
            intended to help improve them.
          </p>
        </div>

        <div className="layer-list">
          {layers.map((layer) => (
            <article className="layer-row" key={layer.number}>
              <span className="layer-number"><span className="icon-tile icon-sm">{layerIcons[layer.number]}</span>{layer.number}</span>
              <div className="layer-name">
                <span>{layer.tag}</span>
                <h3>{layer.name}</h3>
              </div>
              <p>{layer.description}</p>
              <span className="layer-arrow">↗</span>
            </article>
          ))}
        </div>
        <div className="architecture-note">
          <span className="status-dot" />
          An evolving ecosystem — some components are still being developed.
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-wrap">
          <div className="products-heading">
            <div>
              <div className="eyebrow">03 / PRODUCTS IN DEVELOPMENT</div>
              <h2>
                Technology with
                <br />
                <span className="muted-heading">a purpose.</span>
              </h2>
            </div>
            <p>
              PHORVA's product direction explores different ways intelligent
              technology can be useful — from trading and opportunity
              discovery to collective decision intelligence.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <div className="product-card-top">
                  <span>{product.number} / PHORVA PRODUCT</span>
                  <span className="product-symbol">↗</span>
                </div>
                <div className="icon-tile">{productIcons[product.number]}</div>
                <div className="product-type">{product.type}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-audience">{product.audience}</div>
                <ul className="product-features">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="product-card-bottom">
                  <span className="development-dot" />
                  {product.status}
                </div>
                <a className="product-detail-link" href={product.href}>
                  Discover {product.name} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="forge-section section-wrap" id="builders">
        <div className="forge-visual">
          <div className="forge-grid" />
          <div className="forge-symbol">F<span>✳</span></div>
          <div className="forge-caption">LEARN → EXPERIMENT → COLLABORATE</div>
        </div>
        <div className="forge-copy">
          <div className="eyebrow">04 / THE PEOPLE BEHIND THE IDEAS</div>
          <h2>
            Innovation is
            <br />
            better when
            <br />
            <span className="gradient-text">shared.</span>
          </h2>
          <p>
            PHORVA FORGE is the community and builder environment at the
            heart of the ecosystem. It is intended for beginners,
            experienced developers, creators and anyone curious about
            technology.
          </p>
          <p>
            Learn together, take on collaborative challenges, exchange
            feedback and give your ideas room to grow.
          </p>
          <a className="text-link" href="/forge">
            Explore PHORVA FORGE <span>→</span>
          </a>
        </div>
      </section>

      <section className="audience-section section-wrap">
        <div className="audience-heading">
          <div className="eyebrow">05 / FIND YOUR PLACE</div>
          <h2>
            There is more
            <br />
            <span className="muted-heading">than one way to contribute.</span>
          </h2>
          <p>
            You do not need to arrive as an expert. Start where you are
            and find a way to take part.
          </p>
        </div>
        <div className="audience-grid">
          {audiences.map((item) => (
            <article className="audience-card" key={item.number}>
              <span>{audienceIcons[item.number]}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testing-section section-wrap">
        <div>
          <div className="eyebrow">06 / FROM EXPERIMENT TO IMPROVEMENT</div>
          <h2>
            Build it.
            <br />
            Test it.
            <br />
            <span className="muted-heading">Make it better.</span>
          </h2>
        </div>
        <div className="testing-copy">
          <p>
            Useful AI products need thoughtful development and meaningful
            feedback. Testing can help reveal what works, what needs
            improvement and what should be reconsidered.
          </p>
          <p>
            PHORVA is working toward a collaborative testing environment
            where product teams and community participants can contribute
            responsibly, with appropriate permissions and privacy
            safeguards.
          </p>
          <a className="text-link" href="/docs">
            Read the ecosystem documentation <span>→</span>
          </a>
        </div>
      </section>

      <section className="loop-section section-wrap">
        <div className="loop-heading">
          <div className="eyebrow">THE PHORVA LOOP</div>
          <h2>
            How the ecosystem is meant
            <br />
            <span className="gradient-text">to work together.</span>
          </h2>
        </div>
        <div className="loop-grid">
          {loopSteps.map((step) => (
            <article className="loop-card" key={step.number}>
              <div className="loop-card-top">
                <span className="loop-number"><span className="icon-tile icon-sm">{loopIcons[step.number]}</span>{step.number}</span>
                {step.planned && <span className="loop-planned">PLANNED</span>}
              </div>
              <small>{step.tag}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="loop-return">↺ Feedback flows back into the community, and the cycle continues.</div>
      </section>

      <section className="community-section" id="community">
        <div className="community-inner section-wrap">
          <img className="community-mascot" src="/mascot.webp" alt="" />
          <div className="eyebrow">THE NEXT CHAPTER IS BUILT TOGETHER</div>
          <h2>
            Don't just watch
            <br />
            the future. <span>Take part.</span>
          </h2>
          <p>
            Bring your questions, your ideas or your experience. Meet
            people exploring AI and Web3, learn something new and help
            shape what PHORVA becomes.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://discord.gg/f58PmVGFJB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join PHORVA Discord ↗
            </a>
            <a
              className="button button-secondary"
              href="https://x.com/PhorvaGuard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow PHORVA on X ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <a className="brand" href="/">
              <span className="brand-mark"><img src="/logo.png" alt="PHORVA logo" /></span>
              <span>PHORVA<span className="brand-period">.</span></span>
            </a>
            <p>
              Build Intelligence. Connect Innovation. Shape What's Next.
            </p>
            <span className="footer-note">AN EMERGING AI & WEB3 ECOSYSTEM</span>
          </div>

          <div className="footer-links">
            <div>
              <h4>ECOSYSTEM</h4>
              <a href="#ecosystem">Overview</a>
              <a href="/forge">PHORVA FORGE</a>
              <a href="/about">About PHORVA</a>
            </div>
            <div>
              <h4>PRODUCTS</h4>
              <a href="/products/phorvatrade">PhorvaTrade</a>
              <a href="/products/phorvaagent">PhorvaAgent</a>
              <a href="/products/prophixy">Prophixy</a>
            </div>
            <div>
              <h4>RESOURCES</h4>
              <a href="/docs">Documentation</a>
              <a href="/docs/roadmap">Roadmap</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div>
              <h4>COMMUNITY</h4>
              <a href="https://x.com/PhorvaGuard" target="_blank" rel="noopener noreferrer">PHORVA on X ↗</a>
              <a href="https://discord.gg/f58PmVGFJB" target="_blank" rel="noopener noreferrer">PHORVA Discord ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2026 PHORVA. All rights reserved.</span>
          <span>BUILDING THE FUTURE, TOGETHER.</span>
        </div>
      </footer>
    </main>
  );
}
