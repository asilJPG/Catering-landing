import {Minus, Plus, Trash2, X} from 'lucide-react';
import {MAIN_MENU, RENTAL_CATALOG, formatPrice, guestsWord} from '../data';
import {useOrder} from '../order';
import type {CatalogItem} from './CatalogSection';
import {ItemIcon} from './ItemIcon';

const ALL_DISHES = MAIN_MENU.flatMap(s => s.items);
const ALL_RENTALS = RENTAL_CATALOG.flatMap(s => s.items);

function BagItemGroup({
  title,
  count,
  items,
  getQty,
  onAdd,
  onClear,
}: {
  title: string;
  count: number;
  items: CatalogItem[];
  getQty: (id: string) => number;
  onAdd: (id: string, delta: number) => void;
  onClear: () => void;
}) {
  if (count === 0) return null;
  return (
    <div className="apple-bag-section">
      <div className="apple-bag-row-head">
        <span className="apple-bag-label">
          {title} ({count})
        </span>
        <button type="button" className="apple-link-btn" onClick={onClear}>
          <Trash2 size={12} /> Очистить
        </button>
      </div>

      <ul className="apple-bag-list">
        {items.map(item => {
          const q = getQty(item.id);
          if (q === 0) return null;
          return (
            <li key={item.id} className="apple-bag-item">
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : (
                <span className="apple-bag-thumb" aria-hidden>
                  <ItemIcon name={item.icon} size={22} />
                </span>
              )}
              <div className="apple-bag-item-info">
                <strong>{item.name}</strong>
                <small>{item.unit}</small>
                <span>{formatPrice(item.price * q)} сўм</span>
              </div>
              <div className="apple-stepper">
                <button type="button" onClick={() => onAdd(item.id, -1)} aria-label="Уменьшить">
                  <Minus size={12} />
                </button>
                <span>{q}</span>
                <button type="button" onClick={() => onAdd(item.id, 1)} aria-label="Увеличить">
                  <Plus size={12} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function BagDrawer() {
  const order = useOrder();

  if (!order.isDrawerOpen) return null;

  return (
    <div className="apple-bag-backdrop" onClick={() => order.setDrawerOpen(false)}>
      <aside
        className="apple-bag"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Смета заказа">
        <div className="apple-bag-head">
          <h3>Смета заказа</h3>
          <button
            type="button"
            className="apple-bag-close"
            onClick={() => order.setDrawerOpen(false)}
            aria-label="Закрыть">
            <X size={18} />
          </button>
        </div>

        <div className="apple-bag-body">
          <div className="apple-bag-section">
            <span className="apple-bag-label">Формат события</span>
            <p className="apple-bag-title">{order.format.title}</p>
            <p className="apple-bag-sub">
              {order.guests} {guestsWord(order.guests)} · от {formatPrice(order.format.pricePerGuest)} сўм / гость
            </p>
          </div>

          <BagItemGroup
            title="Выбранные блюда"
            count={order.dishCount}
            items={ALL_DISHES}
            getQty={order.dishQty}
            onAdd={order.addDish}
            onClear={order.clearDishes}
          />

          <BagItemGroup
            title="Посуда и мебель"
            count={order.rentalCount}
            items={ALL_RENTALS}
            getQty={order.rentalQty}
            onAdd={order.addRental}
            onClear={order.clearRentals}
          />

          <div className="apple-bag-section">
            <span className="apple-bag-label">Сводка сметы</span>
            <ul className="apple-bag-summary">
              {order.lines.map(l => (
                <li key={l.label}>
                  <span>{l.label}</span>
                  <b>{formatPrice(l.sum)} сўм</b>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="apple-bag-foot">
          <div className="apple-bag-total">
            <span>Итого</span>
            <strong>{formatPrice(order.total)} сўм</strong>
          </div>
          <a
            href="#order"
            className="btn-apple btn-apple--filled btn-apple--full"
            onClick={() => order.setDrawerOpen(false)}>
            Перейти к оформлению
          </a>
        </div>
      </aside>
    </div>
  );
}
