import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import { Project } from '../constants/data';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const [ref, inView] = useInView(0.1);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // 3D tilt — same animation style as old portfolio images
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };
  const resetTilt = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

  const isComingSoon = project.live === '#';

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={resetTilt}
        className="card"
        style={{
          padding: '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          transform: `perspective(700px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          transformStyle: 'preserve-3d',
          boxShadow: hovered ? '0 8px 40px rgba(212,52,254,0.2)' : '0 2px 12px rgba(0,0,0,0.1)',
          borderColor: hovered ? 'rgba(212,52,254,0.4)' : 'var(--border)',
          cursor: 'default',
        }}
      >
        {/* Top row — tag + links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
            color: '#D434FE', background: 'rgba(212,52,254,0.1)',
            padding: '0.2rem 0.6rem', borderRadius: 99,
            border: '1px solid rgba(212,52,254,0.2)',
          }}>
            {project.tag}
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              aria-label="GitHub">
              <GitHubIcon size={17} color="currentColor" />
            </a>
            {!isComingSoon && (
              <a href={project.live} target="_blank" rel="noreferrer"
                style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D434FE')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                aria-label="Live demo">
                <ExternalLinkIcon size={17} color="currentColor" />
              </a>
            )}
          </div>
        </div>

        {/* Project name */}
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: 0, color: 'var(--fg)' }}>
          {project.name}
          {isComingSoon && (
            <span style={{
              marginLeft: '0.5rem', fontSize: '0.65rem',
              background: 'rgba(251,191,36,0.15)', color: '#F59E0B',
              border: '1px solid rgba(251,191,36,0.3)',
              padding: '0.15rem 0.5rem', borderRadius: 99,
              fontFamily: "'JetBrains Mono', monospace", verticalAlign: 'middle',
            }}>
              coming soon
            </span>
          )}
        </h3>

        {/* Description */}
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0, flex: 1 }}>
          {project.desc}
        </p>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
              color: 'var(--muted)', background: 'var(--bar-bg)',
              padding: '0.2rem 0.55rem', borderRadius: 6,
              border: '1px solid var(--border)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;