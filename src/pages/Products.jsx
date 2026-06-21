import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, CTA } from '../components/Bits.jsx'
import { PRODUCTS, COMPANY } from '../data/site.js'

const CATEGORIES = ['All', 'Vinyl Sulphone Series', 'Naphthalene Acid Series', 'Benzoic Acid Derivatives', 'Specialty Grades']

const apps = [
  { ic: 'textile', h: 'Textile Industry', p: 'Reactive & acid dye intermediates' },
  { ic: 'doc',     h: 'Paper Industry',   p: 'Specialty chemical compounds' },
  { ic: 'drop',    h: 'Leather Industry', p: 'Dye compounds for leather' },
  { ic: 'paint',   h: 'Ink & Coatings',  p: 'High-performance pigments' },
  { ic: 'flask',   h: 'Chemical Mfg.',   p: 'Synthesis intermediates' },
  { ic: 'beaker',  h: 'Specialty Chem.', p: 'Custom-grade applications' },
]

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        crumb="Products"
        title="Premium dye intermediates & specialty chemicals"
        text="A complete range of reactive and acid dye intermediates — manufactured to consistent purity, fully documented and ready for bulk and export supply."
      />

      {/* ── Category Header ── */}
      <section className="section">
        <div className="wrap">
          <div className="pt-header">
            <div>
              <p className="eyebrow">Dyestuff Division</p>
              <h2 className="head" style={{ marginTop: '14px' }}>Dye Intermediates</h2>
              <p className="lead" style={{ marginTop: '12px', maxWidth: '56ch' }}>
                Our dye intermediates serve as essential building blocks for the production of reactive and acid dyes used across textiles, paper, leather and specialty applications. Every product is manufactured to meet global purity and performance standards.
              </p>
            </div>
            <a className="btn btn--ghost" href={`mailto:${COMPANY.email}?subject=Product Specification Request`}>
              Request Product Specification <Icon name="arrow" size={17} stroke={2} />
            </a>
          </div>

          {/* ── Category Filter ── */}
          <div className="pt-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`pt-filter${active === c ? ' pt-filter--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* ── Product Table ── */}
          <Reveal>
            <div className="pt-wrap">
              <table className="pt">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Chemical Name</th>
                    <th>CAS No</th>
                    <th style={{ textAlign: 'center' }}>Structural Formula</th>
                    <th style={{ textAlign: 'center' }}>Inquiry</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.name}>
                      <td>
                        <div className="pt__name">
                          {p.tag && <span className={`pt__badge ${p.tagcls}`}>{p.tag}</span>}
                          {p.name}
                        </div>
                        <div className="pt__sub">{p.sub}</div>
                      </td>
                      <td className="pt__chem">{p.chemName}</td>
                      <td className="pt__cas">{p.cas}</td>
                      <td className="pt__struct">
                        <div className="pt__img-wrap">
                          <img src={p.img} alt={`${p.name} structure`} />
                        </div>
                      </td>
                      <td className="pt__inq">
                        <Link
                          className="pt__btn"
                          to={`/contact?product=${encodeURIComponent(p.name)}`}
                        >
                          Send Inquiry
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <p className="pt-note">
            <Icon name="check" size={14} stroke={2.5} />
            CAS numbers marked "—" are available on request. All products ship with Certificate of Analysis and Technical Data Sheet.
          </p>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Applications" title="Where our intermediates are used" /></Reveal>
          <Reveal fx="stagger" className="ind-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {apps.map((it) => (
              <div className="ind" key={it.h}>
                <div className="ic"><Icon name={it.ic} size={27} /></div>
                <h4>{it.h}</h4>
                <p>{it.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        title="Need pricing, samples or a TDS?"
        text="Send us your requirement and our technical team will respond within 24 hours with grades, documentation and export details."
        primary="Request a Quote"
        primaryTo="/contact"
        secondary="WhatsApp Us"
        secondaryHref={COMPANY.whatsapp}
      />
    </>
  )
}
