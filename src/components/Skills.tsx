import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const GROUPS = [
  {
    from: 'frontend',
    color: 'var(--blue)',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    from: 'backend',
    color: 'var(--green)',
    items: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL', 'REST APIs'],
  },
  {
    from: 'tooling',
    color: 'var(--orange)',
    items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Vite'],
  },
];

function Skills() {
  const ref = useReveal<HTMLDivElement>('.reveal');

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">02 · skills</p>
        <h2 className="section-title reveal">
          <span className="dim">//</span> Tools I reach for
        </h2>

        <div className="import-block reveal">
          {GROUPS.map((g) => (
            <div className="import-line" key={g.from}>
              <span className="kw">import</span>{' '}
              <span className="brace">{'{'}</span>
              <div className="chip-row">
                {g.items.map((item) => (
                  <span
                    className="chip"
                    key={item}
                    style={{ color: g.color, borderColor: `${g.color}55` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="brace">{'}'}</span> <span className="kw">from</span>{' '}
              <span className="str">'./{g.from}'</span>;
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
