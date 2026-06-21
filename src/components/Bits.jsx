import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

const DEFAULT_BANNER = 'https://siddivinayaka2.netlify.app/images/about/factory.jpeg'

export function PageHero({ crumb, title, text, img = DEFAULT_BANNER }) {
  return (
    <section className="phero">
      <img className="phero__bg" src={img} alt="" aria-hidden="true" />
      <div className="phero__overlay" />
      <div className="wrap phero__content">
        <Reveal className="crumb"><Link to="/">Home</Link><span>/</span>{crumb}</Reveal>
        <Reveal as="h1">{title}</Reveal>
        <Reveal as="p" delay={1}>{text}</Reveal>
      </div>
    </section>
  )
}

export function SectionHead({ eyebrow, title, text, center, style }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`} style={style}>
      <p className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{eyebrow}</p>
      <h2 className="head" style={{ marginTop: '18px' }}>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}

export function ProductCard({ p }) {
  return (
    <article className="prod">
      <div className="prod__img">
        {p.tag && <span className={`prod__tag ${p.tagcls}`}>{p.tag}</span>}
        <img src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className="prod__body">
        <h3>{p.name}</h3>
        <p className="prod__sub">{p.sub}</p>
        <div className="prod__foot">
          <span className="prod__cas">CAS Available · TDS</span>
          <Link className="prod__link" to="/contact">Inquire <Icon name="arrow" size={15} stroke={2} /></Link>
        </div>
      </div>
    </article>
  )
}

export function Stat({ children, label, delay }) {
  return (
    <Reveal className="stat" delay={delay}>
      <div className="num">{children}</div>
      <div className="lbl">{label}</div>
    </Reveal>
  )
}

export function CTA({ title, text, primary, primaryTo, secondary, secondaryHref }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="cta">
          <div className="inner">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-actions">
              <Link className="btn btn--light" to={primaryTo}>{primary}</Link>
              <a className="btn btn--outline-light" href={secondaryHref}>{secondary}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
