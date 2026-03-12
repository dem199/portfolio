import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationIcon, LocationIcon, BriefcaseIcon, RocketIcon } from './Icons';
import ProfileImage from '../assets/my-image.jpeg';

// Info card data — matches screenshot 2 layout exactly
const INFO_CARDS = [
  {
    icon: <GraduationIcon size={22} color="#D434FE" />,
    label: 'EDUCATION',
    value: 'B.Sc Microbiology, UI',
  },
  {
    icon: <LocationIcon size={22} color="#D434FE" />,
    label: 'LOCATION',
    value: 'Lagos, Nigeria',
  },
  {
    icon: <BriefcaseIcon size={22} color="#D434FE" />,
    label: 'STATUS',
    value: 'Open to Work',
  },
  {
    icon: <RocketIcon size={22} color="#D434FE" />,
    label: 'FOCUS',
    value: 'Frontend & React',
  },
];

const About: React.FC = () => {
  const [sectionRef, sectionInView] = useInView(0.2);
  const [imgRef, imgInView] = useInView(0.2);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
    });
  };

  return (
    <section id="about" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">// about me</span>
          <h2 className="section-title">The Person Behind the Code</h2>
        </div>

        <div
          ref={sectionRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
          className="grid-1-mobile"
        >
          {/* LEFT — profile picture (stays, as requested) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              ref={imgRef}
              className={imgInView ? 'animate__animated animate__zoomIn' : ''}
              style={{ animationDuration: '0.7s' }}
            >
              <div
                ref={tiltRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                style={{
                  position: 'relative',
                  width: 340,
                  height: 420,
                  cursor: 'pointer',
                  transform: `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow border — rounded rectangle to match portrait shape */}
                <div style={{
                  position: 'absolute', inset: -4, borderRadius: 28,
                  background: 'linear-gradient(135deg, #D434FE, #7B2FBE)',
                  filter: 'blur(2px)', zIndex: 0,
                }} />
                <img
                  src={ProfileImage}
                  alt="Opeyemi Olatunbosun"
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: 24,
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    position: 'relative', zIndex: 1,
                    border: '3px solid var(--bg)',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 16, right: -14, zIndex: 2,
                  background: '#D434FE', color: '#fff',
                  fontSize: '0.75rem', fontWeight: 700,
                  padding: '0.4rem 0.8rem', borderRadius: 20,
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: '0 4px 20px rgba(212,52,254,0.4)',
                }}>
                  Frontend Dev
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — text + info cards (screenshot 2 layout) */}
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
              I'm a driven <strong style={{ color: 'var(--fg)' }}>Frontend / React Developer</strong> based
              in Lagos, Nigeria. I utilise modern coding practices to create exceptional user interfaces that
              are both beautiful and performant.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1rem' }}>
              I have a keen interest in <strong style={{ color: 'var(--fg)' }}>fintech, blockchain, and AI</strong>,
              complemented by my background in teaching. I hold a bachelor's degree in Microbiology from the
              University of Ibadan. When I'm not coding, I enjoy sharing knowledge and teaching Chemistry,
              Physics, and Biology.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
              My expertise of core technologies is consistently reflected in my work — every project I build
              is crafted with care, precision, and a focus on the end user.
            </p>

            {/* Info cards — screenshot 2 deep purple background style */}
            <div style={{
              background: 'linear-gradient(135deg, #1E0A3C, #2B1060)',
              borderRadius: 20,
              padding: '1.25rem',
              border: '1px solid rgba(212,52,254,0.2)',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}>
                {INFO_CARDS.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      padding: '1rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(212,52,254,0.15)',
                      borderRadius: 12,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    {/* Icon on top — like screenshot 2 */}
                    <span>{icon}</span>
                    <div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'rgba(255,255,255,0.45)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.2rem',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {label}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#fff',
                      }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem',
              color: '#D434FE', background: 'rgba(212,52,254,0.08)',
              padding: '0.5rem 1rem', borderRadius: 8,
              border: '1px solid rgba(212,52,254,0.2)',
              wordBreak: 'break-all',
            }}>
              olatunbosunopeyemi186035@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;