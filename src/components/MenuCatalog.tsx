import {MAIN_MENU} from '../data';
import {useOrder} from '../order';
import {CatalogSection, type CatalogTab} from './CatalogSection';

const POPULAR_ITEMS = MAIN_MENU.flatMap(s => s.items.filter(i => i.featured));

const MENU_TABS: CatalogTab[] = [
  {id: 'popular', label: 'Популярные хиты', items: POPULAR_ITEMS},
  ...MAIN_MENU.map(m => ({id: m.id, label: m.title, items: m.items})),
];

export function MenuCatalog() {
  const order = useOrder();

  return (
    <CatalogSection
      id="menu"
      title="Меню"
      subtitle="40 блюд 100% Халяль — соберите позиции для вашего события."
      altSurface
      tabsLabel="Разделы меню"
      tabs={MENU_TABS}
      getQty={order.dishQty}
      onAdd={order.addDish}
    />
  );
}
