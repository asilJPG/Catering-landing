import {ADDRESS, BRAND, EMAIL, FORMATS, HOURS, INSTAGRAM_HREF, NAV, PHONE, PHONE_HREF, TELEGRAM_HREF} from '../data';
import {Logo} from './Header';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Банкеты, фуршеты, Coffee Break и Business Lunch в Ташкенте.</p>
          </div>
          <div>
            <h3>Связаться</h3>
            <ul>
              <li>
                <a href={PHONE_HREF}>{PHONE}</a>
              </li>
              {EMAIL && (
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
              )}
              <li>
                <a href={TELEGRAM_HREF}>Telegram-канал</a>
              </li>
              <li>
                <a href={INSTAGRAM_HREF}>Instagram</a>
              </li>
              <li>{ADDRESS}</li>
              <li>{HOURS}</li>
            </ul>
          </div>
          <div>
            <h3>Форматы</h3>
            <ul>
              {FORMATS.map(f => (
                <li key={f.id}>
                  <a href="#menus">{f.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Разделы</h3>
            <ul>
              {NAV.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          © {YEAR} {BRAND} Catering
        </p>
      </div>
    </footer>
  );
}
