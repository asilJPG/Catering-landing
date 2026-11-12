import {useState} from 'react';
import {Check, Minus, Plus} from 'lucide-react';
import {formatPrice} from '../data';

export type CatalogItem = {
  id: string;
  name: string;
  desc: string;
  unit: string;
  price: number;
  image: string;
};

export type CatalogTab = {
  id: string;
  label: string;
  items: CatalogItem[];
};

type Props = {
  id: string;
  title: string;
  subtitle: string;
  altSurface?: boolean;
  tabsLabel: string;
  tabs: CatalogTab[];
  getQty: (id: string) => number;
  onAdd: (id: string, delta: number) => void;
};

/** Tabbed 4-column Apple catalog grid shared by Menu and Tableware/Furniture sections. */
export function CatalogSection({
  id,
  title,
  subtitle,
  altSurface = false,
  tabsLabel,
  tabs,
  getQty,
  onAdd,
}: Props) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active) ?? tabs[0];

  return (
    <section className={`apple-section${altSurface ? ' apple-section--alt' : ''}`} id={id}>
      <div className="apple-wrap">
        <div className="apple-sec-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="apple-tabs" role="tablist" aria-label={tabsLabel}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              className={`apple-tab${t.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        <ul className={`apple-dish-grid${altSurface ? ' apple-dish-grid--on-alt' : ''}`} key={current.id}>
          {current.items.map(item => {
            const qty = getQty(item.id);
            return (
              <li key={item.id} className="apple-dish-tile">
                <div className="apple-dish-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="apple-dish-body">
                  <h3>{item.name}</h3>
                  <p className="apple-dish-desc">{item.desc}</p>
                  <p className="apple-dish-unit">{item.unit}</p>
                </div>
                <div className="apple-dish-foot">
                  <span className="apple-dish-price">{formatPrice(item.price)} сўм</span>
                  {qty === 0 ? (
                    <button
                      type="button"
                      className="btn-apple btn-apple--filled btn-apple--xs"
                      onClick={() => onAdd(item.id, 1)}>
                      Добавить
                    </button>
                  ) : (
                    <div className="apple-stepper apple-stepper--pill">
                      <button
                        type="button"
                        onClick={() => onAdd(item.id, -1)}
                        aria-label="Уменьшить">
                        <Minus size={12} />
                      </button>
                      <span>
                        <Check size={12} style={{display: 'inline', verticalAlign: '-1px'}} /> {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => onAdd(item.id, 1)}
                        aria-label="Увеличить">
                        <Plus size={12} />
                      </button>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
