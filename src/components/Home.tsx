import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import { useTypewriter } from '../hooks/useTypewriter';
import { useInView } from '../hooks/useInView';
import { TYPE_WORDS } from '../constants/data';
import Particles from './Particles';
import { LocationIcon, GitHubIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from './Icons';
import HeaderImg from '../assets/header-img.svg';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const typeText = useTypewriter(TYPE_WORDS);
  const [imgRef, imgInView] = useInView(0.2);

  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: 70,
    }}>
      <Particles dark={isDarkMode} />

      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,52,254,0.18) 0%, transparent 70%)',
        top: '10%', right: '-10%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)',
        bottom: '10%', left: '5%', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '2rem clamp(1rem, 4vw, 3rem)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem', width: '100%',
        flexWrap: 'wrap', position: 'relative', zIndex: 1,
      }}>
        {/* Text content */}
        <div style={{ maxWidth: 560, flex: '1 1 300px' }}>
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem',
              color: '#D434FE', background: 'rgba(212,52,254,0.1)',
              padding: '0.35rem 0.8rem', borderRadius: 6,
              border: '1px solid rgba(212,52,254,0.25)',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            }}>
              <LocationIcon size={14} color="#D434FE" />
              Based in Lagos, Nigeria
            </span>
          </div>

          <h1 className="fade-up" style={{
            animationDelay: '0.2s',
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            letterSpacing: '0.02em', lineHeight: 0.95,
            marginTop: '1.25rem', marginBottom: '1rem',
          }}>
            Hi, I'm<br />
            <span style={{
              background: 'linear-gradient(135deg, #D434FE, #903AFF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Opeyemi</span><br />
            Olatunbosun
          </h1>

          <div className="fade-up" style={{
            animationDelay: '0.3s',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            marginBottom: '1.5rem', color: 'var(--muted)', minHeight: '2em',
          }}>
            <span style={{ color: '#D434FE' }}>{'>'}</span> {typeText}
            <span className="cursor-blink" style={{ color: '#D434FE' }}>|</span>
          </div>

          <p className="fade-up" style={{
            animationDelay: '0.4s', color: 'var(--muted)',
            fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 460,
          }}>
            I build <strong style={{ color: 'var(--fg)' }}>delightful, performant</strong> user
            interfaces with React. Passionate about clean code, great UX, and bringing
            designs to life — one component at a time.
          </p>

          <div className="fade-up" style={{ animationDelay: '0.5s', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => scrollTo('projects')}>View Projects →</button>
            <a className="btn-outline" href={`${import.meta.env.BASE_URL}Opeyemi Olatunbosun Frontend Engineer.pdf`} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.6s', display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
            {[
              { href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163', label: 'LinkedIn', Icon: LinkedInIcon },
              { href: 'https://github.com/dem199', label: 'GitHub', Icon: GitHubIcon },
              { href: 'https://twitter.com/olatunb67146838', label: 'Twitter', Icon: TwitterIcon },
              { href: 'https://youtube.com/channel/UCBPv5Vn3QJrvfR89kOUhFzQ', label: 'YouTube', Icon: YouTubeIcon },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
                <Icon size={18} color="currentColor" />
              </a>
            ))}
          </div>
        </div>

        {/* Hero image — animate__zoomIn when scrolled into view */}
        <div
          ref={imgRef}
          className={`float-anim ${imgInView ? 'animate__animated animate__zoomIn' : ''}`}
          style={{
            flex: '1 1 280px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 480,
            margin: '0 auto',
            animationDuration: '0.8s',
          }}
        >
          <img
            src={HeaderImg}
            alt="Hero illustration"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(212,52,254,0.3))',
            }}
          />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>
        <span>scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(#D434FE, transparent)' }} />
      </div>
    </section>
  );
};

export default Home;