import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, ProductCard, CTA } from '../components/Bits.jsx'
import { PRODUCTS, COMPANY } from '../data/site.js'

const apps = [
  { ic: 'textile', h: 'Textiles', p: 'Reactive & acid dyes' },
  { ic: 'paint', h: 'Paints', p: 'High-performance pigments' },
  { ic: 'drop', h: 'Inks', p: 'Printing & writing inks' },
  { ic: 'cube', h: 'Plastics', p: 'Polymer colorants' },
  { ic: 'beaker', h: 'Food & Cosmetics', p: 'Certified specialty dyes' },
]

export default function Products() {
  return (
    <>
      <PageHero crumb="Products" title="Premium dye intermediates & specialty chemicals"
        text="A complete range of reactive and acid dye intermediates — manufactured to consistent purity, fully documented, and ready for bulk and export supply." />

      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Dyestuff Division" title="Our product range" text="Every product ships with CAS information and a Technical Data Sheet. Custom grades and OEM orders are welcome." /></Reveal>
          <div className="prod-grid">
            {PRODUCTS.map((p) => <ProductCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal><SectionHead center eyebrow="Applications" title="Where our intermediates are used" /></Reveal>
          <div className="ind-grid">
            {apps.map((it, i) => (
              <Reveal className="ind" delay={i} key={it.h}><div className="ic"><Icon name={it.ic} size={27} /></div><h4>{it.h}</h4><p>{it.p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Need pricing, samples or a TDS?" text="Send us your requirement and our technical team will respond within 24 hours with grades, documentation and export details."
        primary="Request a Quote" primaryTo="/contact" secondary="WhatsApp Us" secondaryHref={COMPANY.whatsapp} />
    </>
  )
}
