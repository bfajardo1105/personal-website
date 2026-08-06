import { useEffect, useState } from 'react';
import './EditorNav.css';

const TABS = [
  { id: 'hero', label: 'Terminal' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function EditorNav() {
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="editor-nav">
      <div className="titlebar">
        <div className="traffic-lights" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="titlebar-path">brant-fajardo — portfolio — ~/src</span>
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`tab-bar ${open ? 'tab-bar-open' : ''}`}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${active === tab.id ? 'tab-active' : ''}`}
            onClick={() => goTo(tab.id)}
          >
            <span className="tab-dot" aria-hidden="true" />
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default EditorNav;
