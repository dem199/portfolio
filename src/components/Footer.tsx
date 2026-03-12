import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import { LinkedInIcon, GitHubIcon, TwitterIcon, YouTubeIcon } from './Icons';
import ProfileImage from '../assets/profileImg.jpeg';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/opeyemi-olatunbosun-85b30b163', Icon: LinkedInIcon },
    { label: 'GitHub', href: 'https://github.com/dem199', Icon: GitHubIcon },
    { label: 'Twitter', href: 'https://twitter.com/olatunb67146838', Icon: TwitterIcon },
    { label: 'YouTube', href: 'https://youtube.com/channel/UCBPv5Vn3QJrvfR89kOUhFzQ', Icon: YouTubeIcon },
  ];

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem clamp(1rem, 4vw, 3rem) 2rem',
      background: isDarkMode ? 'rgba(10,6,18,0.8)' : 'rgba(248,245,255,0.8)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr',
          gap: '2rem', alignItems: 'start', marginBottom: '2.5rem',
        }} className="grid-1-mobile">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', cursor: 'pointer' }}
              onClick={() => scrollTo('home')}>
              <img src={ProfileImage} alt="Opeyemi" style={{
                width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #D434FE',
              }} />
              <span style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: "'DM Sans', sans-serif", color: 'var(--fg)' }}>
                Optimistic
              </span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', maxWidth: 280, lineHeight: 1.6 }}>
              Frontend Developer based in Lagos, Nigeria. Building delightful user experiences, one component at a time.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem' }}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label}>
                  <Icon size={16} color="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--muted)' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['home', 'about', 'skills', 'projects', 'contact'].map(link => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} style={{
                    background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer',
                    fontSize: '0.875rem', fontFamily: "'DM Sans', sans-serif",
                    textTransform: 'capitalize', transition: 'color 0.2s', padding: '0.15rem 0',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--muted)' }}>
              Connect
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" style={{
                    color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
            © 2026 Opeyemi Olatunbosun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;