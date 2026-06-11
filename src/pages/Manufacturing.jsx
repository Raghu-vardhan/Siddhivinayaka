import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { PageHero, SectionHead, Stat, CTA } from '../components/Bits.jsx'
import { IMG } from '../data/site.js'

const steps = [
  ['search','01',"Define Customer's Needs"],['chart','02','Production & Determination'],
  ['shield','03','Strict Quality Control'],['box','04','Packing'],
  ['lock','05','Inspection & Delivery'],['wrench','06','After-Sales Service'],
]
const vals = [
  ['check','Quality Control','Every batch is tested in-house against international standards before dispatch, with samples retained for client re-examination.'],
  ['grid','Modern Machinery','Process-controlled reactors and analytical equipment support consistent purity at production scale.'],
  ['chart','Production Capacity','Scalable output with stock availability that supports urgent bulk and recurring export orders.'],
  ['shield','Certifications','Processes aligned to international quality and compliance norms, with full documentation on request.'],
  ['factory','Reliable Logistics','A 6-branch network and export-ready documentation ensure on-time delivery across India and abroad.'],
  ['users','Technical Support','Our chemistry team provides TDS documentation, customisation and application guidance.'],
]

export default function Manufacturing() {
  return (
    <>
      <PageHero crumb="Manufacturing" title="Engineered for purity at every stage"
        text="A state-of-the-art production unit, disciplined quality control and a skilled technical team — the foundation behind every consistent batch we ship." />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media"><span className="frame"></span><img src={`${IMG}/2025/02/Shiddhivinayak-image-1-01.jpg`} alt="Manufacturing unit" /></Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Manufacturing Unit</p>
              <h2 className="head" style={{ marginTop: '18px' }}>Built for consistency and scale</h2>
              <p className="lead" style={{ marginTop: '16px' }}>Our advanced production facility is designed to deliver high-purity dye intermediates at reliable volumes — combining modern equipment with proven process control.</p>
              <p style={{ marginTop: '16px', color: 'var(--slate)' }}>From raw-material intake to finished-product dispatch, each stage is monitored to maintain the grade and purity our partners depend on, batch after batch.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal><SectionHead eyebrow="We Offer" title="Specialized Services" text="A professional team with deep export experience and a strict quality-control system. We test every batch before delivery, retain samples for re-examination, and can arrange third-party (SGS) inspection on request. OEM orders welcome." /></Reveal>
          <div className="process">
            <Reveal className="proc-steps">
              {steps.map(([ic, n, h]) => (
                <div className="proc-step" key={n}><div className="pic"><Icon name={ic} size={23} /></div><div><div className="pn">{n}</div><h4>{h}</h4></div></div>
              ))}
            </Reveal>
            <Reveal className="proc-media" delay={1}><img src="/assets/team.jpeg" alt="Specialized team" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Quality & Capability" title="Standards we never compromise" /></Reveal>
          <div className="val-grid">
            {vals.map(([ic, h, p], i) => (
              <Reveal className="val" delay={i % 3} key={h}><div className="ic"><Icon name={ic} size={26} /></div><h3>{h}</h3><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-teal section--tight">
        <div className="wrap"><div className="stats-band">
          <Stat label="Batch Testing"><Counter to={100} suffix="%" /></Stat>
          <Stat label="Product Grades" delay={1}><Counter to={10} suffix="+" /></Stat>
          <Stat label="Inquiry Response" delay={2}><Counter to={24} suffix="h" /></Stat>
          <Stat label="Operating Branches" delay={3}><Counter to={6} /></Stat>
        </div></div>
      </section>

      <CTA title="Want to see how we manufacture?" text="Request our capability profile, certifications or a technical discussion with our team."
        primary="Get in Touch" primaryTo="/contact" secondary="View Products" secondaryHref="/products" />
    </>
  )
}
