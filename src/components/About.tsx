import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const About: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  const infoCards = [
    { icon: '🎓', label: 'Education', value: 'B.Sc Microbiology, UI' },
    { icon: '📍', label: 'Location', value: 'Lagos, Nigeria' },
    { icon: '💼', label: 'Status', value: 'Open to Work' },
    { icon: '🚀', label: 'Focus', value: 'Frontend & React' },
  ];

  return (
    <section
      id="about"
      style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)' }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="grid-1-mobile"
      >
        {/* Left — text */}
        <div>
          <span className="section-label">// about me</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            The person
            <br />
            behind the code
          </h2>

          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            I'm a driven{' '}
            <strong style={{ color: 'var(--fg)' }}>frontend &amp; React developer</strong>{' '}
            based in Lagos, Nigeria. I craft exceptional user interfaces using modern tools
            and coding practices, turning designs into fast, accessible, delightful experiences.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            With a keen interest in{' '}
            <strong style={{ color: 'var(--fg)' }}>fintech and blockchain</strong>, I combine
            my Microbiology background from the University of Ibadan with a self-taught passion
            for software engineering. My teaching background sharpens communication and
            problem-solving skills.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            When not coding, I enjoy teaching Chemistry, Physics, and Biology — the same
            curiosity I bring to debugging complex UI issues!
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              className="btn-primary"
              href="/portfolio/Opeyemi Olatunbosun Frontend Engineer Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right — info card stack */}
        <div style={{ position: 'relative' }}>
          {/* Decorative rotated backgrounds */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(212,52,254,0.13), rgba(123,47,190,0.13))',
            borderRadius: 24, transform: 'rotate(3deg)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(212,52,254,0.07), rgba(123,47,190,0.07))',
            borderRadius: 24, transform: 'rotate(-2deg)',
          }} />

          {/* Main card */}
          <div style={{
            position: 'relative',
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: '2rem',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {infoCards.map(item => (
                <div
                  key={item.label}
                  style={{
                    background: isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                    borderRadius: 12,
                    padding: '1rem',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                  <div style={{
                    fontSize: '0.7rem', color: 'var(--muted)',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    marginBottom: '0.25rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Email badge */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'rgba(212,52,254,0.08)',
              border: '1px solid rgba(212,52,254,0.2)',
              borderRadius: 12,
            }}>
              <a
                href="mailto:olatunbosunopeyemi186035@gmail.com"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  color: '#D434FE',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
              >
                olatunbosunopeyemi186035@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;