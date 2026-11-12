import {CORPORATE, STAFF, STEPS} from '../data';

export function PackagesSection() {
  return (
    <section className="apple-section apple-section--alt" id="service-details">
      <div className="apple-wrap">
        <div className="apple-sec-head">
          <h2>Сервис под ключ</h2>
          <p>Берём на себя кухню, инвентарь, официантов и закрывающие документы.</p>
        </div>

        <div className="apple-info-grid" style={{marginTop: 0}}>
          <div className="apple-info-card">
            <h3>Команда на площадке</h3>
            <p className="apple-info-lead">
              Выезжаем по всему Узбекистану вместе с кухней:
            </p>
            <ul className="apple-info-list">
              {STAFF.map(s => (
                <li key={s.title}>
                  <strong>{s.title}</strong> — {s.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="apple-info-card">
            <h3>Как мы работаем</h3>
            <ol className="apple-steps-list">
              {STEPS.map((s, idx) => (
                <li key={s.title}>
                  <span className="apple-step-num">0{idx + 1}</span>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="apple-info-card">
            <h3>Компаниям в Узбекистане</h3>
            <ul className="apple-info-list">
              {CORPORATE.map(c => (
                <li key={c.title}>
                  <strong>{c.title}</strong> — {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
