import {ArrowRight, AtSign, FileText, Send} from 'lucide-react';
import {CORPORATE, EMAIL, INSTAGRAM_HREF, PRICE_LIST_FILE, PROPOSAL_FILE, TELEGRAM_HREF} from '../data';

export function Corporate() {
  return (
    <section className="section section--warm" id="corporate">
      <div className="wrap corporate">
        <div className="corporate-copy">
          <p className="eyebrow">Корпоративным клиентам</p>
          <h2 className="h2">Кейтеринг для компании — по договору</h2>
          <p className="lead">
            Конференции, корпоративы, ежедневные ланчи. Пришлём коммерческое предложение и
            прайс-лист, закрепим за вами менеджера.
          </p>
          <div className="corporate-actions">
            <a className="btn btn--olive" href={PROPOSAL_FILE || '#order'} {...(PROPOSAL_FILE ? {download: true} : {})}>
              <FileText size={18} aria-hidden />
              {PROPOSAL_FILE ? 'Скачать КП' : 'Запросить КП'}
            </a>
            <a
              className="btn btn--sage-outline"
              href={PRICE_LIST_FILE || '#order'}
              {...(PRICE_LIST_FILE ? {download: true} : {})}>
              <FileText size={18} aria-hidden />
              {PRICE_LIST_FILE ? 'Скачать прайс-лист' : 'Запросить прайс-лист'}
            </a>
          </div>
          {EMAIL && (
            <p className="corporate-mail">
              Почта для заявок: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          )}
        </div>
        <ul className="corporate-list">
          {CORPORATE.map(item => (
            <li key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Socials() {
  return (
    <section className="section" id="socials">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Смотрите, как это выглядит вживую</h2>
          <p className="lead">Фото и видео с событий, новые позиции меню и свободные даты.</p>
        </div>
        <div className="socials">
          <a className="card social" href={TELEGRAM_HREF}>
            <span className="icon-box">
              <Send size={22} aria-hidden />
            </span>
            <div>
              <h3>Telegram-канал</h3>
              <p>Меню недели, акции и свободные даты.</p>
            </div>
            <ArrowRight size={20} aria-hidden />
          </a>
          <a className="card social" href={INSTAGRAM_HREF}>
            <span className="icon-box">
              <AtSign size={22} aria-hidden />
            </span>
            <div>
              <h3>Instagram</h3>
              <p>Фото столов, подачи и закулисье кухни.</p>
            </div>
            <ArrowRight size={20} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
