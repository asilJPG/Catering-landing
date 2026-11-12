import {ArrowUpRight} from 'lucide-react';
import {BRAND, FORMATS, formatPrice} from '../data';
import {useOrder} from '../order';

export function Showcase() {
  const order = useOrder();

  return (
    <>
      {/* 1. Apple Editorial First Fold: Two-Tone Headline + 4 Format Gallery Cards */}
      <section className="hero-editorial" id="formats">
        <div className="apple-wrap">
          <div className="hero-editorial-head">
            <div className="hero-editorial-copy">
              <p className="hero-eyebrow">100% Халяль · По всему Узбекистану</p>
              <h1 className="hero-editorial-title">
                {BRAND}.{' '}
                <span>Выездной кейтеринг для событий любого масштаба.</span>
              </h1>
            </div>
            <div className="hero-editorial-actions">
              <a href="#menu" className="btn-apple btn-apple--filled">
                Смотреть меню
              </a>
              <a href="#order" className="btn-apple btn-apple--outline">
                Заказать кейтеринг
              </a>
            </div>
          </div>

          <ul className="hero-shelf" aria-label="Форматы кейтеринга">
            {FORMATS.map(f => {
              const active = f.id === order.format.id;
              return (
                <li key={f.id}>
                  <a
                    href="#order"
                    className={`hero-card${active ? ' is-selected' : ''}`}
                    onClick={() => order.setFormat(f.id)}>
                    <img src={f.image} alt={f.title} />
                    <div className="hero-card-scrim" />
                    <div className="hero-card-content">
                      <span className="hero-card-meta">
                        от {f.minGuests} гостей · от {formatPrice(f.pricePerGuest)} сўм
                      </span>
                      <div className="hero-card-row">
                        <h2>{f.title}</h2>
                        <ArrowUpRight size={18} aria-hidden />
                      </div>
                      <p>{f.text}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 2. 2-Column Editorial Service Bento */}
      <section className="promo-grid-apple promo-grid-apple--spaced">
        <article className="promo-tile promo-tile--light" id="service-info">
          <div className="promo-tile-copy">
            <h2>Посуда и мебель</h2>
            <p>Фарфор, хрусталь, столы, стулья и текстиль — привезём с кухней.</p>
            <span className="promo-tile-price">от {formatPrice(0)} сўм · всё для сервировки</span>
            <div className="unit-cta">
              <a href="#equipment" className="btn-apple btn-apple--filled btn-apple--sm">
                Выбрать с фото
              </a>
            </div>
          </div>
          <div className="promo-tile-visual">
            <img src="/images/rental-porcelain.jpg" alt="Посуда, фарфор и сервировка" />
          </div>
        </article>

        <article className="promo-tile promo-tile--dark" id="corporate">
          <div className="promo-tile-copy">
            <h2>Для компаний</h2>
            <p>Договор, безналичный расчёт в сўмах и ЭСФ через Didox.</p>
            <span className="promo-tile-price">работаем с юр. лицами РУз</span>
            <div className="unit-cta">
              <a href="#order" className="btn-apple btn-apple--filled btn-apple--sm">
                Запросить КП
              </a>
            </div>
          </div>
          <div className="promo-tile-visual promo-tile-visual--bleed-dark">
            <img src="/images/dark-kitchen.jpg" alt="Корпоративный кейтеринг" />
          </div>
        </article>
      </section>
    </>
  );
}
