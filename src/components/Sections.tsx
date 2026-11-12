import {Clock, House, Package, Tag, type LucideIcon} from 'lucide-react';
import {FEATURES, STEPS} from '../data';

const ICONS: Record<string, LucideIcon> = {box: Package, clock: Clock, tag: Tag, home: House};

export function Features() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Почему с нами удобно</h2>
        </div>
        <ul className="grid-4">
          {FEATURES.map(f => {
            const Icon = ICONS[f.icon];
            return (
              <li key={f.title} className="card feature feature--line">
                <span className="icon-box">
                  <Icon size={22} aria-hidden />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section section--cool" id="how">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Как это работает</h2>
        </div>
        <ol className="grid-3 steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
