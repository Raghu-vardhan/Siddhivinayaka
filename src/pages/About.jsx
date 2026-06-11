import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { PageHero, SectionHead, Stat, CTA } from '../components/Bits.jsx'
import { IMG } from '../data/site.js'

const timeline = [
  ['2010','The Beginning','Siddhivinayak is established in Ahmedabad with a focused commitment to high-purity dye intermediates.'],
  ['2014','Expanding Range','Product portfolio broadens into vinyl sulphones and naphthalene-based acids for reactive and acid dyes.'],
  ['2018','Going Global','Export operations begin, reaching clients across multiple countries with full regulatory compliance.'],
  ['2022','Branch Network','Regional presence grows across Gujarat — Baroda, Surat, Rajkot, Anand and Gandhidham.'],
  ['Today','199+ Clients & Counting','A trusted partner to industries worldwide, with specialty grades and continuous product innovation.'],
]
const team = [
  { img: `${IMG}/2025/04/Untitled-design-2-1.png`, role: 'Managing Partner & Head of Operations', name: 'Sanjay Gupta', p: 'Founder and visionary behind Siddhivinayak, with deep expertise in chemical manufacturing and a commitment to quality.' },
  { img: `${IMG}/2025/04/t1-2.jpeg`, role: 'Managing Partner — Production & Quality', name: 'Rajesh Gupta', p: 'Oversees operations, drives innovation and expanded the company\u2019s footprint across major chemical markets.' },
  { img: `${IMG}/2025/07/WhatsApp-Image-2025-07-12-at-17.22.21-scaled-e1752321258968.jpeg`, role: 'Executive Director — Business Development', name: 'Yash Gupta', p: 'Drives growth strategy, global partnerships and market expansion, opening new export corridors and verticals.' },
]

export default function About() {
  return (
    <>
      <PageHero crumb="About Us" title="Building the chemistry behind colour"
        text="Siddhivinayak Dyes & Chemical Industries is a trusted manufacturer and exporter of dye intermediates — delivering purity, quality and legacy in every batch since 2010." />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media"><span className="frame"></span><img src={`${IMG}/2025/02/Shiddhivinayak-image-1-01.jpg`} alt="Facility" /></Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Our Story</p>
              <h2 className="head" style={{ marginTop: '18px' }}>Integrated dye intermediate solutions since 2010</h2>
              <p className="lead" style={{ marginTop: '16px' }}>We are a leading manufacturer and exporter of dye intermediates offering end-to-end global solutions. Our high-quality organic compounds serve as the essential building blocks for vibrant, long-lasting colorants across multiple industries.</p>
              <p style={{ marginTop: '16px', color: 'var(--slate)' }}>From a single production focus in Ahmedabad, we have grown into a multi-branch operation serving 199+ clients in India and more than ten countries — earning a reputation built entirely on consistency, transparency and trust.</p>
              <div className="feat-grid">
                <div className="feat"><div className="fic"><Icon name="check" size={21} stroke={1.8} /></div><div><h4>Purity First</h4><p>Consistent grade, every batch</p></div></div>
                <div className="feat"><div className="fic"><Icon name="globe2" size={21} stroke={1.8} /></div><div><h4>Global Reach</h4><p>Exporting to 10+ countries</p></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper2">
        <div className="wrap">
          <div className="split split--media-left">
            <Reveal className="split-media"><span className="frame"></span><img src={`${IMG}/2025/04/Untitled-design-2-1.png`} alt="Founder Sanjay Gupta" /></Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Founder's Story</p>
              <h2 className="head" style={{ marginTop: '18px' }}>A vision rooted in quality</h2>
              <p className="lead" style={{ marginTop: '16px' }}>Founded by Sanjay Gupta, Siddhivinayak began with a simple conviction — that the chemistry behind colour deserves the same rigour as the colour itself.</p>
              <p style={{ marginTop: '16px', color: 'var(--slate)' }}>With deep expertise in chemical manufacturing and an uncompromising commitment to excellence, our leadership built a company where every process, every test and every shipment reflects that founding belief. More than a decade later, that discipline remains the heart of everything we make.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="val-grid">
            <Reveal className="val"><div className="ic"><Icon name="clock" size={26} /></div><h3>Our Vision</h3><p>To be the most trusted name in dye intermediates — recognised globally for purity, reliability and responsible chemistry.</p></Reveal>
            <Reveal className="val" delay={1}><div className="ic"><Icon name="shield" size={26} /></div><h3>Our Mission</h3><p>To manufacture consistently high-grade intermediates, supported by expert technical service and on-time delivery, for partners worldwide.</p></Reveal>
            <Reveal className="val" delay={2}><div className="ic"><Icon name="star" size={26} /></div><h3>Our Values</h3><p>Purity, quality, trust and legacy — four principles that guide how we work, how we grow and how we serve.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Our Journey" title="A decade of steady growth" /></Reveal>
          <div className="timeline">
            {timeline.map(([y, h, p]) => (
              <Reveal className="tl-item" key={y}>
                <div className="tl-year">{y}</div>
                <div className="tl-body"><h4>{h}</h4><p>{p}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Leadership" title="Meet our experts" /></Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal className="member" delay={i} key={m.name}>
                <div className="member__img">{m.img ? <img src={m.img} alt={m.name} /> : <div className="member__ph">{m.initials}</div>}</div>
                <div className="member__b"><div className="member__role">{m.role}</div><h3>{m.name}</h3><p>{m.p}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-teal section--tight">
        <div className="wrap"><div className="stats-band">
          <Stat label="Years of Expertise"><Counter to={15} suffix="+" /></Stat>
          <Stat label="Satisfied Clients" delay={1}><Counter to={199} suffix="+" /></Stat>
          <Stat label="Export Countries" delay={2}><Counter to={10} suffix="+" /></Stat>
          <Stat label="Branches in Gujarat" delay={3}><Counter to={6} /></Stat>
        </div></div>
      </section>

      <CTA title="Partner with a manufacturer you can trust" text="Reach out for company credentials, certifications or a tour of our capabilities."
        primary="Contact Us" primaryTo="/contact" secondary="View Products" secondaryHref="/products" />
    </>
  )
}
