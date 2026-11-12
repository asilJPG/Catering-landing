import {createContext, useContext, useMemo, useState, type ReactNode} from 'react';
import {
  EXTRAS,
  FORMATS,
  MAIN_MENU,
  TABLEWARE,
  formatPrice,
  type Format,
  type FormatId,
  type MenuItem,
  type Package,
} from './data';

export const MAX_GUESTS = 2000;

type Line = {label: string; note: string; sum: number};
type DishCart = Record<string, number>;

type OrderValue = {
  format: Format;
  pkg: Package;
  guests: number;
  tableware: string;
  extras: string[];
  dishes: DishCart;
  dishCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  setFormat: (id: FormatId) => void;
  setPkg: (id: string) => void;
  setGuests: (n: number) => void;
  setTableware: (id: string) => void;
  toggleExtra: (id: string) => void;
  dishQty: (id: string) => number;
  addDish: (id: string, delta?: number) => void;
  clearDishes: () => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  unitsOf: (per: number) => number;
  lines: Line[];
  total: number;
};

const OrderContext = createContext<OrderValue | null>(null);
const ALL_DISHES: MenuItem[] = MAIN_MENU.flatMap(s => s.items);

export function OrderProvider({children}: {children: ReactNode}) {
  const [formatId, setFormatId] = useState<FormatId>('buffet');
  const [pkgId, setPkgId] = useState('buffet-2');
  const [guests, setGuestsRaw] = useState(30);
  const [tableware, setTableware] = useState(TABLEWARE[0].id);
  const [extras, setExtras] = useState<string[]>([]);
  const [dishes, setDishes] = useState<DishCart>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const value = useMemo<OrderValue>(() => {
    const format = FORMATS.find(f => f.id === formatId) ?? FORMATS[0];
    const pkg = format.packages.find(p => p.id === pkgId) ?? format.packages[1];
    const unitsOf = (per: number) => Math.max(1, Math.ceil(guests / per));

    const lines: Line[] = [
      {
        label: `${format.title} · «${pkg.title}»`,
        note: `${guests} × ${formatPrice(pkg.price)}`,
        sum: pkg.price * guests,
      },
    ];
    const ware = TABLEWARE.find(t => t.id === tableware);
    if (ware && ware.price > 0) {
      lines.push({label: ware.title, note: `${guests} × ${formatPrice(ware.price)}`, sum: ware.price * guests});
    }
    for (const extra of EXTRAS) {
      if (!extras.includes(extra.id)) continue;
      const units = unitsOf(extra.per);
      lines.push({
        label: extra.title,
        note: `${units} × ${formatPrice(extra.price)}`,
        sum: units * extra.price,
      });
    }

    let dishCount = 0;
    for (const item of ALL_DISHES) {
      const q = dishes[item.id] ?? 0;
      if (q > 0) {
        dishCount += q;
        lines.push({
          label: item.name,
          note: `${q} × ${formatPrice(item.price)} сўм`,
          sum: q * item.price,
        });
      }
    }

    return {
      format,
      pkg,
      guests,
      tableware,
      extras,
      dishes,
      dishCount,
      searchQuery,
      setSearchQuery,
      setFormat: id => {
        const next = FORMATS.find(f => f.id === id) ?? FORMATS[0];
        setFormatId(next.id);
        setPkgId(next.packages[1].id);
        setGuestsRaw(g => Math.max(g, next.minGuests));
      },
      setPkg: setPkgId,
      setGuests: n => setGuestsRaw(Math.max(1, Math.min(MAX_GUESTS, Math.round(n) || 0))),
      setTableware,
      toggleExtra: id => setExtras(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])),
      dishQty: id => dishes[id] ?? 0,
      addDish: (id, delta = 1) =>
        setDishes(prev => {
          const nextQty = Math.max(0, (prev[id] ?? 0) + delta);
          const copy = {...prev};
          if (nextQty === 0) delete copy[id];
          else copy[id] = nextQty;
          return copy;
        }),
      clearDishes: () => setDishes({}),
      isDrawerOpen,
      setDrawerOpen,
      unitsOf,
      lines,
      total: lines.reduce((sum, l) => sum + l.sum, 0),
    };
  }, [formatId, pkgId, guests, tableware, extras, dishes, searchQuery, isDrawerOpen]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder(): OrderValue {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder вызван вне OrderProvider');
  return ctx;
}
