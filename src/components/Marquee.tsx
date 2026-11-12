import {MARQUEE_BOTTOM, MARQUEE_TOP} from '../data';

function Row({items, reverse}: {items: string[]; reverse?: boolean}) {
  const list = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee-track${reverse ? ' is-reverse' : ''}`}>
      {list(false)}
      {list(true)}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="Что бывает в сетах">
      <Row items={MARQUEE_TOP} />
      <Row items={MARQUEE_BOTTOM} reverse />
    </div>
  );
}
