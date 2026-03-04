import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants/data';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section
      id="contact"
      style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">// get in touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '1rem auto 0' }}>
            Have a project in mind or want to hire a Frontend Developer? Drop a message below or reach out directly.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}
          className="grid-1-mobile"
        >
          {/* Contact links */}
          <div>
            {SOCIAL_LINKS.map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.2rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, wordBreak: 'break-all' }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: '#22C55E',
                display: 'inline-block',
                flexShrink: 0,
                boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
              }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#22C55E' }}>
                Available for freelance &amp; full-time roles
              </span>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: 'rgba(212,52,254,0.08)',
              border: '1px solid rgba(212,52,254,0.3)',
              borderRadius: 16,
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Message Sent!
              </h3>
              <p style={{ color: 'var(--muted)' }}>
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              action="https://getform.io/f/9441241e-c273-428d-8bd7-0838c318f786"
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              onSubmit={() => setSent(true)}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-1-mobile">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="form-input"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
                value={formState.message}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;