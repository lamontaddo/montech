import bg from './assets/montech-icon.webp'
import './App.css'

// --- Gallery: prefer src/assets/projects, also include /public/img1..img7 ---

// 1) Load from src/assets/projects (case-safe, stable order)
const srcEntries = Object.entries(
  import.meta.glob('./assets/projects/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,gif,GIF}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).sort(([a], [b]) => a.localeCompare(b))

const fromSrc = srcEntries.map(([, url]) => url)

// 2) Also check public/img1.png ... public/img7.png (fixed order)
const fromPublic = Array.from({ length: 7 }, (_, i) => `/img${i + 1}.png`)

// 3) Merge + de-dupe (case-insensitive) + cap to 7
const merged = [...fromSrc, ...fromPublic]
const seen = new Set()
const gallery = merged.filter((u) => {
  if (!u) return false
  const key = u.toLowerCase()
  if (seen.has(key)) return false
  seen.add(key)
  return true
}).slice(0, 7)

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
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn btn--outline">Start a Project</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="glass hero-card">
              <div className="hero-topline">
              </div>
              <h1>
                We design & build modern <em>web</em> and <em>mobile</em> products.
              </h1>
              <p className="lead">
                Full-stack delivery—frontend, backend, database, and AWS (S3 for storage)—
                shipped with care and performance in mind.
              </p>
              <div className="cta">
                <a href="#pricing" className="btn btn--gold">See what’s included</a>
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

        {/* Pricing */}
        <section id="pricing" className="section">
          <div className="container">
            <h2 className="section-title">Pricing</h2>

            <div className="pricing">
              <div className="card price-card">
                <div className="price-head">
                  <h3>Studio Build</h3>
                  <div className="price">
                    <span className="amount">$30k</span>
                    <span className="term">fixed</span>
                  </div>
                  <p className="muted">Everything you need to launch v1 with confidence.</p>
                </div>

                <ul className="included">
                  <li>Frontend: React/Next.js web app</li>
                  <li>Mobile: React Native for iOS & Android</li>
                  <li>Backend APIs: Node.js (REST/GraphQL)</li>
                  <li>Database: MongoDB (or Postgres)</li>
                  <li>Cloud: AWS setup with S3 for storage</li>
                  <li>Auth, payments (Stripe), email, analytics</li>
                  <li>CI/CD, envs, logging, error monitoring</li>
                  <li>Accessibility, performance pass, SEO basics</li>
                  <li><strong>Deployment included</strong> (GitHub Pages/Vercel for static, or AWS EC2/S3+CloudFront for full stack)</li>
                  <li>Documentation + handoff</li>
                  <li>30-day launch warranty</li>
                </ul>

                <div className="pill-row">
                  <span className="pill">Timeline: ~3-6 months</span>
                  <span className="pill">Fixed scope v1</span>
                </div>

                <a
                  href="mailto:lamontaddo85@gmail.com?subject=Project%20Inquiry%20—%20monTech%20($30k%20Studio%20Build)"
                  className="btn btn--gold btn--lg"
                >
                  Start at $30k
                </a>
              </div>

              <div className="card addons-card">
                <h3>Add-ons (optional)</h3>
                <ul className="included">
                  <li>Branding & design system <span className="muted">+ $5k</span></li>
                  <li>AI features / assistants <span className="muted">+ $7.5k+</span></li>
                  <li>Subscriptions / marketplaces <span className="muted">+ $6k+</span></li>
                  <li>Multi-tenant / orgs & roles <span className="muted">+ $10k+</span></li>
                  <li>Advanced analytics / dashboards <span className="muted">+ $4k+</span></li>
                </ul>

                <h4 style={{ marginTop: '1rem' }}>Care plans</h4>
                <ul className="included">
                  <li>Lite · <span className="muted">$1.5k/mo</span> · bug fixes & small tweaks</li>
                  <li>Standard · <span className="muted">$3k/mo</span> · feature support & ops</li>
                  <li>Scale · <span className="muted">$6k/mo</span> · roadmap & growth</li>
                </ul>
              </div>
            </div>

            <div className="faq glass">
              <details>
                <summary>What exactly is included in the $30k?</summary>
                <p>
                  A complete v1: web + mobile clients, secure APIs, database, AWS setup (including S3),
                  auth, payments, basic analytics, CI/CD, deployment, documentation, and a 30-day post-launch warranty.
                </p>
              </details>
              <details>
                <summary>Where do you deploy?</summary>
                <p>
                  We handle deployment to your choice of host: GitHub Pages or Vercel for static SPAs,
                  and AWS (EC2 or S3+CloudFront) for full stacks—plus basic DNS and HTTPS setup.
                </p>
              </details>
              <details>
                <summary>How do we handle scope?</summary>
                <p>
                  We lock a clear feature list before kickoff. Anything new goes into a mini-scope or a care plan.
                </p>
              </details>
              <details>
                <summary>Payment terms?</summary>
                <p>
                  50% to start, 25% mid-build, 25% on delivery. Alternative schedules available for longer roadmaps.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section section--muted">
          <div className="container">
            <h2 className="section-title">Selected work</h2>
            <p className="muted">
              Ask to see live demos—barber booking ecosystem, chat platforms, and marketplace apps.
            </p>

            {/* Images grid (7 max) */}
            <div className="projects-grid images-only" style={{ marginTop: '1rem' }}>
              {gallery.map((src) => (
                <div
                  key={src}
                  className="project-tile"
                  role="img"
                  aria-label="Project image"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container contact">
            <h2 className="section-title">Let’s build</h2>
            <p className="lead muted">
              Tell us about your idea. We’ll scope, design, deploy, and ship with care.
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

/* --- Minimal inline SVG icons --- */
function IconWindow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <circle cx="7" cy="7" r="1" /><circle cx="10" cy="7" r="1" />
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
      <path d="M6 18a4 4 0 1 1 0-8 5 5 0 0 1 9.6-1.2A4 4 0 1 1 18 18H6z" />
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
      <circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" />
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
