import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import { useTypewriter } from '../hooks/useTypewriter';
import { TYPE_WORDS } from '../constants/data';
import Particles from './Particles';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const typeText = useTypewriter(TYPE_WORDS);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 70,
      }}
    >
      {/* Particle canvas */}
      <Particles dark={isDarkMode} />

      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(212,52,254,0.18) 0%, transparent 70%)',
          top: '10%',
          right: '-10%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)',
          bottom: '10%',
          left: '5%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          width: '100%',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Text content */}
        <div style={{ maxWidth: 560 }}>
          {/* Badge */}
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: '#D434FE',
                background: 'rgba(212,52,254,0.1)',
                padding: '0.35rem 0.8rem',
                borderRadius: 6,
                border: '1px solid rgba(212,52,254,0.25)',
              }}
            >
              👋 Based in Lagos, Nigeria
            </span>
          </div>

          {/* Heading */}
          <h1
            className="fade-up"
            style={{
              animationDelay: '0.2s',
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              marginTop: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            Hi, I'm
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #D434FE, #903AFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Opeyemi
            </span>
            <br />
            Olatunbosun
          </h1>

          {/* Typewriter */}
          <div
            className="fade-up"
            style={{
              animationDelay: '0.3s',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              marginBottom: '1.5rem',
              color: 'var(--muted)',
              minHeight: '2em',
            }}
          >
            <span style={{ color: '#D434FE' }}>{'>'}</span> {typeText}
            <span className="cursor-blink" style={{ color: '#D434FE' }}>
              |
            </span>
          </div>

          {/* Description */}
          <p
            className="fade-up"
            style={{
              animationDelay: '0.4s',
              color: 'var(--muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: 460,
            }}
          >
            I build{' '}
            <strong style={{ color: 'var(--fg)' }}>
              delightful, performant
            </strong>{' '}
            user interfaces with React. Passionate about clean code, great UX,
            and bringing designs to life — one component at a time.
          </p>

          {/* CTAs */}
          <div
            className="fade-up"
            style={{
              animationDelay: '0.5s',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects →
            </button>
            <a
              className="btn-outline"
              href="/portfolio/Opeyemi Olatunbosun Frontend Engineer Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div
            className="fade-up"
            style={{
              animationDelay: '0.6s',
              display: 'flex',
              gap: '0.75rem',
              marginTop: '2rem',
            }}
          >
            {[
              {
                href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163',
                label: 'LinkedIn',
                path: (
                  <>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                ),
              },
              {
                href: 'https://github.com/dem199',
                label: 'GitHub',
                path: (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                ),
              },
              {
                href: 'https://twitter.com/olatunb67146838',
                label: 'Twitter / X',
                path: (
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                ),
              },
              {
                href: 'https://youtube.com/channel/UCBPv5Vn3QJrvfR89kOUhFzQ',
                label: 'YouTube',
                path: (
                  <>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </>
                ),
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={label}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Hero illustration */}
        <div
          className="float-anim"
          style={{
            fontSize: 'clamp(8rem, 18vw, 15rem)',
            textAlign: 'center',
            filter: 'drop-shadow(0 0 40px rgba(212,52,254,0.3))',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          🧑‍💻
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--muted)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span>scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(#D434FE, transparent)',
          }}
        />
      </div>
    </section>
  );
};

export default Home;