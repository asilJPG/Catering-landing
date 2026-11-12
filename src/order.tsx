import {createContext, useContext, useMemo, useState, type ReactNode} from 'react';
import {
  FORMATS,
  MAIN_MENU,
  RENTAL_CATALOG,
  formatPrice,
  type Format,
  type FormatId,
  type MenuItem,
  type RentalItem,
} from './data';

export const MAX_GUESTS = 2000;

type Line = {label: string; note: string; sum: number};
type DishCart = Record<string, number>;

type OrderValue = {
  format: Format;
  guests: number;
  dishes: DishCart;
  dishCount: number;
  rentals: DishCart;
  rentalCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  setFormat: (id: FormatId) => void;
  setGuests: (n: number) => void;
  dishQty: (id: string) => number;
  addDish: (id: string, delta?: number) => void;
  clearDishes: () => void;
  rentalQty: (id: string) => number;
  addRental: (id: string, delta?: number) => void;
  clearRentals: () => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  lines: Line[];
  total: number;
};

const OrderContext = createContext<OrderValue | null>(null);
const ALL_DISHES: MenuItem[] = MAIN_MENU.flatMap(s => s.items);
const ALL_RENTALS: RentalItem[] = RENTAL_CATALOG.flatMap(s => s.items);

function adjustQty(prev: DishCart, id: string, delta: number): DishCart {
  const nextQty = Math.max(0, (prev[id] ?? 0) + delta);
  const copy = {...prev};
  if (nextQty === 0) delete copy[id];
  else copy[id] = nextQty;
  return copy;
}

export function OrderProvider({children}: {children: ReactNode}) {
  const [formatId, setFormatId] = useState<FormatId>('buffet');
  const [guests, setGuestsRaw] = useState(30);
  const [dishes, setDishes] = useState<DishCart>({});
  const [rentals, setRentals] = useState<DishCart>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const value = useMemo<OrderValue>(() => {
    const format = FORMATS.find(f => f.id === formatId) ?? FORMATS[0];

    const lines: Line[] = [
      {
        label: `Формат: ${format.title}`,
        note: `${guests} × ${formatPrice(format.pricePerGuest)} сўм`,
        sum: format.pricePerGuest * guests,
      },
    ];

    let dishCount = 0;
    for (const item of ALL_DISHES) {
      const q = dishes[item.id] ?? 0;
      if (q > 0) {
        dishCount += 1; // считаем позиции, а не штуки
        lines.push({
          label: item.name,
          note: `${q} × ${formatPrice(item.price)} сўм`,
          sum: q * item.price,
        });
      }
    }

    let rentalCount = 0;
    for (const item of ALL_RENTALS) {
      const q = rentals[item.id] ?? 0;
      if (q > 0) {
        rentalCount += 1;
        lines.push({
          label: item.name,
          note: `${q} × ${formatPrice(item.price)} сўм`,
          sum: q * item.price,
        });
      }
    }

    return {
      format,
      guests,
      dishes,
      dishCount,
      rentals,
      rentalCount,
      searchQuery,
      setSearchQuery,
      setFormat: id => {
        const next = FORMATS.find(f => f.id === id) ?? FORMATS[0];
        setFormatId(next.id);
        setGuestsRaw(g => Math.max(g, next.minGuests));
      },
      setGuests: n => setGuestsRaw(Math.max(1, Math.min(MAX_GUESTS, Math.round(n) || 0))),
      dishQty: id => dishes[id] ?? 0,
      addDish: (id, delta = 1) => setDishes(prev => adjustQty(prev, id, delta)),
      clearDishes: () => setDishes({}),
      rentalQty: id => rentals[id] ?? 0,
      addRental: (id, delta = 1) => setRentals(prev => adjustQty(prev, id, delta)),
      clearRentals: () => setRentals({}),
      isDrawerOpen,
      setDrawerOpen,
      lines,
      total: lines.reduce((sum, l) => sum + l.sum, 0),
    };
  }, [formatId, guests, dishes, rentals, searchQuery, isDrawerOpen]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder(): OrderValue {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder вызван вне OrderProvider');
  return ctx;
}
