import { useReveal } from '../hooks/useReveal';
import './About.css';

const STATS = [
  { key: 'yearsExperience', value: '4', unit: 'years' },
  { key: 'projectsShipped', value: '20', unit: '+' },
  { key: 'coffeeConsumed', value: '∞', unit: 'cups' },
];

function About() {
  const ref = useReveal<HTMLDivElement>('.reveal');

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">01 · about</p>
        <h2 className="section-title reveal">
          <span className="dim">//</span> A bit about me
        </h2>

        <div className="about-grid">
          <p className="about-copy reveal">
            I'm a full stack developer who likes taking a product from a rough
            idea to something people actually enjoy using. I'm comfortable
            across the whole stack — designing schemas, building APIs, and
            polishing the interface that sits on top of it — and I care about
            code that's still easy to read six months later. When I'm not
            shipping features, I'm usually tinkering with a side project or
            reading up on whatever's new in the ecosystem.
          </p>

          <dl className="stat-block reveal">
            {STATS.map((s) => (
              <div className="stat" key={s.key}>
                <dt>
                  <span className="const-kw">const</span> {s.key} =
                </dt>
                <dd>
                  {s.value} <span className="stat-unit">{s.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
