import {CITY_SCRIPT, FORMATS, formatPrice} from '../data';
import {useOrder} from '../order';

const lunch = FORMATS.find(f => f.id === 'lunch') ?? FORMATS[0];
const banquet = FORMATS.find(f => f.id === 'banquet') ?? FORMATS[0];
const cheapest = Math.min(...FORMATS.map(f => f.packages[0].price));

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            Кейтеринг
            <span className="hero-subline">
              <span className="script">{CITY_SCRIPT}</span>
              <span className="hero-circles" aria-hidden>
                <img src="/images/dish-canapes.jpg" alt="" />
                <img src="/images/dish-salmon.jpg" alt="" />
                <img src="/images/dish-salad.jpg" alt="" />
              </span>
            </span>
          </h1>
          <ul className="hero-list">
            <li>Фуршеты, банкеты, Coffee Break и Business Lunch (100% Халяль)</li>
            <li>Выезд по Ташкенту, на Чарвак и в регионы Узбекистана под ключ</li>
            <li>Цена от {formatPrice(cheapest)} сўм на 1 персону · Payme / Click / ЭСФ</li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn--red btn--lg" href="#order">
              ЗАКАЗАТЬ РАСЧЁТ
            </a>
            <a className="btn btn--red-outline btn--lg" href="#menu">
              ПОСМОТРЕТЬ МЕНЮ
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="/images/hero-buffet.jpg"
            alt="Кейтеринг фуршет и сервировка от Luma в Ташкенте"
          />
        </div>
      </div>
    </section>
  );
}

export function Promo() {
  const order = useOrder();
  const cards = [
    {
      format: lunch,
      script: 'Обеды в офис',
      headline: `от ${formatPrice(lunch.packages[0].price)} сўм`,
      text: 'Горячие корпоративные ланчи по будням — вкусно, сытно и точно по расписанию.',
      img: '/images/format-lunch.jpg',
      align: 'left' as const,
    },
    {
      format: banquet,
      script: 'Свадьба и банкет',
      headline: `от ${formatPrice(banquet.packages[0].price)} сўм`,
      text: 'Идеальное меню, фарфор, текстиль и сервис для самого важного торжества.',
      img: '/images/promo-cake.jpg',
      align: 'right' as const,
    },
  ];

  return (
    <section className="promo">
      <div className="wrap promo-grid">
        {cards.map(({format, script, headline, text, img, align}) => (
          <article key={format.id} className={`promo-card promo-card--${align}`}>
            <img src={img} alt={script} className="promo-photo" />
            <div className="promo-body">
              <p className="script">{script}</p>
              <p className="promo-headline">{headline}</p>
              <p className="promo-sub">на одного гостя</p>
              <p className="promo-text">{text}</p>
              <a
                className="btn btn--olive"
                href="#menus"
                onClick={() => order.setFormat(format.id)}>
                ВЫБРАТЬ МЕНЮ
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
