import React from 'react';
import { STATS } from '../constants/data';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  label: string;
  value: number;
  inView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, inView }) => {
  const count = useCountUp(value, inView);

  return (
    <div style={{ textAlign: 'center', padding: '0.5rem' }}>
      <div
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          fontFamily: "'Bebas Neue', cursive",
          background: 'linear-gradient(135deg, #D434FE, #7B2FBE)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '0.4rem',
        }}
      >
        {count}+
      </div>
      <div
        style={{
          fontSize: '0.8rem',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const [ref, inView] = useInView(0.3);

  return (
    <section
      style={{
        padding: '3rem clamp(1rem, 4vw, 3rem)',
        background: 'rgba(212,52,254,0.04)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}
        className="grid-2-sm"
      >
        {STATS.map(s => (
          <StatItem key={s.label} label={s.label} value={s.value} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Stats;