import {ShoppingBag} from 'lucide-react';
import {BRAND} from '../data';
import {useOrder} from '../order';

export function Navbar() {
  const order = useOrder();

  return (
    <>
      <div className="uz-strip">
        <p>100% Халяль · Выездной кейтеринг по всему Узбекистану</p>
      </div>

      <header className="globalnav" id="top">
        <div className="globalnav-inner">
          <a href="#top" className="gn-brand" aria-label={BRAND}>
            <svg width="15" height="17" viewBox="0 0 16 18" fill="none" aria-hidden>
              <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.4" />
              <path d="M8 8.5V16M5 15.5H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span>{BRAND}</span>
          </a>

          <nav className="gn-links" aria-label="Навигация">
            <a href="#formats">Форматы</a>
            <a href="#menu">Меню</a>
            <a href="#equipment">Посуда и мебель</a>
            <a href="#service-details">Сервис</a>
            <a href="#delivery">Оплата</a>
            <a href="#order">Заказать</a>
          </nav>

          <button
            type="button"
            className="gn-bag"
            onClick={() => order.setDrawerOpen(true)}
            aria-label="Смета заказа">
            <ShoppingBag size={16} strokeWidth={1.6} />
            {order.dishCount + order.rentalCount > 0 && (
              <span className="gn-bag-count">{order.dishCount + order.rentalCount}</span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
