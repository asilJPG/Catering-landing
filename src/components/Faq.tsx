import {Plus} from 'lucide-react';
import {FAQ} from '../data';

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <div className="section-head">
          <h2 className="h2">Частые вопросы</h2>
        </div>
        <div className="faq-list">
          {FAQ.map(item => (
            <details key={item.q} className="card">
              <summary>
                {item.q}
                <Plus size={20} aria-hidden />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
