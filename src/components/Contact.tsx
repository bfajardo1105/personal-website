import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const LINKS = [
  { key: 'email', value: 'brant@example.com', href: 'mailto:brant@example.com' },
  { key: 'github', value: 'github.com/brantfajardo', href: 'https://github.com' },
  { key: 'linkedin', value: 'linkedin.com/in/brantfajardo', href: 'https://linkedin.com' },
];

function Contact() {
  const ref = useReveal<HTMLDivElement>('.reveal');

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">04 · contact</p>
        <h2 className="section-title reveal">
          <span className="dim">//</span> Let's build something
        </h2>

        <p className="contact-lead reveal">
          Open to full-time roles, freelance work, and interesting
          collaborations. The fastest way to reach me is email.
        </p>

        <div className="export-block reveal">
          <div className="export-head">
            <span className="kw">export default</span> {'{'}
          </div>
          {LINKS.map((l) => (
            <a className="export-row" href={l.href} target="_blank" rel="noopener noreferrer" key={l.key}>
              <span className="export-key">{l.key}:</span>
              <span className="export-val">'{l.value}'</span>
            </a>
          ))}
          <div className="export-tail">{'}'}</div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Brant Bueno Fajardo</span>
          <span className="footer-built">Built with React &amp; Vite</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
