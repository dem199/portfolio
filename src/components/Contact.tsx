import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { EmailIcon, WhatsAppIcon, LinkedInIcon, GitHubIcon, CheckCircleIcon } from './Icons';
import ContactImg from '../assets/contact-img.svg';

const iconMap: Record<string, React.ReactNode> = {
  email: <EmailIcon size={20} color="#D434FE" />,
  whatsapp: <WhatsAppIcon size={20} color="#D434FE" />,
  linkedin: <LinkedInIcon size={20} color="#D434FE" />,
  github: <GitHubIcon size={20} color="#D434FE" />,
};

const CONTACTS = [
  { label: 'Email', icon: 'email', href: 'mailto:olatunbosunopeyemi186035@gmail.com', value: 'olatunbosunopeyemi186035@gmail.com' },
  { label: 'WhatsApp', icon: 'whatsapp', href: 'http://wa.me/+2348176779961', value: '+234 817 677 9961' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163', value: 'opeyemi-olatunbosun' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/dem199', value: 'github.com/dem199' },
];

// Contact illustration — zoomIn on scroll + 3D tilt on hover
const ContactIllustration: React.FC = () => {
  const [imgRef, imgInView] = useInView(0.2);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 14,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -14,
    });
  };

  return (
    <div
      ref={imgRef}
      className={imgInView ? 'animate__animated animate__zoomIn' : ''}
      style={{ animationDuration: '0.7s', display: 'flex', justifyContent: 'center' }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.15s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={ContactImg}
          alt="Contact illustration"
          style={{
            width: '100%', maxWidth: 440, height: 'auto',
            filter: 'drop-shadow(0 0 30px rgba(212,52,254,0.25))',
          }}
        />
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">// get in touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '1rem auto 0' }}>
            Have a project in mind or want to hire a Frontend Developer? Drop a message below or reach out directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}
          className="grid-1-mobile">
          <div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {CONTACTS.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-card">
                  <span style={{ flexShrink: 0 }}>{iconMap[item.icon]}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 500, wordBreak: 'break-all' }}>{item.value}</div>
                  </div>
                </a>
              ))}
              <div style={{
                padding: '0.75rem 1rem', background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.25)', borderRadius: 12,
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#22C55E' }}>Available for freelance &amp; full-time roles</span>
              </div>
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 2rem', background: 'rgba(212,52,254,0.08)', border: '1px solid rgba(212,52,254,0.3)', borderRadius: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><CheckCircleIcon size={48} color="#22C55E" /></div>
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--muted)' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form action="https://getform.io/f/9441241e-c273-428d-8bd7-0838c318f786" method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={() => setSent(true)}>
                <input className="form-input" type="text" name="name" placeholder="Your Name" required value={formState.name} onChange={handleChange} />
                <input className="form-input" type="email" name="email" placeholder="Email Address" required value={formState.email} onChange={handleChange} />
                <textarea className="form-input" name="message" rows={5} placeholder="Tell me about your project..." required value={formState.message} onChange={handleChange} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message →</button>
              </form>
            )}
          </div>

          <ContactIllustration />
        </div>
      </div>
    </section>
  );
};

export default Contact;