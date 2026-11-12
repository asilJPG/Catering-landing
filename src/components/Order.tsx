import {useEffect, useState, type FormEvent} from 'react';
import {ArrowRight, Check, Minus, Plus} from 'lucide-react';
import {FORMATS, PHONE, PHONE_HREF, formatPrice, guestsWord} from '../data';
import {MAX_GUESTS, useOrder} from '../order';

function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function Order() {
  const order = useOrder();
  const {format, pkg, guests} = order;
  const [earliest] = useState(tomorrow);

  const [guestsText, setGuestsText] = useState(String(guests));
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');

  // число гостей может поменяться снаружи (например, при смене формата)
  useEffect(() => setGuestsText(String(guests)), [guests]);

  const commitGuests = (n: number) => order.setGuests(Math.max(format.minGuests, Math.min(MAX_GUESTS, n)));

  const errors = {
    date: !date ? 'Выберите дату' : date < earliest ? 'Дата уже прошла' : undefined,
    name: name.trim().length < 2 ? 'Укажите имя' : undefined,
    phone: phone.replace(/\D/g, '').length < 9 ? 'Укажите телефон' : undefined,
  };
  const isValid = !Object.values(errors).some(Boolean);
  const err = (msg?: string) => (showErrors ? msg : undefined);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    setState('sending');
    // TODO: отправка заявки (Telegram-бот / CRM / почта). Сейчас заявка никуда не уходит.
    await new Promise(r => setTimeout(r, 700));
    setState('sent');
  };

  return (
    <section className="order" id="order">
      <div className="wrap order-grid">
        <div className="order-summary">
          <p className="eyebrow">Расчёт</p>
          <h2 className="h2">Ваше событие</h2>

          <div className="order-controls">
            <div className="field">
              <label htmlFor="o-format">Формат</label>
              <select
                id="o-format"
                className="input"
                value={format.id}
                onChange={e => order.setFormat(e.target.value as (typeof FORMATS)[number]['id'])}>
                {FORMATS.map(f => (
                  <option key={f.id} value={f.id}>
                    {f.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="o-pkg">Пакет</label>
              <select id="o-pkg" className="input" value={pkg.id} onChange={e => order.setPkg(e.target.value)}>
                {format.packages.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.title} — {formatPrice(p.price)}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="o-guests">Гостей (от {format.minGuests})</label>
              <div className="stepper">
                <button type="button" aria-label="Меньше гостей" onClick={() => commitGuests(guests - 5)}>
                  <Minus size={16} aria-hidden />
                </button>
                <input
                  id="o-guests"
                  inputMode="numeric"
                  value={guestsText}
                  onChange={e => setGuestsText(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  onBlur={() => {
                    commitGuests(Number(guestsText) || format.minGuests);
                    setGuestsText(String(Math.max(format.minGuests, Math.min(MAX_GUESTS, Number(guestsText) || 0))));
                  }}
                />
                <button type="button" aria-label="Больше гостей" onClick={() => commitGuests(guests + 5)}>
                  <Plus size={16} aria-hidden />
                </button>
              </div>
            </div>
          </div>

          <ul className="order-lines">
            {order.lines.map(line => (
              <li key={line.label}>
                <span>
                  {line.label}
                  <small>{line.note}</small>
                </span>
                <b>{formatPrice(line.sum)}</b>
              </li>
            ))}
          </ul>
          <div className="order-total" aria-live="polite">
            <span>Ориентир по бюджету</span>
            <strong>от {formatPrice(order.total)} сўм</strong>
          </div>
          <p className="order-hint">
            Посуду, мебель и персонал можно добавить <a href="#extras">в блоке выше</a>.
          </p>
        </div>

        {state === 'sent' ? (
          <div className="card form form--done" role="status">
            <span className="done-mark">
              <Check size={26} aria-hidden />
            </span>
            <h3>Спасибо, {name.trim().split(' ')[0]}!</h3>
            <p>
              Заявка принята: {format.title}, пакет «{pkg.title}», {guests} {guestsWord(guests)}. Перезвоним
              по номеру {phone}.
            </p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                setState('idle');
                setShowErrors(false);
              }}>
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <form className="card form" onSubmit={submit} noValidate>
            <h3 className="field--wide form-title">Оставьте контакты — пришлём точную смету</h3>
            <div className="field">
              <label htmlFor="o-date">Дата события</label>
              <input
                id="o-date"
                type="date"
                className={`input${err(errors.date) ? ' has-error' : ''}`}
                min={earliest}
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              {err(errors.date) && <span className="field-error">{errors.date}</span>}
            </div>
            <div className="field">
              <label htmlFor="o-name">Имя</label>
              <input
                id="o-name"
                className={`input${err(errors.name) ? ' has-error' : ''}`}
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {err(errors.name) && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field field--wide">
              <label htmlFor="o-phone">Телефон</label>
              <input
                id="o-phone"
                type="tel"
                className={`input${err(errors.phone) ? ' has-error' : ''}`}
                autoComplete="tel"
                placeholder="+998 90 000-00-00"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              {err(errors.phone) && <span className="field-error">{errors.phone}</span>}
            </div>
            <div className="field field--wide">
              <label htmlFor="o-comment">Комментарий</label>
              <input
                id="o-comment"
                className="input"
                placeholder="Площадка, время, пожелания по меню"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn--accent btn--lg field--wide" disabled={state === 'sending'}>
              {state === 'sending' ? 'Отправляем…' : 'Получить смету'}
              <ArrowRight size={20} aria-hidden />
            </button>
            <p className="form-alt field--wide">
              Или позвоните: <a href={PHONE_HREF}>{PHONE}</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/** Плашка с текущим расчётом, закреплённая внизу экрана. */
export function OrderBar() {
  const order = useOrder();
  return (
    <a className="order-bar" href="#order">
      <span>
        {order.format.title} · {order.guests} {guestsWord(order.guests)}
      </span>
      <strong>от {formatPrice(order.total)} сўм</strong>
      <ArrowRight size={18} aria-hidden />
    </a>
  );
}
