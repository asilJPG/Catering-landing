import {useState} from 'react';
import {MAIN_MENU, formatPrice} from '../data';

export function MainMenu() {
  const [active, setActive] = useState(MAIN_MENU[0].id);
  const section = MAIN_MENU.find(m => m.id === active) ?? MAIN_MENU[0];

  return (
    <section className="section" id="menu">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Основное меню</p>
          <h2 className="h2">Блюда по отдельности</h2>
          <p className="lead">
            Дополните пакет или соберите стол сами. Здесь часть меню — полный список в прайс-листе.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Разделы меню">
          {MAIN_MENU.map(m => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={m.id === active}
              className={`tab${m.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(m.id)}>
              {m.title}
            </button>
          ))}
        </div>

        <ul className="dishes" key={section.id}>
          {section.items.map(item => (
            <li key={item.name} className="card dish-row">
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="dish-price">
                <strong>{formatPrice(item.price)}</strong> сўм
                <span>{item.unit}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
