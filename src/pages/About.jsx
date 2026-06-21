import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { PageHero, SectionHead, Stat } from '../components/Bits.jsx'
import { IMG } from '../data/site.js'

const timeline = [
  ['2010','The Beginning','Siddhivinayak is established in Ahmedabad, Gujarat, with a focused commitment to manufacturing high-purity dye intermediates for the textile and chemical industries.'],
  ['2014','Expanding Range','Product portfolio broadens into vinyl sulphones, naphthalene-based acids and specialty grades, serving reactive and acid dye manufacturers across India.'],
  ['2018','Going Global','Export operations commence, reaching clients across multiple countries with full regulatory compliance, international documentation and consistent product quality.'],
  ['2022','Branch Network','Regional presence grows across Gujarat — establishing branches in Baroda, Surat, Rajkot, Anand and Gandhidham for wider market coverage.'],
  ['Today','199+ Clients & Counting','A trusted global partner to the chemical and textile industries, with specialty grades, continuous product innovation and long-term business relationships.'],
]

const reach = [
  { ic: 'building', stat: '4+', label: 'Gujarat Branches', p: 'Operating from Ahmedabad, Baroda, Surat, Rajkot, Anand and Gandhidham — ensuring wide regional coverage and faster domestic deliveries.' },
  { ic: 'globe2', stat: '10+', label: 'Export Countries', p: 'Serving international clients across Asia, Europe and the Middle East with full regulatory compliance and professional documentation support.' },
  { ic: 'users', stat: '199+', label: 'Trusted Clients', p: 'A growing network of satisfied customers built on consistent quality, transparent pricing and reliable on-time supply since 2010.' },
  { ic: 'truck', stat: '15+', label: 'Years of Supply', p: 'Over 15 years of consistent product supply with a strong track record of meeting delivery timelines and maintaining customer commitments.' },
]

const mfgStrengths = [
  { ic: 'building', h: 'Modern Production Facilities', p: 'State-of-the-art manufacturing units with modern machinery, dedicated production lines and optimised plant layouts for efficient and consistent output.' },
  { ic: 'gear', h: 'Advanced Manufacturing Processes', p: 'Proven chemical synthesis processes with precise reaction control, yield optimisation and continuous monitoring at every stage of production.' },
  { ic: 'users', h: 'Skilled Technical Workforce', p: 'A team of experienced chemists, production engineers and quality control professionals ensuring technical excellence and consistent product grade.' },
  { ic: 'chart', h: 'Consistent Production Capabilities', p: 'Reliable production planning and capacity management to meet regular supply commitments and large-volume custom orders on schedule.' },
  { ic: 'shield', h: 'Operational Efficiency & Safety', p: 'Strict safety protocols, resource optimisation and waste reduction practices — ensuring a safe, efficient and responsible manufacturing environment.' },
]

const qualityPoints = [
  { ic: 'shield', h: 'Strict Quality Control Procedures', p: 'Rigorous quality checks conducted at every stage — from raw material procurement to final dispatch — to ensure consistent product grade and purity.' },
  { ic: 'beaker', h: 'In-House Testing & Inspection', p: 'Our fully equipped QC laboratory performs batch testing, spectroscopic analysis and purity verification for every production lot before release.' },
  { ic: 'check', h: 'Quality Assurance at Every Stage', p: 'Quality assurance is embedded across the entire production workflow — not just at final inspection — ensuring consistent standards throughout manufacturing.' },
  { ic: 'users', h: 'Compliance with Customer Specifications', p: 'Products manufactured to meet specific customer requirements, with custom grades, purity levels and packaging formats available on request.' },
  { ic: 'chart', h: 'Continuous Improvement Initiatives', p: 'Regular process audits, equipment calibration, team training and quality reviews ensure our standards continually improve over time.' },
  { ic: 'award', h: 'Certificate of Analysis', p: 'A comprehensive Certificate of Analysis is provided with every shipment, covering purity, grade, moisture content and full product specifications.' },
]

const infrastructure = [
  { ic: 'building', h: 'Production Units', p: 'Dedicated manufacturing units in Ahmedabad with optimised production lines for each product category, ensuring process integrity and consistent output.' },
  { ic: 'beaker', h: 'Quality Control Laboratory', p: 'In-house QC lab equipped for chemical analysis, purity testing and product characterisation — enabling rapid batch testing and release.' },
  { ic: 'box', h: 'Warehousing Facilities', p: 'Organised and well-maintained storage facilities for raw materials and finished goods, ensuring product integrity and ready stock availability.' },
  { ic: 'grid', h: 'Packaging Facilities', p: 'Dedicated packaging infrastructure for bulk and retail formats, including bags, drums and custom packaging per customer and export requirements.' },
  { ic: 'truck', h: 'Logistics & Dispatch', p: 'Streamlined logistics operations for timely domestic and international dispatch, with full documentation support for regulatory compliance and customs clearance.' },
]

const industries = [
  { ic: 'textile', h: 'Textile Industry', p: 'Reactive and acid dye intermediates for yarn, fabric and garment dyeing and finishing processes.' },
  { ic: 'doc', h: 'Paper Industry', p: 'Specialty chemical intermediates and dye compounds used in paper manufacturing and coating applications.' },
  { ic: 'drop', h: 'Leather Industry', p: 'High-quality dye intermediates for leather processing, finishing and colour development in tannery operations.' },
  { ic: 'paint', h: 'Ink & Coating Industry', p: 'Pigment intermediates and specialty compounds for printing inks, surface coatings and functional finishes.' },
  { ic: 'flask', h: 'Chemical Manufacturing', p: 'Synthesis intermediates and building blocks used by chemical manufacturers for downstream production.' },
  { ic: 'beaker', h: 'Specialty Chemical Applications', p: 'Custom-grade intermediates for high-value specialty applications in research, advanced materials and niche markets.' },
]

const sustainability = [
  { ic: 'leaf', h: 'Environmental Awareness', p: 'We continuously work to reduce our environmental impact through responsible sourcing, waste minimisation and cleaner production methods at every stage.' },
  { ic: 'shield', h: 'Safe Manufacturing Processes', p: 'Strict safety protocols and trained personnel ensure a safe manufacturing environment that protects employees, customers and the surrounding community.' },
  { ic: 'layers', h: 'Resource Optimisation', p: 'Efficient use of raw materials, energy and water through process improvements and technology upgrades — reducing both cost and environmental footprint.' },
  { ic: 'users', h: 'Employee Health & Safety', p: 'Comprehensive safety training, personal protective equipment and regular health monitoring for all manufacturing and operations team members.' },
  { ic: 'chart', h: 'Commitment to Sustainable Growth', p: 'Building a business that balances profitability with responsibility — investing in sustainable practices for long-term growth that benefits all stakeholders.' },
]

const team = [
  { img: `${IMG}/2025/04/Untitled-design-2-1.png`, role: 'Managing Partner & Head of Operations', name: 'Sanjay Gupta', p: 'Founder and visionary behind Siddhivinayak, with deep expertise in chemical manufacturing and a commitment to quality.' },
  { img: `${IMG}/2025/04/t1-2.jpeg`, role: 'Managing Partner — Production & Quality', name: 'Rajesh Gupta', p: 'Oversees operations, drives innovation and expanded the company\'s footprint across major chemical markets.' },
  { img: `${IMG}/2025/07/WhatsApp-Image-2025-07-12-at-17.22.21-scaled-e1752321258968.jpeg`, role: 'Executive Director — Business Development', name: 'Yash Gupta', p: 'Drives growth strategy, global partnerships and market expansion, opening new export corridors and verticals.' },
]

export default function About() {
  return (
    <>
      <PageHero crumb="About Us" title="Building the chemistry behind colour"
        text="Siddhivinayak Dyes & Chemical Industries is a trusted manufacturer and exporter of dye intermediates and specialty chemicals — delivering purity, quality and legacy in every batch since 2010." />

      {/* ── 2. ABOUT COMPANY ── */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-media"><span className="frame"></span><img src={`${IMG}/2025/02/Shiddhivinayak-image-1-01.jpg`} alt="Manufacturing facility" /></Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">About the Company</p>
              <h2 className="head" style={{ marginTop: '18px' }}>Integrated dye intermediate solutions since 2010</h2>
              <p className="lead" style={{ marginTop: '16px' }}>We are a leading manufacturer and exporter of premium dye intermediates and specialty chemicals, offering end-to-end solutions for the global chemical and textile industries. Our high-quality organic compounds serve as essential building blocks for vibrant, long-lasting colorants.</p>
              <p style={{ marginTop: '16px', color: 'var(--slate)' }}>From our manufacturing base in Ahmedabad, we have grown into a multi-branch operation serving 199+ clients across India and more than ten countries — earning a reputation built entirely on consistency, innovation and trust. Our commitment to quality, customer focus and responsible manufacturing drives everything we do.</p>
              <div className="feat-grid">
                <div className="feat"><div className="fic"><Icon name="check" size={21} stroke={1.8} /></div><div><h4>Quality First</h4><p>Consistent grade and purity in every batch</p></div></div>
                <div className="feat"><div className="fic"><Icon name="globe2" size={21} stroke={1.8} /></div><div><h4>Global Reach</h4><p>Exporting to 10+ countries worldwide</p></div></div>
                <div className="feat"><div className="fic"><Icon name="building" size={21} stroke={1.8} /></div><div><h4>Advanced Manufacturing</h4><p>Modern facilities with rigorous in-house QC</p></div></div>
                <div className="feat"><div className="fic"><Icon name="users" size={21} stroke={1.8} /></div><div><h4>Customer Focused</h4><p>199+ satisfied clients globally</p></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 1. MANAGING DIRECTOR'S MESSAGE ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <div className="split split--media-left">
            <Reveal className="split-media"><span className="frame"></span><img src={`${IMG}/2025/04/Untitled-design-2-1.png`} alt="Managing Director Sanjay Gupta" /></Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Managing Director's Message</p>
              <h2 className="head" style={{ marginTop: '18px' }}>A vision rooted in quality and long-term trust</h2>
              <blockquote className="md-quote">
                "When I founded Siddhivinayak, my conviction was simple — that the chemistry behind colour deserves the same rigour as the colour itself. Over 15 years, that belief has shaped every process, every product and every partnership we have built."
              </blockquote>
              <p style={{ marginTop: '18px', color: 'var(--slate)' }}>With deep expertise in chemical manufacturing and an uncompromising commitment to excellence, we have built a company where quality is not just an outcome — it is embedded in the process. Our customer-focused approach means we listen first, understand requirements deeply and deliver solutions that consistently exceed expectations.</p>
              <p style={{ marginTop: '12px', color: 'var(--slate)' }}>Our long-term business philosophy is founded on integrity, reliability and genuine partnerships. We do not chase transactions — we build relationships. That is why our customers return, grow with us and trust us with their most critical supply requirements.</p>
              <div className="md-sig" style={{ marginTop: '28px' }}>
                <div className="md-sig__name">Sanjay Gupta</div>
                <div className="md-sig__role">Managing Partner & Head of Operations, Siddhivinayak</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. OUR JOURNEY ── */}
      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Our Journey" title="A decade of steady growth" text="From a single product focus in 2010 to a multi-branch, multi-country operation today — our journey reflects a consistent commitment to quality, expansion and customer trust." /></Reveal>
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

      {/* ── 4. OUR REACH ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Our Reach" title="A strong and growing global presence" text="From our Gujarat manufacturing base, we serve customers across India and internationally — building long-term relationships and a reliable supply network on every front." />
          </Reveal>
          <Reveal fx="stagger" className="reach-grid">
            {reach.map((r) => (
              <div className="reach" key={r.label}>
                <div className="ic"><Icon name={r.ic} size={28} /></div>
                <div className="reach__stat">{r.stat}</div>
                <div className="reach__label">{r.label}</div>
                <p>{r.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 5A. MANUFACTURING STRENGTHS ── */}
      <section className="section">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Manufacturing Strengths" title="Our production advantage" text="Our manufacturing capabilities are built on modern infrastructure, proven processes and a team dedicated to operational excellence — ensuring consistent, high-quality output at scale." />
          </Reveal>
          <Reveal fx="stagger" className="val-grid">
            {mfgStrengths.map((s) => (
              <div className="val" key={s.h}>
                <div className="ic"><Icon name={s.ic} size={26} /></div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 5B. VISION / MISSION / CORE VALUES ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Our Purpose" title="Vision, Mission & Core Values" />
          </Reveal>
          <Reveal fx="stagger" className="val-grid">
            <div className="val">
              <div className="ic"><Icon name="clock" size={26} /></div>
              <h3>Our Vision</h3>
              <p>To be the most trusted and recognised name in dye intermediates and specialty chemicals — known globally for purity, reliability and responsible chemistry.</p>
            </div>
            <div className="val">
              <div className="ic"><Icon name="shield" size={26} /></div>
              <h3>Our Mission</h3>
              <p>To manufacture consistently high-grade chemical intermediates, supported by expert technical service, reliable supply and on-time delivery for customers worldwide.</p>
            </div>
            <div className="val">
              <div className="ic"><Icon name="star" size={26} /></div>
              <h3>Core Values</h3>
              <ul className="val-list">
                <li><Icon name="check" size={13} stroke={2.5} />Quality</li>
                <li><Icon name="check" size={13} stroke={2.5} />Integrity</li>
                <li><Icon name="check" size={13} stroke={2.5} />Reliability</li>
                <li><Icon name="check" size={13} stroke={2.5} />Customer Focus</li>
                <li><Icon name="check" size={13} stroke={2.5} />Continuous Improvement</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. QUALITY COMMITMENT ── */}
      <section className="section">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Quality Commitment" title="Our dedication to product excellence" text="Quality is not just a goal at Siddhivinayak — it is embedded in our culture, our processes and our people. We take every measure to ensure each batch we deliver meets the highest standards." />
          </Reveal>
          <Reveal fx="stagger" className="qual-grid">
            {qualityPoints.map((q) => (
              <div className="qual" key={q.h}>
                <div className="qual__ic"><Icon name={q.ic} size={22} /></div>
                <div>
                  <h4>{q.h}</h4>
                  <p>{q.p}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 7. INFRASTRUCTURE & FACILITIES ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Infrastructure & Facilities" title="Built for scale and quality" text="Our manufacturing and operational infrastructure is designed to support consistent high-volume production while maintaining the highest quality standards at every stage." />
          </Reveal>
          <Reveal fx="stagger" className="infra-grid">
            {infrastructure.map((inf) => (
              <div className="infra" key={inf.h}>
                <div className="ic"><Icon name={inf.ic} size={28} /></div>
                <h3>{inf.h}</h3>
                <p>{inf.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 8. INDUSTRIES WE SERVE ── */}
      <section className="section">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead center eyebrow="Industries We Serve" title="Serving diverse industrial sectors" text="Our dye intermediates and specialty chemicals find applications across a wide range of industries — wherever colour, chemistry and quality matter." />
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

      {/* ── 9. SUSTAINABILITY & RESPONSIBILITY ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal fx="clip">
            <SectionHead eyebrow="Sustainability & Responsibility" title="Building a responsible business" text="We are committed to responsible manufacturing practices that protect our environment, support our people and contribute to sustainable growth for our communities and industry." />
          </Reveal>
          <Reveal fx="stagger" className="val-grid">
            {sustainability.map((s) => (
              <div className="val" key={s.h}>
                <div className="ic"><Icon name={s.ic} size={26} /></div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
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

      {/* ── STATS ── */}
      <section className="section bg-teal section--tight">
        <div className="wrap"><div className="stats-band">
          <Stat label="Years of Expertise"><Counter to={15} suffix="+" /></Stat>
          <Stat label="Satisfied Clients" delay={1}><Counter to={199} suffix="+" /></Stat>
          <Stat label="Export Countries" delay={2}><Counter to={10} suffix="+" /></Stat>
          <Stat label="Branches in Gujarat" delay={3}><Counter to={6} /></Stat>
        </div></div>
      </section>

      {/* ── 10. PARTNER WITH US ── */}
      <section className="section">
        <div className="wrap">
          <Reveal className="cta">
            <div className="inner">
              <p className="eyebrow" style={{ color: 'var(--teal-800)', justifyContent: 'center' }}>Partner With Us</p>
              <h2 style={{ marginTop: '12px' }}>Let's build a long-term business together</h2>
              <p>Whether you're a distributor, manufacturer or buyer looking for a reliable chemical partner — we're ready to discuss your needs, offer competitive pricing and deliver consistent quality you can count on.</p>
              <div className="cta-actions">
                <Link className="btn btn--light" to="/contact">Contact Us</Link>
                <Link className="btn btn--outline-light" to="/products">View Products</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
