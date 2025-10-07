import bg from './assets/montech-icon.webp'
import './App.css'

export default function App() {
  return (
    <div className="site" style={{ '--bg': `url(${bg})` }}>
      {/* Background watermark */}
      <div className="bg-watermark" />

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#">
            <span className="brand-mark" />
            monTech <span className="brand-sub">Enterprise</span>
          </a>

          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact" className="btn btn--outline">Start a Project</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="glass hero-card">
              <h1>
                We design & build modern <em>web</em> and <em>mobile</em> products.
              </h1>
              <p className="lead">
                Boutique engineering studio crafting fast, elegant apps for the web,
                iOS, and Android—powered by robust APIs and cloud infra.
              </p>
              <div className="cta">
                <a href="mailto:lamontaddo85@gmail.com?subject=Project%20Inquiry%20—%20monTech" className="btn btn--gold">Start a Project</a>
                <a href="https://lamontaddo.com" target="_blank" rel="noreferrer" className="btn btn--ghost">View Portfolio</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">What we do</h2>
            <div className="grid">
              <Service
                title="Web Apps"
                desc="High-performance SPAs with React/Next.js, built for scale and SEO."
                icon={<IconWindow />}
              />
              <Service
                title="iOS & Android"
                desc="One codebase, native feel. React Native + modern tooling."
                icon={<IconMobile />}
              />
              <Service
                title="APIs & Cloud"
                desc="Node.js, GraphQL/REST, AWS architectures that are secure and resilient."
                icon={<IconCloud />}
              />
              <Service
                title="UI/UX Design"
                desc="Elegant interfaces, accessible by default, delightful in motion."
                icon={<IconDesign />}
              />
              <Service
                title="E-commerce"
                desc="Stripe integration, carts, subscriptions, and payment flows that convert."
                icon={<IconCart />}
              />
              <Service
                title="AI & Automation"
                desc="Integrations, assistants, and pipelines that save time and unlock value."
                icon={<IconSpark />}
              />
            </div>
          </div>
        </section>

        {/* Simple “work” anchor for now (you can expand later) */}
        <section id="work" className="section section--muted">
          <div className="container">
            <h2 className="section-title">Selected work</h2>
            <p className="muted">
              Ask to see live demos—barber booking ecosystem, chat platforms, and marketplace apps.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container contact">
            <h2 className="section-title">Let’s build</h2>
            <p className="lead muted">
              Tell us about your idea. We’ll scope, design, and ship with care.
            </p>
            <a
              href="mailto:lamontaddo85@gmail.com?subject=Project%20Inquiry%20—%20monTech"
              className="btn btn--gold btn--lg"
            >
              Email monTech
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="muted">© {new Date().getFullYear()} monTech Enterprise</span>
          <div className="footer-links">
            <a href="https://lamontaddo.com" target="_blank" rel="noreferrer">Portfolio</a>
            <a href="mailto:lamontaddo85@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* --- Small service card component --- */
function Service({ title, desc, icon }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
    </div>
  )
}

/* --- Minimal inline SVG icons (no external deps) --- */
function IconWindow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="7" cy="7" r="1" />
      <circle cx="10" cy="7" r="1" />
    </svg>
  )
}
function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  )
}
function IconCloud() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.2A4 4 0 1 1 18 18H6z" />
    </svg>
  )
}
function IconDesign() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 3 21 9 12 15 3 9 12 3" />
      <path d="M21 15l-9 6-9-6" />
    </svg>
  )
}
function IconCart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
      <path d="M3 4h2l2.7 9.3A2 2 0 0 0 9.6 15H17a2 2 0 0 0 1.9-1.4L21 8H6" />
    </svg>
  )
}
function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" />
    </svg>
  )
}
