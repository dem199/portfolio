import React from 'react';
import { PROJECTS } from '../constants/data';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 3rem)',
        background: 'rgba(212,52,254,0.03)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">// portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '1rem auto 0' }}>
            Every project includes a live demo and source code link. Built with modern React and creative problem-solving.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/dem199"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: '0.4rem' }}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
            </svg>
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;