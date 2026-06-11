import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead } from '../components/Bits.jsx'

const jobs = [
  ['Production Chemist','Production','Ahmedabad','Full-time'],
  ['QC / Lab Analyst','Quality Control','Ahmedabad','Full-time'],
  ['Export Documentation Executive','Logistics','Ahmedabad','Full-time'],
  ['Business Development Manager','Sales','Gujarat','Full-time'],
]

export default function Career() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset() }
  return (
    <>
      <PageHero crumb="Career" title="Build your career in chemistry"
        text="Join a growing team that values precision, integrity and continuous learning. We are always looking for people who care about doing things right." />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Company Culture</p>
              <h2 className="head" style={{ marginTop: '18px' }}>A workplace built on trust and growth</h2>
              <p className="lead" style={{ marginTop: '16px' }}>At Siddhivinayak, we believe great chemistry starts with great people. Our culture rewards curiosity, ownership and a shared commitment to quality.</p>
              <p style={{ marginTop: '16px', color: 'var(--slate)' }}>You will work alongside experienced chemists and operators, learn modern manufacturing practices, and contribute directly to products used by industries around the world. We invest in training, safety and long-term careers.</p>
            </Reveal>
            <Reveal className="split-media" delay={1}><span className="frame"></span><img src="/assets/team.jpeg" alt="Our team" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper2">
        <div className="wrap">
          <Reveal><SectionHead eyebrow="Open Positions" title="Current job openings" text="Don't see the right role? Send us your CV anyway — we keep great profiles on file." /></Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobs.map(([title, dept, loc, typ]) => (
              <Reveal className="job" key={title}>
                <div>
                  <span className="chip">{dept}</span>
                  <h3 style={{ marginTop: '12px' }}>{title}</h3>
                  <div className="job__meta">
                    <span><Icon name="pin" size={14} stroke={2} />{loc}</span>
                    <span>{typ}</span>
                  </div>
                </div>
                <a className="btn btn--ghost" href="#apply">Apply Now</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="apply">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <Reveal><SectionHead center eyebrow="Apply" title="Send us your application" /></Reveal>
          <Reveal as="form" delay={1} className="form-card" onSubmit={submit}>
            <div className="field-row">
              <div className="field"><label>Full Name</label><input type="text" required placeholder="Your name" /></div>
              <div className="field"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
            </div>
            <div className="field-row">
              <div className="field"><label>Phone</label><input type="tel" required placeholder="+91" /></div>
              <div className="field"><label>Position</label><select><option>Production Chemist</option><option>QC / Lab Analyst</option><option>Export Documentation Executive</option><option>Business Development Manager</option><option>Other</option></select></div>
            </div>
            <div className="field"><label>Message / Experience</label><textarea placeholder="Tell us about your experience..."></textarea></div>
            <button className="btn btn--primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Submit Application</button>
            {sent && <p style={{ marginTop: '16px', color: 'var(--teal-600)', fontWeight: 600, textAlign: 'center' }}>✓ Thank you! Your application has been received. (Demo — connect to email on launch.)</p>}
          </Reveal>
        </div>
      </section>
    </>
  )
}
