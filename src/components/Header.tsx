import {useEffect, useState} from 'react';
import {Phone} from 'lucide-react';
import {BRAND, INSTAGRAM_HREF, NAV, PHONE, PHONE_HREF, TELEGRAM_HREF} from '../data';

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label={`${BRAND} — наверх`}>
      <span className="logo-mark" aria-hidden />
      <span className="logo-text">
        {BRAND}
        <small>catering</small>
      </span>
    </a>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <a className="topbar-pill" href={PHONE_HREF}>
            <Phone size={13} aria-hidden /> {PHONE}
          </a>
          <div className="topbar-links">
            <a href={TELEGRAM_HREF}>Telegram-канал</a>
            <a href={INSTAGRAM_HREF}>Instagram</a>
          </div>
        </div>
      </div>

      <header className={`header${isOpen ? ' is-open' : ''}`}>
        <div className="wrap header-row">
          <Logo />
          <nav className="nav" aria-label="Основная навигация">
            {NAV.map(l => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="header-end">
            <a className="btn btn--sm header-cta" href="#order">
              Рассчитать
            </a>
            <button
              type="button"
              className="burger"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(v => !v)}>
              {isOpen ? 'Закрыть' : 'Меню'}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu" id="mobile-menu">
            <nav className="wrap" aria-label="Мобильная навигация">
              {NAV.map(l => (
                <a key={l.href} href={l.href} onClick={() => setIsOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#order" onClick={() => setIsOpen(false)}>
                Рассчитать событие
              </a>
              <a className="mobile-menu-phone" href={PHONE_HREF}>
                {PHONE}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
