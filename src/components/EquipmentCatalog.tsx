import {RENTAL_CATALOG} from '../data';
import {useOrder} from '../order';
import {CatalogSection, type CatalogTab} from './CatalogSection';

const ALL_RENTALS = RENTAL_CATALOG.flatMap(c => c.items);

const RENTAL_TABS: CatalogTab[] = [
  {id: 'all', label: 'Всё для площадки', items: ALL_RENTALS},
  ...RENTAL_CATALOG.map(c => ({id: c.id, label: c.title, items: c.items})),
];

export function EquipmentCatalog() {
  const order = useOrder();

  // Посуда считается на гостя: один клик добавляет столько комплектов, сколько гостей в заказе.
  const handleAdd = (id: string, delta: number) => {
    const item = ALL_RENTALS.find(i => i.id === id);
    order.addRental(id, item?.perGuest ? delta * order.guests : delta);
  };

  return (
    <CatalogSection
      id="equipment"
      title="Посуда, мебель и персонал"
      subtitle="Фарфор, мармиты, столы, скатерти, официанты и бармены — привезём и обслужим."
      tabsLabel="Посуда, мебель и персонал"
      tabs={RENTAL_TABS}
      getQty={order.rentalQty}
      onAdd={handleAdd}
    />
  );
}
