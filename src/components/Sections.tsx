import {
  Award,
  Calculator,
  ChefHat,
  Clock,
  CreditCard,
  House,
  Package,
  Star,
  Tag,
  Truck,
  Utensils,
  type LucideIcon,
} from 'lucide-react';
import {CASES, FEATURES, PHONE, PHONE_HREF, REVIEWS, STEPS, formatPrice} from '../data';

const ICONS: Record<string, LucideIcon> = {box: Package, clock: Clock, tag: Tag, home: House};

export function Features() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <ul className="grid-4 features-strip">
          {FEATURES.slice(0, 3).map(f => {
            const Icon = ICONS[f.icon] ?? Calculator;
            return (
              <li key={f.title} className="card feature-usp">
                <span className="icon-box-olive">
                  <Icon size={24} strokeWidth={1.6} aria-hidden />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            );
          })}
          <li className="feature-dark-card">
            <img src="/images/format-buffet.jpg" alt="Фуршетные сеты" />
            <div className="feature-dark-overlay" />
            <div className="feature-dark-body">
              <h3>Фуршетные сеты</h3>
              <a className="pill-white-cta" href="#menus">
                ОТ 0 СЎМ НА ПЕРСОНУ
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function KitchenUniqueness() {
  const pillars = [
    {
      icon: Utensils,
      title: 'Разработка меню по стандартам высокой кухни:',
      accent: 'от теста до авторских соусов',
    },
    {
      icon: Award,
      title: 'Личный контроль качества от шефа на всех этапах:',
      accent: 'от отбора фермерских продуктов до упаковки',
    },
    {
      icon: ChefHat,
      title: 'Индивидуальная адаптация меню',
      accent: 'под халяль-стандарты, веган и масштаб события',
    },
  ];

  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="kitchen-dark-banner">
          <img
            src="/images/dark-kitchen.jpg"
            alt=""
            className="kitchen-dark-bg"
            aria-hidden
          />
          <div className="kitchen-dark-scrim" />
          <div className="kitchen-dark-inner">
            <div className="kitchen-head">
              <span className="script">Уникальность</span>
              <h2>нашей кухни</h2>
            </div>

            <ul className="grid-3 kitchen-cards">
              {pillars.map(p => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="kitchen-card">
                    <span className="kitchen-icon">
                      <Icon size={28} strokeWidth={1.4} aria-hidden />
                    </span>
                    <p>
                      <strong>{p.title}</strong>{' '}
                      <span>{p.accent}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Cases() {
  return (
    <section className="section section--cream" id="cases">
      <div className="wrap">
        <div className="section-row-head">
          <div>
            <h2 className="h2">Кейсы выполненных заказов</h2>
            <p className="lead">Реальные форматы, бюджеты в сўмах и задачи, которые мы решили под ключ.</p>
          </div>
        </div>

        <div className="cases-grid">
          {CASES.map(c => (
            <article key={c.title} className="card case-card">
              <div className="case-media">
                <img src={c.image} alt={c.title} />
              </div>
              <div className="case-body">
                <h3>{c.title}</h3>
                <p className="case-sub">{c.subtitle}</p>

                <div className="case-metrics">
                  <div>
                    <small>Формат</small>
                    <strong>{c.format}</strong>
                  </div>
                  <div>
                    <small>Гостей</small>
                    <strong>{c.guests}</strong>
                  </div>
                  <div>
                    <small>Стоимость проекта</small>
                    <strong>{formatPrice(c.budget)} сўм</strong>
                  </div>
                </div>

                <div className="case-tasks">
                  <strong>Задача:</strong>
                  <ul>
                    {c.tasks.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <blockquote className="case-quote">«{c.quote}»</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  const allSteps = [
    ...STEPS,
    {
      title: 'Контроль и уборка',
      text: 'После завершения события забираем фарфор, мебель и приводим зону в порядок.',
    },
  ];

  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Как мы работаем</h2>
          <p className="lead">Простой путь от расчёта бюджета на сайте до идеальной сервировки.</p>
        </div>
        <ol className="grid-4 steps">
          {allSteps.map((s, i) => (
            <li key={s.title} className="card step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="steps-actions">
          <a className="btn btn--olive btn--lg" href="#menu">
            ПЕРЕЙТИ В МЕНЮ ДЛЯ ЗАКАЗА
          </a>
          <a className="btn btn--red btn--lg" href="#order">
            ОБСУДИТЬ МЕНЮ И УСЛОВИЯ
          </a>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section section--cream" id="reviews">
      <div className="wrap">
        <div className="section-row-head">
          <div>
            <h2 className="h2">Отзывы наших заказчиков</h2>
            <p className="lead">Средняя оценка доставки и сервировки — 5.0 из 5.</p>
          </div>
        </div>

        <ul className="grid-3 reviews-grid">
          {REVIEWS.map(r => (
            <li key={r.name} className="card review-card">
              <div className="review-head">
                <strong>{r.name}</strong>
                <span>{r.date}</span>
              </div>
              <div className="review-stars" aria-label="Оценка 5 из 5">
                {Array.from({length: 5}, (_, idx) => (
                  <Star key={idx} size={15} fill="#5c7514" stroke="#5c7514" />
                ))}
                <b>5</b>
              </div>
              <div className="review-subratings">
                <span>Качество блюд <b>5.00</b></span>
                <span>Подача <b>5.00</b></span>
                <span>Пунктуальность <b>5.00</b></span>
              </div>
              <p className="review-text">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DeliveryAndPayment() {
  return (
    <section className="section" id="delivery">
      <div className="wrap">
        <div className="delivery-head">
          <p className="eyebrow">ОПЛАТА И ДОСТАВКА</p>
          <h2 className="h2">Условия оплаты и доставки по Узбекистану</h2>
          <p className="lead">
            Гибкие условия расчёта в сўмах и пунктуальная логистика по Ташкенту, на Чарвак и в регионы.
          </p>
        </div>

        <div className="delivery-grid">
          <article className="card delivery-card">
            <div className="delivery-card-top">
              <span className="delivery-icon" aria-hidden>
                <CreditCard size={28} strokeWidth={1.6} />
              </span>
              <div>
                <span className="delivery-num">01</span>
                <h3>Условия оплаты</h3>
              </div>
            </div>

            <div className="delivery-rows">
              <div>
                <p>
                  Заказы принимаем круглосуточно на сайте или по телефону{' '}
                  <a className="delivery-phone" href={PHONE_HREF}>{PHONE}</a> с 08:00 до 22:00.
                </p>
              </div>
              <div>
                <h4>Карты и мобильные платежи</h4>
                <p>Payme, Click, Uzum Bank, карты Uzcard и Humo — без комиссии при заказе и получении.</p>
              </div>
              <div>
                <h4>Оплата наличными</h4>
                <p>Оплата в сўмах курьеру при доставке или при самовывозе с нашей фабрики-кухни.</p>
              </div>
              <div>
                <h4>Безналичный расчёт для юр. лиц</h4>
                <p>
                  Официальный договор, счёт-фактура и ЭСФ через Didox / Soliq. Заказы до{' '}
                  {formatPrice(0)} сўм — без предоплаты.
                </p>
              </div>
            </div>
          </article>

          <article className="card delivery-card">
            <div className="delivery-card-top">
              <span className="delivery-icon" aria-hidden>
                <Truck size={28} strokeWidth={1.6} />
              </span>
              <div>
                <span className="delivery-num">02</span>
                <h3>Условия доставки</h3>
              </div>
            </div>

            <div className="delivery-rows">
              <div>
                <h4>Время работы и зона</h4>
                <p>Доставка по Ташкенту ежедневно с 08:00 до 23:00 (ночные выезды — по согласованию).</p>
              </div>
              <div>
                <h4>Условия заказа</h4>
                <p>Минимальный заказ блюд — {formatPrice(0)} сўм или от 10 гостей по готовым пакетам.</p>
              </div>
              <div>
                <h4>Стоимость доставки</h4>
                <p>
                  По Ташкенту внутри ТКАД — {formatPrice(0)} сўм. При сумме от{' '}
                  {formatPrice(0)} сўм — <strong>бесплатно</strong>. Выезд в Чарвак, Бостанлык и
                  регионы рассчитывается отдельно.
                </p>
              </div>
              <div>
                <h4>Сохранность и сервис</h4>
                <p>Доставляем в термобоксах с сохранением температуры. Бесплатное ожидание курьера — 15 минут.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
