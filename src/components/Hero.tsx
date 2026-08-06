import { useEffect, useState } from 'react';
import './Hero.css';

type Line = { prompt: string; output?: string; accent?: string };

const LINES: Line[] = [
  { prompt: 'whoami', output: 'Brant Bueno Fajardo' },
  { prompt: 'cat role.txt', output: 'Full Stack Developer', accent: 'var(--green)' },
  {
    prompt: './intro.sh --run',
    output:
      'Building fast, well-crafted products end to end — from database schema to pixel-perfect UI.',
    accent: 'var(--text-secondary)',
  },
];

function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'prompt' | 'output' | 'done'>('prompt');
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setPhase('done');
      const t = setTimeout(() => setShowCta(true), 300);
      return () => clearTimeout(t);
    }

    const current = LINES[lineIndex];
    const text = phase === 'prompt' ? current.prompt : current.output ?? '';

    if (charIndex < text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), phase === 'prompt' ? 45 : 14);
      return () => clearTimeout(t);
    }

    if (phase === 'prompt') {
      const t = setTimeout(() => {
        setPhase('output');
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setPhase('prompt');
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-title">zsh — 80×20</span>
          </div>
          <div className="terminal-body">
            {LINES.slice(0, lineIndex).map((l, i) => (
              <div className="term-row" key={i}>
                <div className="term-line">
                  <span className="term-prompt">brant@dev ~ %</span> {l.prompt}
                </div>
                {l.output && (
                  <div className="term-output" style={{ color: l.accent }}>
                    {l.output}
                  </div>
                )}
              </div>
            ))}

            {phase !== 'done' && lineIndex < LINES.length && (
              <div className="term-row">
                <div className="term-line">
                  <span className="term-prompt">brant@dev ~ %</span>{' '}
                  {phase === 'prompt' ? LINES[lineIndex].prompt.slice(0, charIndex) : LINES[lineIndex].prompt}
                  {phase === 'prompt' && <span className="cursor" />}
                </div>
                {phase === 'output' && (
                  <div className="term-output" style={{ color: LINES[lineIndex].accent }}>
                    {(LINES[lineIndex].output ?? '').slice(0, charIndex)}
                    <span className="cursor" />
                  </div>
                )}
              </div>
            )}

            {phase === 'done' && (
              <div className="term-row">
                <div className="term-line">
                  <span className="term-prompt">brant@dev ~ %</span>
                  <span className="cursor" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`hero-cta ${showCta ? 'hero-cta-visible' : ''}`}>
          <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View work
          </button>
          <button className="btn btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
