import {ArrowRight, MapPin} from 'lucide-react';
import {FORMATS} from '../data';
import {BoxArt} from './BoxArt';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="hero-badge">
            <MapPin size={15} aria-hidden /> Кейтеринг в Ташкенте и области
          </span>
          <h1 className="hero-title">
            Банкеты, фуршеты и ланчи <em>под ключ.</em>
          </h1>
          <p className="hero-lead">
            Четыре формата с готовыми меню и ценой на гостя. Выберите пакет, посуду и мебель — и
            сразу увидите, сколько это стоит.
          </p>
          <div className="hero-actions">
            <a className="btn btn--accent btn--lg" href="#menus">
              Меню и цены <ArrowRight size={20} aria-hidden />
            </a>
            <a className="btn btn--outline btn--lg" href="#order">
              Рассчитать событие
            </a>
          </div>
        </div>

        <div className="hero-art">
          <BoxArt art={FORMATS[1].art} className="boxart--hero boxart--a" />
          <BoxArt art={FORMATS[2].art} className="boxart--hero boxart--b" />
          <BoxArt art={FORMATS[0].art} className="boxart--hero boxart--c" />
        </div>
      </div>
    </section>
  );
}
