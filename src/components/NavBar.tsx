import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../DarkModeContext';
import { NAV_LINKS } from '../constants/data';

const NavBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handle = () => {
      for (const id of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 4vw, 3rem)',
        height: 70,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: isDarkMode ? 'rgba(10,6,18,0.85)' : 'rgba(248,245,255,0.85)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        onClick={() => scrollTo('home')}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #D434FE, #7B2FBE)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Bebas Neue', cursive",
            fontSize: '1.1rem',
            color: '#fff',
            letterSpacing: '0.05em',
          }}
        >
          OO
        </div>
        <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '1.3rem', letterSpacing: '0.08em' }}>
          Opeyemi
        </span>
      </div>

      {/* Desktop nav */}
      <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none' }} className="hide-mobile">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <button
              className={`nav-link ${activeSection === link ? 'active' : ''}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.4rem 0.65rem',
            cursor: 'pointer',
            color: 'var(--fg)',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.2s',
          }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Hire me */}
        <button className="btn-primary hide-mobile" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} onClick={() => scrollTo('contact')}>
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.4rem 0.6rem',
            cursor: 'pointer',
            color: 'var(--fg)',
            fontSize: '1.2rem',
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            background: isDarkMode ? '#0A0612' : '#F8F5FF',
            borderBottom: '1px solid var(--border)',
            listStyle: 'none',
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {NAV_LINKS.map(link => (
            <li key={link}>
              <button
                className={`nav-link ${activeSection === link ? 'active' : ''}`}
                style={{ width: '100%', textAlign: 'left', padding: '0.75rem 2rem', fontSize: '1rem' }}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
          <li style={{ padding: '0.75rem 2rem' }}>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
          </li>
        </ul>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;