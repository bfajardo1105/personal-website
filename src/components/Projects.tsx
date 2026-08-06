import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    file: 'commerce-platform.tsx',
    title: 'Commerce Platform',
    description:
      'A full storefront with cart, checkout, and an admin dashboard for inventory and order management.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    live: '#',
    repo: '#',
  },
  {
    file: 'realtime-chat.ts',
    title: 'Realtime Chat',
    description:
      'WebSocket-based messaging app with rooms, presence indicators, and message history search.',
    stack: ['TypeScript', 'Socket.io', 'Redis'],
    live: '#',
    repo: '#',
  },
  {
    file: 'devops-dashboard.tsx',
    title: 'DevOps Dashboard',
    description:
      'Internal tool visualizing deployment pipelines and service health across environments.',
    stack: ['Next.js', 'Docker', 'AWS'],
    live: '#',
    repo: '#',
  },
];

function Projects() {
  const ref = useReveal<HTMLDivElement>('.reveal');

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">03 · projects</p>
        <h2 className="section-title reveal">
          <span className="dim">//</span> Things I've built
        </h2>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <article className="file-card reveal" key={p.file}>
              <div className="file-card-bar">
                <span className="fc-dot fc-red" />
                <span className="fc-dot fc-yellow" />
                <span className="fc-dot fc-green" />
                <span className="file-card-name">{p.file}</span>
              </div>
              <div className="file-card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="stack-row">
                  {p.stack.map((s) => (
                    <span className="stack-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="file-card-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live ↗
                  </a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    Source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
