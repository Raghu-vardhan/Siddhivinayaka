import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import ScrollWords from '../components/ScrollWords.jsx'
import { SectionHead, Stat, CTA } from '../components/Bits.jsx'
import { PRODUCTS, IMG, COMPANY } from '../data/site.js'

/* ── Banner slider ── */
const SLIDES = [
  { img: 'https://siddhivinayakind80.com/wp-content/uploads/2025/04/1D9E9999-9B38-4B08-89E2-3503812C17FC-1.png', tag: 'Premium Quality' },
  { img: 'https://siddhivinayakind80.com/wp-content/uploads/2025/04/3910BD24-7BC0-42B6-993C-B36F27A45260-2.png', tag: 'Global Exports' },
  { img: 'https://siddhivinayakind80.com/wp-content/uploads/2025/04/47C34FBB-687F-4E63-8426-FB06096DBBEB-1.png', tag: 'Advanced Manufacturing' },
  { img: 'https://siddhivinayakind80.com/wp-content/uploads/2025/04/7C983B9D-2B83-4E64-934D-B4A566B97173-1.png', tag: 'Trusted Since 2010' },
]

function HeroBannerSlider() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const go = (idx) => setActive((idx + SLIDES.length) % SLIDES.length)
  useEffect(() => {
    timerRef.current = setInterval(() => setActive(i => (i + 1) % SLIDES.length), 4500)
    return () => clearInterval(timerRef.current)
  }, [])
  const handleDot = (i) => {
    clearInterval(timerRef.current)
    setActive(i)
    timerRef.current = setInterval(() => setActive(n => (n + 1) % SLIDES.length), 4500)
  }
  return (
    <div className="hs">
      {SLIDES.map((s, i) => (
        <div key={i} className={`hs__slide${i === active ? ' hs__slide--active' : ''}`}>
          <img src={s.img} alt={s.tag} />
          <span className="hs__tag">{s.tag}</span>
        </div>
      ))}
      <button className="hs__btn hs__btn--prev" onClick={() => go(active - 1)} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>
      </button>
      <button className="hs__btn hs__btn--next" onClick={() => go(active + 1)} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,6 15,12 9,18"/></svg>
      </button>
      <div className="hs__dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hs__dot${i === active ? ' hs__dot--active' : ''}`} onClick={() => handleDot(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
      <div className="hs__progress"><div className="hs__progress-bar" key={active} /></div>
      <div className="hero-badge">
        <div className="yr">15+</div>
        <div className="t">Years of trusted<br />chemical expertise</div>
      </div>
    </div>
  )
}

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="scroll-prog" aria-hidden="true">
      <div className="scroll-prog__bar" style={{ width: `${pct}%` }} />
    </div>
  )
}

function useParallax(ref, factor = 0.08) {
  useEffect(() => {
    const fn = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor
      ref.current.style.transform = `translateY(${offset.toFixed(1)}px)`
    }
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [ref, factor])
}

/* ── Data ── */
const tickerItems = ['Sulpho Vinyl Sulphone','Sulpho Tobias Acid','Sulfo OAVS','Vinyl Sulphone Ester','K-Acid','H. Acid','3,5 DABA','6 Acetyl OAPSA','6 NAPSA','3,5-Dinitrobenzoic Acid']

const whys = [
  ['01','Quality Products','Premium-grade dye intermediates with rigorous in-house QC. Every batch is tested for purity, grade and consistency — meeting international quality benchmarks.'],
  ['02','Manufacturing Expertise','Advanced production facilities and over 15 years of chemical manufacturing experience with a skilled technical team ensuring consistent batch quality.'],
  ['03','Reliable Supply Chain','Multi-branch operations across Gujarat ensure consistent stock availability and on-time delivery for bulk, regular and urgent export orders.'],
  ['04','Export Experience','Serving customers in 10+ countries with full compliance to international shipping documentation, regulatory requirements and export formalities.'],
  ['05','Customer Support','Dedicated technical team providing product selection guidance, sample supply, custom specification support and responsive after-sales service.'],
  ['06','Competitive Pricing','Direct manufacturer pricing with no middlemen — flexible bulk discounts and payment terms available for long-term business partners worldwide.'],
]

const steps = [
  ['search','01','Technical Consultation & Product Selection'],
  ['gear','02','Custom Manufacturing Solutions'],
  ['shield','03','Consistent Quality Assurance'],
  ['beaker','04','Product Testing & Sample Support'],
  ['box','05','Flexible Packaging Solutions'],
  ['truck','06','Global Logistics & Timely Delivery'],
  ['factory','07','Bulk Supply & Contract Manufacturing'],
  ['wrench','08','Reliable After-Sales Support'],
]

const categories = [
  {
    img: `${IMG}/2025/02/Sulpho-para-vinyl-sulphone-1.jpg`,
    name: 'Vinyl Sulphone Series',
    desc: 'Core reactive dye building blocks for textile dyeing',
    products: ['Sulpho Vinyl Sulphone', 'Sulfo OAVS', 'Vinyl Sulphone Ester'],
  },
  {
    img: `${IMG}/2025/04/5-1.png`,
    name: 'Naphthalene Acid Series',
    desc: 'High-purity acids for reactive and acid dye manufacturing',
    products: ['H. Acid', 'K-Acid', '6 NAPSA'],
  },
  {
    img: `${IMG}/2025/04/2-1.png`,
    name: 'Benzoic Acid Derivatives',
    desc: 'Precision intermediates for synthesis applications',
    products: ['3,5 DABA', '3,5-Dinitrobenzoic Acid'],
  },
  {
    img: `${IMG}/2025/04/6-ACETYL-OAPSA-1.png`,
    name: 'Specialty Grades',
    desc: 'Unique high-value specialty chemical intermediates',
    products: ['6 Acetyl OAPSA', 'Sulpho Tobias Acid'],
  },
]

const certs = [
  { ic: 'award', h: 'ISO 9001:2015', p: 'Certified quality management system ensuring consistent manufacturing processes and measurable, continuous quality improvement.' },
  { ic: 'shield', h: 'In-House QC Laboratory', p: 'Fully equipped quality control lab for batch testing, purity analysis and specification verification at every production stage.' },
  { ic: 'check', h: 'Certificate of Analysis', p: 'Detailed COA provided with every shipment — covering purity, grade, moisture content and full product specifications.' },
  { ic: 'globe', h: 'International Compliance', p: 'Products meet international regulatory standards enabling export compliance across 10+ countries in Asia, Europe and beyond.' },
  { ic: 'search', h: 'Third-Party Inspection', p: 'Independent third-party inspection and laboratory testing available on request for critical or large-volume export orders.' },
  { ic: 'star', h: 'Continuous Improvement', p: 'Ongoing process audits, equipment upgrades and quality reviews to maintain and continually raise our production standards.' },
]

const industries = [
  { ic: 'textile', h: 'Textile Industry', p: 'Reactive & acid dye intermediates for fabric dyeing and finishing' },
  { ic: 'doc', h: 'Paper Industry', p: 'Specialty chemical intermediates for paper manufacturing' },
  { ic: 'drop', h: 'Leather Industry', p: 'High-quality dye compounds for leather processing and finishing' },
  { ic: 'paint', h: 'Ink & Coating Industry', p: 'Pigment intermediates for printing inks and surface coatings' },
  { ic: 'flask', h: 'Chemical Manufacturing', p: 'Synthesis building blocks for downstream chemical production' },
  { ic: 'beaker', h: 'Specialty Chemicals', p: 'Custom-grade intermediates for specialty chemical applications' },
]

const team = [
  { img: `${IMG}/2025/04/Untitled-design-2-1.png`, role: 'Managing Partner & Head of Operations', name: 'Sanjay Gupta', p: 'Founder and visionary behind Siddhivinayak. Deep expertise in chemical manufacturing with an uncompromising commitment to quality and excellence.' },
  { img: `${IMG}/2025/04/t1-2.jpeg`, role: 'Managing Partner — Production & Quality', name: 'Rajesh Gupta', p: 'Oversees operations, drives innovation and builds strong client relationships — streamlining production and expanding presence across major chemical markets.' },
  { img: `${IMG}/2025/07/WhatsApp-Image-2025-07-12-at-17.22.21-scaled-e1752321258968.jpeg`, role: 'Executive Director — Business Development', name: 'Yash Gupta', p: 'Drives growth strategy, global partnerships and market expansion with a data-driven approach, opening new export corridors and industry verticals.' },
]

const clientLogos = ['1','2','3','5','6','7','8','9-1','11-1','12-1','13','14-1','15']

/* ── Homepage Inquiry Form ── */
function HomeInquiry() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset() }
  return (
    <section className="section bg-paper2" id="inquiry">
      <div className="wrap">
        <Reveal fx="clip" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionHead center eyebrow="Send Inquiry" title="Get in Touch with Our Team" text="Looking for quotations, samples or product information? Fill in the form and our team will respond within 24 hours." />
        </Reveal>
        <div className="contact-grid">
          <Reveal fx="left">
            <p className="eyebrow">Contact Details</p>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 700, marginTop: '18px', lineHeight: 1.1 }}>We're here to help</h3>
            <p className="lead" style={{ marginTop: '14px' }}>Reach out for bulk pricing, product samples, technical datasheets or export inquiries. Our team is ready to assist.</p>
            <div className="cinfo" style={{ marginTop: '32px' }}>
              <div className="cinfo-item">
                <div className="ic"><Icon name="pin" size={24} stroke={1.8} /></div>
                <div><h4>Head Office</h4><p>{COMPANY.address}</p></div>
              </div>
              <div className="cinfo-item">
                <div className="ic"><Icon name="phone" size={24} stroke={1.8} /></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href={`tel:${COMPANY.phoneRaw1}`}>{COMPANY.phone1}</a><br /><a href={`tel:${COMPANY.phoneRaw2}`}>{COMPANY.phone2}</a></p>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="ic"><Icon name="mail" size={24} stroke={1.8} /></div>
                <div><h4>Email</h4><p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p></div>
              </div>
            </div>
            <a className="btn btn--dark" href={COMPANY.whatsapp} style={{ marginTop: '28px' }}>
              WhatsApp Us <Icon name="arrow" size={17} stroke={2} />
            </a>
          </Reveal>
          <Reveal delay={1} as="form" className="form-card" onSubmit={submit}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                  <Icon name="check" size={30} stroke={2} />
                </div>
                <h3 style={{ marginBottom: '10px' }}>Inquiry Sent!</h3>
                <p style={{ color: 'var(--slate)', marginBottom: '24px' }}>Thank you! We'll respond to your inquiry within 24 hours.</p>
                <button type="button" className="btn btn--dark" onClick={() => setSent(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <div className="field"><label>Full Name *</label><input type="text" required placeholder="Your name" /></div>
                  <div className="field"><label>Company</label><input type="text" placeholder="Company name" /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>Email *</label><input type="email" required placeholder="you@email.com" /></div>
                  <div className="field"><label>Phone</label><input type="tel" placeholder="+91" /></div>
                </div>
                <div className="field">
                  <label>Product of Interest</label>
                  <select>
                    <option value="">Select a product...</option>
                    <option>Sulpho Vinyl Sulphone</option>
                    <option>Sulpho Tobias Acid</option>
                    <option>Sulfo OAVS</option>
                    <option>Vinyl Sulphone Ester</option>
                    <option>H. Acid</option>
                    <option>K-Acid</option>
                    <option>3,5 DABA</option>
                    <option>6 Acetyl OAPSA</option>
                    <option>6 NAPSA</option>
                    <option>3,5-Dinitrobenzoic Acid</option>
                    <option>Other / Multiple Products</option>
                  </select>
                </div>
                <div className="field">
                  <label>Message *</label>
                  <textarea required placeholder="Describe your requirement, quantity needed, delivery timeline and any specific grade requirements..." />
                </div>
                <button className="btn btn--primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Inquiry <Icon name="arrow" size={17} stroke={2} />
                </button>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const splitParallaxRef = useRef(null)
  useParallax(splitParallaxRef, 0.08)

  return (
    <>
      <ScrollProgress />

      {/* ── 1. MAIN BANNER ── */}
      <section className="hero">
        <HeroBannerSlider />
        <svg className="mol" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(43,185,169,.25)" strokeWidth="1.5" fill="none">
            <line x1="180" y1="120" x2="340" y2="220" /><line x1="340" y1="220" x2="300" y2="400" />
            <line x1="340" y1="220" x2="520" y2="180" /><line x1="1100" y1="600" x2="1260" y2="520" />
            <line x1="1260" y1="520" x2="1220" y2="340" /><line x1="1100" y1="600" x2="980" y2="660" />
          </g>
          <g fill="rgba(43,185,169,.30)">
            <circle cx="180" cy="120" r="9" /><circle cx="340" cy="220" r="13" /><circle cx="300" cy="400" r="8" />
            <circle cx="520" cy="180" r="10" /><circle cx="1100" cy="600" r="12" /><circle cx="1260" cy="520" r="9" />
            <circle cx="1220" cy="340" r="8" /><circle cx="980" cy="660" r="10" />
          </g>
        </svg>
        <div className="wrap">
          <Reveal className="hero-copy">
            <p className="eyebrow">India's Premier Dye Intermediate Manufacturer</p>
            <h1 className="display" style={{ marginTop: '22px' }}>Powering <em>Colour</em><br />& Chemistry<br />Worldwide</h1>
            <p className="lead" style={{ marginTop: '24px' }}>Manufacturer and exporter of premium dye intermediates, reactive dyes and specialty chemicals — engineered for purity, consistency and trust since 2010.</p>
            <div className="hero-actions">
              <Link className="btn btn--primary" to="/products">View Products <Icon name="arrow" size={17} stroke={2} /></Link>
              <Link className="btn btn--outline-light" to="/contact">Send Inquiry</Link>
            </div>
            <div className="hero-stats">
              <div><div className="num">2010</div><div className="lbl">Established</div></div>
              <div><div className="num">10+</div><div className="lbl">Export Countries</div></div>
              <div><div className="num">199+</div><div className="lbl">Clients Served</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* ── 2. COMPANY OVERVIEW ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Company Overview" title="Integrated chemical solutions, built on 15 years of trust" text="Siddhivinayak Dyes & Chemical Industries is a leading manufacturer and exporter of premium dye intermediates and specialty chemicals, serving industries across India and 10+ countries worldwide." />
          </Reveal>
          <div className="pillars">
            <Reveal className="pillar" fx="scale">
              <div className="ic"><Icon name="clock" size={28} /></div>
              <h3>15+ Years of Experience</h3>
              <p>Founded in 2010, Siddhivinayak brings over 15 years of deep expertise in dye intermediate manufacturing — with a track record of consistent quality, reliable supply and trusted partnerships worldwide.</p>
            </Reveal>
            <Reveal className="pillar" delay={1} fx="scale">
              <div className="ic"><Icon name="building" size={28} /></div>
              <h3>Manufacturing Capabilities</h3>
              <p>State-of-the-art production facilities in Ahmedabad with advanced manufacturing processes, a skilled technical workforce and rigorous in-house quality control at every production stage.</p>
            </Reveal>
            <Reveal className="pillar" delay={2} fx="scale">
              <div className="ic"><Icon name="globe2" size={28} /></div>
              <h3>Global Presence</h3>
              <p>Exporting premium-grade dye intermediates to 10+ countries across Asia, Europe and beyond — with 199+ satisfied clients and a strong, growing international business network.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <div className="split">
            <div ref={splitParallaxRef} className="split-parallax">
              <Reveal fx="left" className="split-media">
                <span className="frame"></span>
                <img src={`${IMG}/2025/02/Shiddhivinayak-image-1-01.jpg`} alt="Production facility" />
              </Reveal>
            </div>
            <Reveal delay={1} fx="right">
              <p className="eyebrow">About the Company</p>
              <ScrollWords
                text="Building blocks of colour, since 2010"
                className="head"
                style={{ marginTop: '18px' }}
              />
              <p className="lead" style={{ marginTop: '16px' }}>Siddhivinayak Dyes & Chemical Industries is a trusted manufacturer and exporter of premium dye intermediates and specialty chemicals. Our high-quality organic compounds serve as essential building blocks for vibrant, durable colorants across multiple industries worldwide.</p>
              <p style={{ marginTop: '12px', color: 'var(--slate)' }}>From our manufacturing base in Ahmedabad, we serve 199+ clients across India and 10+ countries — built entirely on consistency, transparency and long-term trust.</p>
              <div className="feat-grid">
                <div className="feat"><div className="fic"><Icon name="building" size={21} stroke={1.8} /></div><div><h4>Advanced Manufacturing</h4><p>State-of-the-art production unit in Ahmedabad</p></div></div>
                <div className="feat"><div className="fic"><Icon name="check" size={21} stroke={1.8} /></div><div><h4>International Standards</h4><p>ISO-aligned quality management processes</p></div></div>
                <div className="feat"><div className="fic"><Icon name="truck" size={21} stroke={1.8} /></div><div><h4>Reliable Supply Chain</h4><p>4+ Gujarat branches for on-time delivery</p></div></div>
                <div className="feat"><div className="fic"><Icon name="globe2" size={21} stroke={1.8} /></div><div><h4>Export Expertise</h4><p>Serving clients across 10+ countries</p></div></div>
              </div>
              <Link className="btn btn--dark" style={{ marginTop: '32px' }} to="/about">Read More About Us <Icon name="arrow" size={17} stroke={2} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Why Choose Us" title="Our key strengths" text="From premium product quality to reliable supply and responsive customer support — here is what sets Siddhivinayak apart as your trusted chemical manufacturing partner." />
          </Reveal>
          <Reveal fx="stagger" className="why-grid">
            {whys.map(([no, h, p]) => (
              <div className="why" key={no}>
                <div className="no">{no}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 4. SPECIALIZED SERVICES ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Our Services" title="Specialized Services" text="We support our customers throughout the entire supply process — from technical consultation and custom manufacturing to quality assurance, packaging, logistics and after-sales support." />
          </Reveal>
          <div className="process">
            <Reveal fx="left" className="proc-steps">
              {steps.map(([ic, n, h]) => (
                <div className="proc-step" key={n}>
                  <div className="pic"><Icon name={ic} size={23} /></div>
                  <div><div className="pn">{n}</div><h4>{h}</h4></div>
                </div>
              ))}
            </Reveal>
            <Reveal fx="right" className="proc-media" delay={1}>
              <img src="/assets/team.jpeg" alt="Our specialized team and facility" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT CATEGORIES ── */}
      <section className="section">
        <div className="wrap">
          <Reveal fx="clip" className="sec-head" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', maxWidth:'none', flexWrap:'wrap', gap:'24px' }}>
            <div style={{ maxWidth: '560px' }}>
              <p className="eyebrow">Our Products</p>
              <h2 className="head" style={{ marginTop: '18px' }}>Product Categories</h2>
              <p className="lead">Explore our range of premium-grade dye intermediates and specialty chemicals, organised by product family for easy navigation.</p>
            </div>
            <Link className="btn btn--ghost" to="/products">View All Products <Icon name="arrow" size={17} stroke={2} /></Link>
          </Reveal>
          <Reveal fx="stagger" className="cat-grid">
            {categories.map((cat) => (
              <div className="cat" key={cat.name}>
                <div className="cat__img">
                  <img src={cat.img} alt={cat.name} loading="lazy" />
                </div>
                <div className="cat__body">
                  <h3>{cat.name}</h3>
                  <p className="cat__desc">{cat.desc}</p>
                  <ul className="cat__list">
                    {cat.products.map((p) => (
                      <li key={p}><Icon name="check" size={14} stroke={2.5} />{p}</li>
                    ))}
                  </ul>
                  <Link className="cat__link" to="/products">View Products <Icon name="arrow" size={15} stroke={2} /></Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section--tight bg-teal">
        <div className="wrap">
          <div className="stats-band">
            <Stat label="Years of Expertise"><Counter to={15} suffix="+" /></Stat>
            <Stat label="Satisfied Customers" delay={1}><Counter to={199} suffix="+" /></Stat>
            <Stat label="Product Range" delay={2}><Counter to={10} suffix="+" /></Stat>
            <Stat label="Domestic Branches" delay={3}><Counter to={4} suffix="+" /></Stat>
          </div>
        </div>
      </section>

      {/* ── 6. QUALITY & CERTIFICATIONS ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Quality & Certifications" title="Our commitment to quality standards" text="We maintain strict quality assurance at every stage of production, backed by certifications and internationally recognised processes that build confidence with buyers worldwide." />
          </Reveal>
          <Reveal fx="stagger" className="cert-grid">
            {certs.map((c) => (
              <div className="cert" key={c.h}>
                <div className="ic"><Icon name={c.ic} size={26} /></div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 7. INDUSTRIES WE SERVE ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Industries We Serve" title="Powering colour across every sector" text="Our dye intermediates and specialty chemicals serve a wide range of industries — wherever colour, chemistry and quality matter most." />
          </Reveal>
          <Reveal fx="stagger" className="ind-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {industries.map((it) => (
              <div className="ind" key={it.h}>
                <div className="ic"><Icon name={it.ic} size={27} /></div>
                <h4>{it.h}</h4>
                <p>{it.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section--tight">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Our Customers" title="199+ companies trust Siddhivinayak" style={{ marginBottom: '40px' }} />
          </Reveal>
        </div>
        <Reveal fx="blur" className="logos">
          <div className="logos__track">
            {[...clientLogos, ...clientLogos.slice(0, 6)].map((n, i) => (
              <img key={i} src={`${IMG}/2025/04/${n}.png`} alt="Client" />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 8. INQUIRY SECTION ── */}
      <HomeInquiry />
    </>
  )
}
