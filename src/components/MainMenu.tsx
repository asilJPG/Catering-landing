import {useState} from 'react';
import {ArrowRight, Minus, Plus, ShoppingBag, X} from 'lucide-react';
import {MAIN_MENU, formatPrice, type MenuItem} from '../data';
import {useOrder} from '../order';

export function MainMenu() {
  const order = useOrder();
  const [active, setActive] = useState(MAIN_MENU[0].id);
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);
  const [modalQty, setModalQty] = useState(1);

  const query = order.searchQuery.trim().toLowerCase();
  const section = MAIN_MENU.find(m => m.id === active) ?? MAIN_MENU[0];
  const visibleItems = query
    ? MAIN_MENU.flatMap(m => m.items).filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query),
      )
    : section.items;

  return (
    <section className="section section--cream" id="menu">
      <div className="wrap">
        <div className="section-row-head">
          <div>
            <h2 className="h2">Популярные блюда и закуски</h2>
            <p className="lead">
              Добавляйте отдельные позиции к готовому пакету или соберите свой фуршетный стол.
            </p>
          </div>
          <button
            type="button"
            className="btn-pill-outline"
            onClick={() => order.setDrawerOpen(true)}>
            Смета заказа ({order.dishCount}) <ArrowRight size={16} aria-hidden />
          </button>
        </div>

        {!query ? (
          <div className="tabs" role="tablist" aria-label="Разделы меню">
            {MAIN_MENU.map(m => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={m.id === active}
                className={`tab${m.id === active ? ' is-active' : ''}`}
                onClick={() => setActive(m.id)}>
                {m.title}
              </button>
            ))}
          </div>
        ) : (
          <div className="search-banner">
            <span>
              Результаты поиска по запросу «<strong>{order.searchQuery}</strong>»: найдено {visibleItems.length}
            </span>
            <button type="button" onClick={() => order.setSearchQuery('')}>
              Сбросить поиск
            </button>
          </div>
        )}

        {visibleItems.length === 0 ? (
          <div className="card empty-search">
            <p>По запросу «{order.searchQuery}» ничего не найдено. Попробуйте: «канапе», «плов», «лосось» или «пахлава».</p>
          </div>
        ) : (
          <ul className="grid-4 dish-cards" key={query ? 'search' : section.id}>
            {visibleItems.map(item => {
              const inCart = order.dishQty(item.id);
              return (
                <li key={item.id} className="card dish-card">
                  <div
                    className="dish-card-media"
                    onClick={() => {
                      setModalItem(item);
                      setModalQty(inCart || 1);
                    }}
                    role="button"
                    tabIndex={0}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="dish-card-body">
                    <h3>{item.name}</h3>
                    <p className="dish-unit">{item.unit}</p>
                    <p className="dish-card-price">{formatPrice(item.price)} сўм</p>

                    <div className="dish-controls-row">
                      <button
                        type="button"
                        className="dish-more-btn"
                        onClick={() => {
                          setModalItem(item);
                          setModalQty(inCart || 1);
                        }}>
                        Подробнее
                      </button>

                      <div className="dish-stepper" role="group" aria-label={`Количество ${item.name}`}>
                        <button
                          type="button"
                          onClick={() => order.addDish(item.id, -1)}
                          disabled={inCart === 0}
                          aria-label="Уменьшить">
                          <Minus size={13} />
                        </button>
                        <span>{inCart || 1}</span>
                        <button
                          type="button"
                          onClick={() => order.addDish(item.id, 1)}
                          aria-label="Увеличить">
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`dish-add-btn${inCart > 0 ? ' is-in-cart' : ''}`}
                      onClick={() => order.addDish(item.id, 1)}>
                      {inCart > 0 ? `В корзине (${inCart}) · +1` : 'В корзину'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Быстрый просмотр блюда ("Подробнее" как на Art of Catering) */}
      {modalItem && (
        <div className="dish-modal-backdrop" onClick={() => setModalItem(null)}>
          <div className="dish-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button
              type="button"
              className="dish-modal-close"
              onClick={() => setModalItem(null)}
              aria-label="Закрыть">
              <X size={18} />
            </button>
            <div className="dish-modal-grid">
              <div className="dish-modal-media">
                <img src={modalItem.image} alt={modalItem.name} />
              </div>
              <div className="dish-modal-body">
                <span className="pill-tag">{modalItem.unit}</span>
                <h3>{modalItem.name}</h3>
                <p className="dish-modal-desc">{modalItem.desc}</p>
                <p className="dish-modal-price">{formatPrice(modalItem.price)} сўм</p>

                <div className="dish-modal-actions">
                  <div className="dish-stepper dish-stepper--lg">
                    <button
                      type="button"
                      onClick={() => setModalQty(q => Math.max(1, q - 1))}
                      aria-label="Меньше">
                      <Minus size={14} />
                    </button>
                    <span>{modalQty}</span>
                    <button
                      type="button"
                      onClick={() => setModalQty(q => q + 1)}
                      aria-label="Больше">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn--olive"
                    style={{flex: 1}}
                    onClick={() => {
                      order.addDish(modalItem.id, modalQty);
                      setModalItem(null);
                    }}>
                    <ShoppingBag size={16} /> Добавить ({formatPrice(modalItem.price * modalQty)} сўм)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
