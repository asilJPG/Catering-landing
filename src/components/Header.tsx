import {Phone, Search, ShoppingBag, X} from 'lucide-react';
import {BRAND, FORMATS, NAV, PHONE, PHONE_HREF, formatPrice} from '../data';
import {useOrder} from '../order';

export function Logo({dark = false}: {dark?: boolean}) {
  return (
    <a className={`logo${dark ? ' logo--dark' : ''}`} href="#top" aria-label={`${BRAND} — наверх`}>
      <span className="logo-badge" aria-hidden>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20L20 4M8.5 11.5L12.5 15.5M12 7.5L16.5 12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="9.5" cy="14.5" r="2.2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="14.5" cy="9.5" r="2.2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span className="logo-badge-text">
          <b>{BRAND}</b>
          <small>Ташкент · Халяль</small>
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const order = useOrder();

  return (
    <>
      <header className="topline" id="top">
        <div className="wrap topline-row">
          <div className="topline-brand">
            <Logo />
            <p className="topline-tag">
              Кейтеринг в Ташкенте
              <br />и по всему Узбекистану
            </p>
          </div>

          <nav className="nav" aria-label="Основная навигация">
            {NAV.map(l => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="topline-contact">
            <a className="topline-phone" href={PHONE_HREF}>
              {PHONE}
            </a>
            <a className="topline-callback" href="#order">
              Перезвоните мне
            </a>
          </div>
        </div>
      </header>

      <div className="subbar">
        <div className="wrap">
          <div className="subbar-inner">
            <nav className="subbar-chips" aria-label="Быстрый переход">
              {FORMATS.map(f => (
                <a key={f.id} href="#menus" onClick={() => order.setFormat(f.id)}>
                  {f.title}
                </a>
              ))}
              <a href="#menu">Закуски и канапе</a>
              <a href="#menu">Горячее</a>
              <a href="#extras">Посуда</a>
            </nav>

            <div className="subbar-right">
              <div className="subbar-search">
                <input
                  type="search"
                  placeholder="Поиск по меню..."
                  value={order.searchQuery}
                  onChange={e => {
                    order.setSearchQuery(e.target.value);
                    if (e.target.value.trim().length === 1) {
                      document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'});
                    }
                  }}
                  aria-label="Поиск по меню"
                />
                {order.searchQuery ? (
                  <button
                    type="button"
                    className="subbar-search-clear"
                    onClick={() => order.setSearchQuery('')}
                    aria-label="Очистить поиск">
                    <X size={14} />
                  </button>
                ) : (
                  <Search size={15} className="subbar-search-icon" aria-hidden />
                )}
              </div>

              <a className="subbar-phone" href={PHONE_HREF}>
                <span>{PHONE}</span>
                <i aria-hidden>
                  <Phone size={15} />
                </i>
              </a>

              <button
                type="button"
                className="subbar-cart-btn"
                onClick={() => order.setDrawerOpen(true)}
                aria-label="Открыть смету заказа">
                <ShoppingBag size={17} />
                <span>{formatPrice(order.total)}</span>
                {order.dishCount > 0 && <em className="cart-badge">{order.dishCount}</em>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
