import {useState, type FormEvent} from 'react';
import {Check, Minus, Plus} from 'lucide-react';
import {FORMATS, PHONE, PHONE_HREF, formatPrice, guestsWord} from '../data';
import {MAX_GUESTS, useOrder} from '../order';

function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function Configurator() {
  const order = useOrder();
  const {format, guests} = order;
  const [earliest] = useState(tomorrow);

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const commitGuests = (n: number) =>
    order.setGuests(Math.max(format.minGuests, Math.min(MAX_GUESTS, n)));

  const errors = {
    date: !date ? 'Выберите дату' : date < earliest ? 'Укажите будущую дату' : undefined,
    name: name.trim().length < 2 ? 'Введите имя' : undefined,
    phone: phone.replace(/\D/g, '').length < 9 ? 'Введите телефон' : undefined,
  };
  const isValid = !Object.values(errors).some(Boolean);
  const err = (msg?: string) => (showErrors ? msg : undefined);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    setStatus('sending');
    await new Promise(r => setTimeout(r, 500));
    setStatus('sent');
  };

  return (
    <section className="apple-section" id="order">
      <div className="apple-order-wrap">
        <div className="apple-sec-head" style={{marginBottom: 28}}>
          <h2>Заказать кейтеринг</h2>
          <p>Выберите формат, укажите число гостей и контакты — перезвоним за 15 минут.</p>
        </div>

        <div className="conf-card">
          {/* Format selector row */}
          <div className="order-format-pills" role="group" aria-label="Формат мероприятия">
            {FORMATS.map(f => {
              const active = f.id === format.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  className={`order-format-pill${active ? ' is-selected' : ''}`}
                  onClick={() => order.setFormat(f.id)}>
                  {f.title}
                </button>
              );
            })}
          </div>

          <div className="conf-guests-row">
            <div>
              <span className="conf-aside-kicker">Гостей (от {format.minGuests})</span>
              <strong>
                {guests} {guestsWord(guests)}
              </strong>
            </div>
            <div className="apple-stepper apple-stepper--md">
              <button
                type="button"
                onClick={() => commitGuests(guests - 5)}
                aria-label="Меньше гостей">
                <Minus size={14} />
              </button>
              <span>{guests}</span>
              <button
                type="button"
                onClick={() => commitGuests(guests + 5)}
                aria-label="Больше гостей">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {(order.dishCount > 0 || order.rentalCount > 0) && (
            <div className="order-dishes-note">
              <span>
                {order.dishCount > 0 ? `Блюд: ${order.dishCount}` : ''}
                {order.dishCount > 0 && order.rentalCount > 0 ? ' · ' : ''}
                {order.rentalCount > 0 ? `Посуда и мебель: ${order.rentalCount}` : ''}
              </span>
              <button type="button" onClick={() => order.setDrawerOpen(true)}>
                Открыть список
              </button>
            </div>
          )}

          <div className="conf-total">
            <span>Ориентировочная стоимость</span>
            <strong>{formatPrice(order.total)} сўм</strong>
          </div>

          {status === 'sent' ? (
            <div className="conf-sent" role="status">
              <span className="conf-sent-badge">
                <Check size={20} />
              </span>
              <h4>Заявка отправлена</h4>
              <p>
                {name}, скоро позвоним на {phone}.
              </p>
              <button
                type="button"
                className="btn-apple btn-apple--outline btn-apple--sm"
                onClick={() => {
                  setStatus('idle');
                  setShowErrors(false);
                }}>
                Новая заявка
              </button>
            </div>
          ) : (
            <form className="conf-form" onSubmit={handleSubmit} noValidate>
              <div className="apple-field-row">
                <div className="apple-field">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className={err(errors.name) ? 'has-error' : ''}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    aria-label="Ваше имя"
                  />
                  {err(errors.name) && <span>{errors.name}</span>}
                </div>
                <div className="apple-field">
                  <input
                    type="date"
                    className={err(errors.date) ? 'has-error' : ''}
                    min={earliest}
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    aria-label="Дата события"
                  />
                  {err(errors.date) && <span>{errors.date}</span>}
                </div>
              </div>
              <div className="apple-field">
                <input
                  type="tel"
                  placeholder="+998 90 000-00-00"
                  className={err(errors.phone) ? 'has-error' : ''}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  aria-label="Телефон"
                />
                {err(errors.phone) && <span>{errors.phone}</span>}
              </div>
              <button
                type="submit"
                className="btn-apple btn-apple--filled btn-apple--full"
                disabled={status === 'sending'}>
                {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
              </button>
              <p className="conf-call-note">
                Или позвоните: <a href={PHONE_HREF}>{PHONE}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
