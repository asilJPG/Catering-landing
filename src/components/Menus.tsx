import {ArrowRight, Check, Star} from 'lucide-react';
import {FORMATS, formatPrice} from '../data';
import {useOrder} from '../order';

export function Menus() {
  const order = useOrder();
  const {format, pkg} = order;

  return (
    <section className="section" id="menus">
      <div className="wrap">
        <div className="section-row-head">
          <div>
            <p className="pill-eyebrow">
              <Star size={12} fill="currentColor" aria-hidden /> ПОПУЛЯРНЫЕ СЕТЫ
            </p>
            <h2 className="h2">Готовые решения для вашего мероприятия</h2>
            <p className="lead">Цена указана за одного гостя в сўмах. Любую позицию в пакете можно заменить.</p>
          </div>
          <a className="btn-pill-outline" href="#menu">
            Смотреть все блюда <ArrowRight size={16} aria-hidden />
          </a>
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
                  className={`btn btn--full${isActive ? ' btn--olive' : ' btn--sage-outline'}`}
                  aria-pressed={isActive}
                  onClick={() => order.setPkg(p.id)}>
                  {isActive ? 'Выбрано в расчёт' : 'Выбрать пакет'}
                </button>
              </li>
            );
          })}
        </ul>

        <a className="catalog-banner" href="#menu">
          <img src="/images/format-buffet.jpg" alt="Все фуршетные блюда Luma Catering" />
          <div className="catalog-banner-body">
            <span className="pill-tag">БОЛЕЕ 20 ПОЗИЦИЙ</span>
            <h3>Посмотреть все закуски, салаты и горячее</h3>
            <p>Для мероприятий и корпоративных заказов от 10 до 500 гостей</p>
          </div>
          <span className="round-arrow round-arrow--lg">
            <ArrowRight size={20} aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
