import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import ScrollWords from '../components/ScrollWords.jsx'
import { SectionHead, ProductCard, Stat, CTA } from '../components/Bits.jsx'
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

/* ── Scroll progress bar ── */
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

/* ── Parallax hook ── */
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

const industries = [
  { ic: 'textile', h: 'Textiles', p: 'Reactive & acid dyes' },
  { ic: 'paint', h: 'Paints & Coatings', p: 'High-performance pigments' },
  { ic: 'drop', h: 'Inks', p: 'Printing & writing inks' },
  { ic: 'cube', h: 'Plastics', p: 'Polymer colorants' },
  { ic: 'beaker', h: 'Food & Cosmetics', p: 'Specialty certified dyes' },
]
const whys = [
  ['01','ISO-Aligned Quality','Every batch meets international quality standards. Rigorous in-house QC ensures consistent purity and grade across all products.'],
  ['02','Global Export Network','Serving customers in 10+ countries with full compliance to international shipping, documentation and regulatory requirements.'],
  ['03','Reliable Supply Chain','4+ branches across Gujarat ensure fast delivery and consistent stock availability, even for urgent bulk orders.'],
  ['04','Expert Technical Team','Our chemistry experts provide full technical support, TDS documentation and product customisation for specific industry needs.'],
  ['05','Competitive Pricing','Direct manufacturer pricing with no middlemen, bulk discounts and flexible payment terms for long-term partners.'],
  ['06','15+ Years of Trust','Established in 2010, over a decade of consistent delivery to 199+ clients has earned an unmatched industry reputation.'],
]
const steps = [
  ['search','01',"Define Customer's Needs"],['chart','02','Production & Determination'],
  ['shield','03','Strict Quality Control'],['box','04','Packing'],
  ['lock','05','Inspection & Delivery'],['wrench','06','After-Sales Service'],
]
const team = [
  { img: `${IMG}/2025/04/Untitled-design-2-1.png`, role: 'Managing Partner & Head of Operations', name: 'Sanjay Gupta', p: 'Founder and visionary behind Siddhivinayak. Deep expertise in chemical manufacturing with an uncompromising commitment to quality and excellence.' },
  { img: `${IMG}/2025/04/t1-2.jpeg`, role: 'Managing Partner — Production & Quality', name: 'Rajesh Gupta', p: 'Oversees operations, drives innovation and builds strong client relationships — streamlining production and expanding presence across major chemical markets.' },
  { img: `${IMG}/2025/07/WhatsApp-Image-2025-07-12-at-17.22.21-scaled-e1752321258968.jpeg`, role: 'Executive Director — Business Development', name: 'Yash Gupta', p: 'Drives growth strategy, global partnerships and market expansion with a data-driven approach, opening new export corridors and industry verticals.' },
]
const clientLogos = ['1','2','3','5','6','7','8','9-1','11-1','12-1','13','14-1','15']

export default function Home() {
  const splitParallaxRef = useRef(null)
  useParallax(splitParallaxRef, 0.08)

  return (
    <>
      <ScrollProgress />

      {/* ── HERO ── */}
      <section className="hero">
        <HeroBannerSlider />
        <svg className="mol" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice">
          <g stroke="rgba(212,154,16,.25)" strokeWidth="1.5" fill="none">
            <line x1="180" y1="120" x2="340" y2="220" /><line x1="340" y1="220" x2="300" y2="400" />
            <line x1="340" y1="220" x2="520" y2="180" /><line x1="1100" y1="600" x2="1260" y2="520" />
            <line x1="1260" y1="520" x2="1220" y2="340" /><line x1="1100" y1="600" x2="980" y2="660" />
          </g>
          <g fill="rgba(212,154,16,.30)">
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
              <Link className="btn btn--primary" to="/products">Explore Products <Icon name="arrow" size={17} stroke={2} /></Link>
              <Link className="btn btn--outline-light" to="/about">About the Company</Link>
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

      {/* ── WHO / WHAT / HOW ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Who We Are" title="Integrated dye intermediate solutions, end to end" text="Our high-quality organic compounds serve as essential building blocks for vibrant, long-lasting colorants across textiles, inks, coatings and beyond." />
          </Reveal>
          <div className="pillars">
            <Reveal className="pillar" fx="scale">
              <div className="ic"><Icon name="flask" size={28} /></div>
              <h3>Who We Are</h3>
              <p>A leading manufacturer and exporter of dye intermediates, founded in 2010 and built on a single principle — purity in every batch, without compromise.</p>
            </Reveal>
            <Reveal className="pillar" delay={1} fx="scale">
              <div className="ic"><Icon name="globe" size={28} /></div>
              <h3>What We Do</h3>
              <p>We produce reactive and acid dye intermediates — vinyl sulphones, naphthalene acids and specialty grades — supplied to industries in India and across 10+ countries.</p>
            </Reveal>
            <Reveal className="pillar" delay={2} fx="scale">
              <div className="ic"><Icon name="gear" size={28} /></div>
              <h3>How We Do It</h3>
              <p>Rigorous in-house QC, ISO-aligned processes and an expert chemistry team ensure consistent grade, full TDS documentation and reliable, on-time supply.</p>
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
              <p className="eyebrow">About Us</p>
              <ScrollWords
                text="Building blocks of colour, since 2010"
                className="head"
                style={{ marginTop: '18px' }}
              />
              <p className="lead" style={{ marginTop: '16px' }}>Siddhivinayak Dyes & Chemical Industries is a trusted manufacturer and exporter offering end-to-end dye intermediate solutions. Our organic compounds power vibrant, durable colorants for industries worldwide.</p>
              <div className="feat-grid">
                <div className="feat"><div className="fic"><Icon name="building" size={21} stroke={1.8} /></div><div><h4>Advanced Manufacturing</h4><p>State-of-the-art production unit</p></div></div>
                <div className="feat"><div className="fic"><Icon name="check" size={21} stroke={1.8} /></div><div><h4>Global Standards</h4><p>Compliant with international norms</p></div></div>
                <div className="feat"><div className="fic"><Icon name="truck" size={21} stroke={1.8} /></div><div><h4>Reliable Supply Chain</h4><p>On-time delivery, guaranteed</p></div></div>
                <div className="feat"><div className="fic"><Icon name="globe2" size={21} stroke={1.8} /></div><div><h4>Export Expertise</h4><p>Serving clients worldwide</p></div></div>
              </div>
              <Link className="btn btn--dark" style={{ marginTop: '32px' }} to="/about">Read More About Us <Icon name="arrow" size={17} stroke={2} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section">
        <div className="wrap">
          <Reveal fx="clip" className="sec-head" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', maxWidth:'none', flexWrap:'wrap', gap:'24px' }}>
            <div style={{ maxWidth: '560px' }}>
              <p className="eyebrow">Our Products</p>
              <h2 className="head" style={{ marginTop: '18px' }}>Dyestuff Division</h2>
              <p className="lead">Premium-grade dye intermediates for reactive and acid dye manufacturing across global markets.</p>
            </div>
            <Link className="btn btn--ghost" to="/products">View All Products <Icon name="arrow" size={17} stroke={2} /></Link>
          </Reveal>
          <Reveal fx="stagger" className="prod-grid">
            {PRODUCTS.slice(0, 6).map((p) => <ProductCard key={p.name} p={p} />)}
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

      {/* ── INDUSTRIES ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Industries We Serve" title="Powering colour across every sector" />
          </Reveal>
          <Reveal fx="stagger" className="ind-grid">
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

      {/* ── WHY CHOOSE US ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Why Choose Us" title="What sets us apart" />
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

      {/* ── SPECIALIZED SERVICES ── */}
      <section className="section section--aura">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="We Offer" title="Specialized Services" text="A professional team with deep export experience, a strict quality-control system and the flexibility to accept OEM orders. Every batch is tested before dispatch, with retained samples and third-party inspection available on request." />
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

      {/* ── LEADERSHIP ── */}
      <section className="section bg-paper2" id="leadership">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Leadership" title="Meet our experts" />
          </Reveal>
          <Reveal fx="stagger" className="team-grid">
            {team.map((m) => (
              <div className="member" key={m.name}>
                <div className="member__img">
                  {m.img ? <img src={m.img} alt={m.name} /> : <div className="member__ph">{m.initials}</div>}
                </div>
                <div className="member__b">
                  <div className="member__role">{m.role}</div>
                  <h3>{m.name}</h3>
                  <p>{m.p}</p>
                </div>
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

      <CTA
        title="Looking for bulk chemical supply?"
        text="Contact our team for pricing, samples, TDS documents and export inquiries. We respond within 24 hours."
        primary="Send Inquiry" primaryTo="/contact"
        secondary="WhatsApp Us" secondaryHref={COMPANY.whatsapp}
      />
    </>
  )
}
