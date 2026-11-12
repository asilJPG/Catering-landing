import type {CSSProperties} from 'react';
import type {Art} from '../data';

/** Рисованная коробка «вид сверху» — стоит на месте фото, пока его нет. */
export function BoxArt({art, className = ''}: {art: Art; className?: string}) {
  const total = art.cols * art.rows;
  return (
    <div className={`boxart ${className}`} style={{'--art-bg': art.bg} as CSSProperties} aria-hidden>
      <div className="box" style={{'--cols': art.cols} as CSSProperties}>
        {Array.from({length: total}, (_, i) => {
          const row = Math.floor(i / art.cols);
          const style = {
            '--c': art.colors[row % art.colors.length],
            '--c2': art.colors[(row + 1) % art.colors.length],
          } as CSSProperties;
          return <span key={i} className={`bite bite--${art.shape}`} style={style} />;
        })}
      </div>
    </div>
  );
}
