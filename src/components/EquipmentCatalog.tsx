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

  return (
    <CatalogSection
      id="equipment"
      title="Посуда и мебель"
      subtitle="Фарфор, эко-сервировка, мармиты, столы и стулья с доставкой на площадку."
      tabsLabel="Посуда и мебель"
      tabs={RENTAL_TABS}
      getQty={order.rentalQty}
      onAdd={order.addRental}
    />
  );
}
