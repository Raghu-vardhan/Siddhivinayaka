import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Social } from './Brand.jsx'
import { NAV, COMPANY } from '../data/site.js'

function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tb-left">
          <a href={`mailto:${COMPANY.email}`}><Icon name="mail" size={14} stroke={2} />{COMPANY.email}</a>
          <Link className="tb-hide" to="/contact"><Icon name="pin" size={14} stroke={2} />Ahmedabad, Gujarat, India</Link>
        </div>
        <div className="tb-right">
          <a href={`tel:${COMPANY.phoneRaw1}`}><Icon name="phone" size={14} stroke={2} />{COMPANY.phone1}</a>
          <span style={{ opacity: .4 }}>|</span>
          <a href={`tel:${COMPANY.phoneRaw2}`}>{COMPANY.phone2}</a>
        </div>
      </div>
    </div>
  )
}

function Header({ onBurger }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    fn(); window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <Link className="brand" to="/"><img src="/assets/logo.png" alt={COMPANY.name} /></Link>
        <nav>
          <ul className="menu">
            {NAV.map((item) => (
              <li key={item.label} className={item.children ? '' : ''}>
                <NavLink to={item.to} className={({ isActive }) => isActive ? 'active-link' : ''}>
                  {item.label}{item.children && <Icon name="caret" size={10} stroke={2.5} className="caret" />}
                </NavLink>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map((c) => <Link key={c.label} to={c.to}>{c.label}</Link>)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Link className="btn btn--primary" to="/contact">Get a Quote <Icon name="arrow" size={17} stroke={2} /></Link>
        </div>
        <button className="burger" aria-label="Menu" onClick={onBurger}><span></span><span></span><span></span></button>
      </div>
    </header>
  )
}

function MobileMenu({ open, onClose }) {
  const items = [
    { label: 'Home', to: '/' }, { label: 'About Us', to: '/about' },
    { label: 'Products', to: '/products' }, { label: 'Manufacturing', to: '/manufacturing' },
    { label: 'Career', to: '/career' }, { label: 'Contact', to: '/contact' },
  ]
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose}></div>
      <aside className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="m-close" aria-label="Close" onClick={onClose}>&times;</button>
        {items.map((i) => <Link key={i.to} to={i.to} onClick={onClose}>{i.label}</Link>)}
        <Link className="btn btn--primary" to="/contact" onClick={onClose}>Get a Quote</Link>
      </aside>
    </>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-about">
            <div className="foot-logo"><img src="/assets/logo.png" alt="Siddhivinayak" /></div>
            <p>A leading manufacturer and exporter of premium dye intermediates, reactive dyes and specialty chemicals. Serving 199+ clients across India and global markets since 2010.</p>
            <div className="foot-addr">30-32, Sanyam Complex, Nr. Punitnogar Railway Crossing,<br />Jashodanagar — 382445, Ahmedabad, Gujarat, India</div>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn"><Social name="linkedin" /></a>
              <a href="#" aria-label="Facebook"><Social name="facebook" /></a>
              <a href={COMPANY.whatsapp} aria-label="WhatsApp"><Social name="whatsapp" /></a>
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <div className="foot-links">
              <Link to="/about">About Us</Link><Link to="/manufacturing">Manufacturing</Link>
              <Link to="/about#leadership">Leadership</Link><Link to="/career">Career</Link>
            </div>
          </div>
          <div>
            <h5>Products</h5>
            <div className="foot-links">
              <Link to="/products">Sulpho Vinyl Sulphone</Link><Link to="/products">H. Acid & K-Acid</Link>
              <Link to="/products">Sulfo OAVS</Link><Link to="/products">View All</Link>
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <div className="foot-links">
              <Link to="/contact">Get a Quote</Link><Link to="/contact">Contact Us</Link>
              <a href={`tel:${COMPANY.phoneRaw1}`}>{COMPANY.phone1}</a>
              <a href={`mailto:${COMPANY.email}`}>Email Us</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Siddhivinayak Dyes & Chemical Industries Ltd. All rights reserved.</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a className="wa-float" href={COMPANY.whatsapp} aria-label="WhatsApp"><Social name="whatsapp" /></a>
  )
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setOpen(false) }, [loc.pathname])
  return (
    <>
      <TopBar />
      <Header onBurger={() => setOpen((v) => !v)} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
