import {ArrowRight, Users} from 'lucide-react';
import {FORMATS, formatPrice} from '../data';
import {useOrder} from '../order';

export function Formats() {
  const order = useOrder();

  return (
    <section className="section section--cream" id="formats">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Выберите формат услуги</h2>
          <p className="lead">У каждого формата — своё меню, подача и три готовых пакета с ценой на гостя.</p>
        </div>
        <ul className="grid-4">
          {FORMATS.map(f => (
            <li key={f.id}>
              <a
                className="card format"
                href="#menus"
                onClick={() => order.setFormat(f.id)}>
                <div className="format-media">
                  <img src={f.image} alt={f.title} />
                  <span className="set-badge">
                    <Users size={14} aria-hidden /> от {f.minGuests} гостей
                  </span>
                </div>
                <div className="format-body">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <div className="format-foot">
                    <span>
                      от <strong>{formatPrice(f.packages[0].price)}</strong> сўм / гость
                    </span>
                    <span className="round-arrow">
                      <ArrowRight size={17} aria-hidden />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
