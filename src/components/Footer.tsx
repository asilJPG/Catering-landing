import {
  ADDRESS,
  BRAND,
  EMAIL,
  HOURS,
  INSTAGRAM_HREF,
  MAIN_MENU,
  PHONE,
  PHONE_HREF,
  TELEGRAM_HREF,
  formatPrice,
} from '../data';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="apple-footer" id="delivery">
      <div className="apple-footer-wrap">
        <div className="apple-footnotes">
          <p>
            1. Все блюда готовятся исключительно по стандарту Халяль на собственной кухне в Узбекистане в день мероприятия. Минимальный заказ блюд — {formatPrice(0)} сўм или от 10 гостей по готовым пакетам.
          </p>
          <p>
            2. Оплата и доставка по Узбекистану: принимаем Payme, Click, Uzum Bank, карты Uzcard и Humo, наличные в сўмах, а также безналичный расчёт с ЭСФ через Didox / Soliq. Выезд и доставка по всему Узбекистану — {formatPrice(0)} сўм.
          </p>
        </div>

        <nav className="apple-footer-cols" aria-label="Справочник футера">
          <div>
            <h4>Форматы</h4>
            <ul>
              <li><a href="#formats" onClick={() => undefined}>Банкеты и торжества</a></li>
              <li><a href="#formats">Выездные фуршеты</a></li>
              <li><a href="#formats">Кофе-брейк</a></li>
              <li><a href="#service-details">Посуда и сервис</a></li>
            </ul>
          </div>

          <div>
            <h4>Меню</h4>
            <ul>
              {MAIN_MENU.map(section => (
                <li key={section.id}>
                  <a href="#menu">{section.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Для бизнеса и сервис</h4>
            <ul>
              <li><a href="#equipment">Посуда и мебель</a></li>
              <li><a href="#corporate">Договор и ЭСФ (Didox)</a></li>
              <li><a href="#order">Корпоративный расчёт</a></li>
              <li><a href="#delivery">Оплата и доставка</a></li>
            </ul>
          </div>

          <div>
            <h4>Контакты</h4>
            <ul>
              <li><a href={PHONE_HREF}>{PHONE}</a></li>
              {EMAIL && <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}
              <li><a href={TELEGRAM_HREF}>Telegram</a></li>
              <li><a href={INSTAGRAM_HREF}>Instagram</a></li>
              <li><span>{HOURS}</span></li>
            </ul>
          </div>
        </nav>

        <p className="apple-footer-shop">
          Вопросы и заказы: <a href={PHONE_HREF}>{PHONE}</a> · <a href={TELEGRAM_HREF}>Telegram</a> · {ADDRESS}.
        </p>

        <div className="apple-footer-base">
          <div className="apple-footer-legal">
            <span>Copyright © {YEAR} {BRAND}. Все права защищены.</span>
            <span className="apple-footer-links">
              <a href="#delivery">Оплата и доставка</a>
              <i>|</i>
              <a href="#corporate">Юр. лицам</a>
              <i>|</i>
              <a href="#menu">Меню Халяль</a>
            </span>
          </div>
          <span className="apple-footer-country">Uzbekistan</span>
        </div>
      </div>
    </footer>
  );
}
