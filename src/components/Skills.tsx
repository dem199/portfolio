import React from 'react';
import { SKILLS, TOOLS, LEARNING } from '../constants/data';
import { useInView } from '../hooks/useInView';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, inView }) => (
  <div style={{ marginBottom: '1.2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{name}</span>
      <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{level}%</span>
    </div>
    <div style={{ background: 'var(--bar-bg)', borderRadius: 99, height: 8, overflow: 'hidden' }}>
      <div
        style={{
          height: '100%',
          borderRadius: 99,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          width: inView ? `${level}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      id="skills"
      style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">// tech stack</span>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', maxWidth: 460, margin: '0.75rem auto 0' }}>
            Technologies I use daily to build fast, accessible, and beautiful products.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
          className="grid-1-mobile"
        >
          {/* Skill bars */}
          <div ref={ref}>
            {SKILLS.map(s => (
              <SkillBar key={s.name} {...s} inView={inView} />
            ))}
          </div>

          {/* Right column */}
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              Tools &amp; Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {TOOLS.map(t => (
                <span key={t} className="tool-chip">{t}</span>
              ))}
            </div>

            {/* Currently learning */}
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 16,
              }}
            >
              <span
                className="section-label"
                style={{ marginBottom: '1rem', display: 'block' }}
              >
                // currently learning
              </span>
              {LEARNING.map(item => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                  }}
                >
                  <span style={{ color: '#D434FE', fontWeight: 700 }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;