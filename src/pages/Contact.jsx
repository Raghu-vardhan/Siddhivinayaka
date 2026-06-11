import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { Social } from '../components/Brand.jsx'
import { PageHero } from '../components/Bits.jsx'
import { COMPANY } from '../data/site.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset() }
  return (
    <>
      <PageHero crumb="Contact" title="Let's talk chemistry"
        text="Reach out for pricing, samples, TDS documents or export inquiries. Our team responds within 24 hours." />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <p className="eyebrow">Get in Touch</p>
              <h2 className="head" style={{ marginTop: '18px' }}>We'd love to hear from you</h2>
              <p className="lead" style={{ marginTop: '14px' }}>Whether you need bulk supply, custom grades or technical guidance, our team is ready to help.</p>
              <div className="cinfo">
                <div className="cinfo-item"><div className="ic"><Icon name="pin" size={24} stroke={1.8} /></div><div><h4>Head Office</h4><p>{COMPANY.address}</p></div></div>
                <div className="cinfo-item"><div className="ic"><Icon name="phone" size={24} stroke={1.8} /></div><div><h4>Phone</h4><p><a href={`tel:${COMPANY.phoneRaw1}`}>{COMPANY.phone1}</a><br /><a href={`tel:${COMPANY.phoneRaw2}`}>{COMPANY.phone2}</a></p></div></div>
                <div className="cinfo-item"><div className="ic"><Icon name="mail" size={24} stroke={1.8} /></div><div><h4>Email</h4><p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p></div></div>
                <div className="cinfo-item"><div className="ic"><Social name="whatsapp" /></div><div><h4>WhatsApp</h4><p><a href={COMPANY.whatsapp}>Chat with us instantly</a></p></div></div>
              </div>
            </Reveal>
            <Reveal as="form" delay={1} className="form-card" onSubmit={submit}>
              <div className="field-row">
                <div className="field"><label>Full Name</label><input type="text" required placeholder="Your name" /></div>
                <div className="field"><label>Company</label><input type="text" placeholder="Company name" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
                <div className="field"><label>Phone</label><input type="tel" placeholder="+91" /></div>
              </div>
              <div className="field"><label>Product of Interest</label><select><option>Sulpho Vinyl Sulphone</option><option>H. Acid</option><option>K-Acid</option><option>Sulfo OAVS</option><option>6 Acetyl OAPSA</option><option>Other / Multiple</option></select></div>
              <div className="field"><label>Message</label><textarea required placeholder="Tell us about your requirement, quantity, and destination..."></textarea></div>
              <button className="btn btn--primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
              {sent && <p style={{ marginTop: '16px', color: 'var(--teal-600)', fontWeight: 600, textAlign: 'center' }}>✓ Thank you! Your inquiry has been received. We'll respond within 24 hours. (Demo — connect to email on launch.)</p>}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <Reveal className="map-embed">
            <iframe src="https://www.google.com/maps?q=Jashodanagar,Ahmedabad,Gujarat&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Siddhivinayak location"></iframe>
          </Reveal>
        </div>
      </section>
    </>
  )
}
