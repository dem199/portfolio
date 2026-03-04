import React, { useState } from 'react';
import { Project } from '../constants/data';
import { useInView } from '../hooks/useInView';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card-bg)',
        border: `1px solid ${hovered ? 'rgba(212,52,254,0.5)' : 'var(--border)'}`,
        borderRadius: 16,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, opacity 0.5s ease',
        transitionDelay: `${index * 0.06}s`,
        transform: inView
          ? hovered ? 'translateY(-8px) scale(1.015)' : 'translateY(0)'
          : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        boxShadow: hovered ? '0 20px 60px rgba(212,52,254,0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '0.25rem 0.6rem',
            background: 'rgba(212,52,254,0.15)',
            color: '#D434FE',
            borderRadius: 6,
          }}
        >
          {project.tag}
        </span>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Source code"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <GitHubIcon />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label="Live demo"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: '1.5rem',
          letterSpacing: '0.04em',
          margin: 0,
          color: hovered ? '#D434FE' : 'var(--fg)',
          transition: 'color 0.2s',
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          color: 'var(--muted)',
          fontSize: '0.875rem',
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {project.desc}
      </p>

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'var(--muted)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;