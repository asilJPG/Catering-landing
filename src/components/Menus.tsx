import {Check} from 'lucide-react';
import {FORMATS, formatPrice} from '../data';
import {useOrder} from '../order';

export function Menus() {
  const order = useOrder();
  const {format, pkg} = order;

  return (
    <section className="section section--warm" id="menus">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Меню и цены</p>
          <h2 className="h2">Готовые пакеты по форматам</h2>
          <p className="lead">Цена указана за одного гостя. Любое блюдо в пакете можно заменить.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Формат события">
          {FORMATS.map(f => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={f.id === format.id}
              className={`tab${f.id === format.id ? ' is-active' : ''}`}
              onClick={() => order.setFormat(f.id)}>
              {f.title}
            </button>
          ))}
        </div>

        <ul className="grid-3 packages" key={format.id}>
          {format.packages.map((p, i) => {
            const isActive = p.id === pkg.id;
            return (
              <li key={p.id} className={`card package${isActive ? ' is-active' : ''}`}>
                {i === 1 && <span className="package-flag">Чаще всего берут</span>}
                <h3>{p.title}</h3>
                <p className="package-note">{p.note}</p>
                <p className="package-price">
                  <strong>{formatPrice(p.price)}</strong> сўм / гость
                </p>
                <ul className="package-items">
                  {p.items.map(item => (
                    <li key={item}>
                      <Check size={16} aria-hidden /> {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`btn${isActive ? ' btn--accent' : ' btn--ghost'}`}
                  aria-pressed={isActive}
                  onClick={() => order.setPkg(p.id)}>
                  {isActive ? 'Выбрано' : 'Выбрать'}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="menus-foot">
          Минимальный заказ для формата «{format.title}» — от {format.minGuests} гостей.{' '}
          <a href="#extras">Дальше: посуда и мебель →</a>
        </p>
      </div>
    </section>
  );
}
