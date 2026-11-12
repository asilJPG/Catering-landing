import {Check} from 'lucide-react';
import {EXTRAS, TABLEWARE, formatPrice, type Extra} from '../data';
import {useOrder} from '../order';

const GROUPS: {id: Extra['group']; title: string}[] = [
  {id: 'furniture', title: 'Мебель и текстиль'},
  {id: 'staff', title: 'Персонал'},
];

export function Extras() {
  const order = useOrder();

  return (
    <section className="section section--cool" id="extras">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Посуда, мебель, персонал</p>
          <h2 className="h2">Выберите, что привезти вместе с едой</h2>
          <p className="lead">
            Количество считаем сами — по числу гостей. Сейчас в расчёте {order.guests} гостей.
          </p>
        </div>

        <div className="extras-group">
          <h3>Посуда</h3>
          <ul className="grid-3" role="radiogroup" aria-label="Посуда">
            {TABLEWARE.map(t => {
              const isActive = order.tableware === t.id;
              return (
                <li key={t.id}>
                  <label className={`card option${isActive ? ' is-active' : ''}`}>
                    <input
                      type="radio"
                      name="tableware"
                      checked={isActive}
                      onChange={() => order.setTableware(t.id)}
                    />
                    <span className="option-mark">{isActive && <Check size={14} aria-hidden />}</span>
                    <span className="option-title">{t.title}</span>
                    <span className="option-text">{t.text}</span>
                    <span className="option-price">
                      {t.id === 'eco' && t.price === 0 ? 'Включена в цену' : `+ ${formatPrice(t.price)} сўм / гость`}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        {GROUPS.map(group => (
          <div className="extras-group" key={group.id}>
            <h3>{group.title}</h3>
            <ul className="grid-4">
              {EXTRAS.filter(e => e.group === group.id).map(e => {
                const isActive = order.extras.includes(e.id);
                const units = order.unitsOf(e.per);
                return (
                  <li key={e.id}>
                    <label className={`card option${isActive ? ' is-active' : ''}`}>
                      <input type="checkbox" checked={isActive} onChange={() => order.toggleExtra(e.id)} />
                      <span className="option-mark option-mark--square">
                        {isActive && <Check size={14} aria-hidden />}
                      </span>
                      <span className="option-title">{e.title}</span>
                      <span className="option-text">{e.text}</span>
                      <span className="option-price">
                        {formatPrice(e.price)} сўм / {e.unit}
                        <small>
                          нужно: {units} · {formatPrice(units * e.price)} сўм
                        </small>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
