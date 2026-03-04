import React, { useEffect } from 'react';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import './index.css';

// ── Theme variables injected via CSS custom properties ────────────────────────
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  const darkVars = {
    '--bg': '#0A0612',
    '--bg2': '#110C20',
    '--card-bg': 'rgba(255,255,255,0.04)',
    '--border': 'rgba(255,255,255,0.1)',
    '--fg': '#F0F0F0',
    '--muted': '#8B8B9E',
    '--bar-bg': 'rgba(255,255,255,0.08)',
  } as React.CSSProperties;

  const lightVars = {
    '--bg': '#F8F5FF',
    '--bg2': '#F0EBFF',
    '--card-bg': 'rgba(255,255,255,0.85)',
    '--border': 'rgba(0,0,0,0.1)',
    '--fg': '#150E28',
    '--muted': '#5A5A72',
    '--bar-bg': 'rgba(0,0,0,0.08)',
  } as React.CSSProperties;

  const vars = isDarkMode ? darkVars : lightVars;

  // Sync body background to avoid flash
  useEffect(() => {
    document.body.style.background = isDarkMode ? '#0A0612' : '#F8F5FF';
    document.body.style.color = isDarkMode ? '#F0F0F0' : '#150E28';
  }, [isDarkMode]);

  return (
    <div style={{ ...vars, background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      {children}
    </div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
function AppInner() {
  return (
    <ThemeWrapper>
      <ScrollProgress />
      <NavBar />
      <main>
        <Home />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeWrapper>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppInner />
    </DarkModeProvider>
  );
}

export default App;