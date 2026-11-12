import {ADDRESS, BRAND, EMAIL, FORMATS, HOURS, INSTAGRAM_HREF, NAV, PHONE, PHONE_HREF, TELEGRAM_HREF} from '../data';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong className="footer-logo-name">{BRAND.toUpperCase()}</strong>
            <p className="footer-tagline">
              Профессиональный халяль-кейтеринг в Ташкенте и по Узбекистану. Организация банкетов и фуршетов под ключ.
            </p>
            <div className="footer-contacts">
              <a className="footer-phone" href={PHONE_HREF}>{PHONE}</a>
              {EMAIL && <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>}
              <p className="footer-meta">{HOURS}</p>
              <p className="footer-meta">Заказ минимум за 12–24 часа</p>
            </div>
          </div>

          <div>
            <h3>УСЛУГИ</h3>
            <ul>
              {FORMATS.map(f => (
                <li key={f.id}>
                  <a href="#menus">{f.title} →</a>
                </li>
              ))}
              <li>
                <a href="#extras">Посуда и мебель →</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>РАЗДЕЛЫ</h3>
            <ul>
              {NAV.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href={TELEGRAM_HREF}>Telegram-канал</a>
              </li>
              <li>
                <a href={INSTAGRAM_HREF}>Instagram</a>
              </li>
            </ul>
          </div>

          <div className="footer-cta-col">
            <a href="#order" className="btn btn--red btn--full">
              ЗАКАЗАТЬ КЕЙТЕРИНГ
            </a>
            <div className="footer-legal">
              <p>Luma Catering Tashkent</p>
              <p>Оплата: Uzcard / Humo / Payme / Click / Б/Н с НДС</p>
              <p>{ADDRESS}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} {BRAND}</span>
          <span>{ADDRESS}</span>
        </div>
      </div>
    </footer>
  );
}
