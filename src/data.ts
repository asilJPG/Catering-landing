// Всё содержимое сайта в одном месте.
// ВАЖНО: название, контакты, меню, цены и условия — заготовки. Замените на реальные перед запуском.

/** Рабочее название. Когда утвердите своё — поменяйте здесь, оно обновится по всему сайту. */
export const BRAND = 'Luma Catering';

export const PHONE = '+998 (90) 123-45-67';
export const PHONE_HREF = `tel:${PHONE.replace(/[^+\d]/g, '')}`;
export const EMAIL = 'hello@lumacatering.uz';
export const INSTAGRAM_HREF = 'https://instagram.com';
export const TELEGRAM_HREF = 'https://t.me';
export const CITY_SCRIPT = 'в Узбекистане';
export const ADDRESS = 'Работаем по всему Узбекистану';
export const HOURS = 'Ежедневно 08:00–22:00 (Узбекистан)';

/** Файлы для корпоративных клиентов. Положите PDF в папку public и впишите путь, например '/price.pdf'. */
export const PRICE_LIST_FILE = '';
export const PROPOSAL_FILE = '';

export function formatPrice(value: number): string {
  return value.toLocaleString('ru-RU');
}

export function guestsWord(n: number): string {
  const d = n % 10;
  const h = n % 100;
  if (d === 1 && h !== 11) return 'гость';
  if (d >= 2 && d <= 4 && !(h >= 12 && h <= 14)) return 'гостя';
  return 'гостей';
}

export const NAV = [
  {href: '#formats', label: 'Форматы'},
  {href: '#menus', label: 'Меню и цены'},
  {href: '#extras', label: 'Посуда и мебель'},
  {href: '#delivery', label: 'Оплата и доставка'},
  {href: '#corporate', label: 'Компаниям'},
];

export type Art = {
  shape: 'round' | 'square' | 'pill';
  cols: number;
  rows: number;
  colors: string[];
  bg: string;
};

export type FormatId = 'banquet' | 'buffet' | 'coffee';

export type Format = {
  id: FormatId;
  title: string;
  text: string;
  minGuests: number;
  pricePerGuest: number;
  image: string;
  art: Art;
};

export const FORMATS: Format[] = [
  {
    id: 'banquet',
    title: 'Банкет',
    text: 'Торжественный ужин с рассадкой, сменой блюд и официантами.',
    minGuests: 20,
    pricePerGuest: 0,
    image: '/images/format-banquet.jpg',
    art: {shape: 'round', cols: 4, rows: 3, colors: ['#7a4a2b', '#5a9a5f', '#e0563f'], bg: '#f8ead2'},
  },
  {
    id: 'buffet',
    title: 'Фуршет',
    text: 'Изящные закуски на один укус для презентаций и форумов.',
    minGuests: 15,
    pricePerGuest: 0,
    image: '/images/format-buffet.jpg',
    art: {shape: 'round', cols: 6, rows: 4, colors: ['#f6c26b', '#e0563f', '#7a4a2b', '#5a9a5f'], bg: '#fde9d2'},
  },
  {
    id: 'coffee',
    title: 'Кофе-брейк',
    text: 'Свежая выпечка, чай и кофе на перерыв.',
    minGuests: 15,
    pricePerGuest: 0,
    image: '/images/format-coffee.jpg',
    art: {shape: 'square', cols: 5, rows: 4, colors: ['#d99a4e', '#f3e3c6', '#7a4a2b', '#e59aa6'], bg: '#ece4f5'},
  },
];

/** Иконка-заглушка для позиций, у которых нет подходящего фото. */
export type IconKey =
  | 'utensils'
  | 'soup'
  | 'drumstick'
  | 'beef'
  | 'flame'
  | 'fish'
  | 'sandwich'
  | 'salad'
  | 'wheat'
  | 'martini'
  | 'apple'
  | 'cherry'
  | 'grape'
  | 'citrus'
  | 'nut'
  | 'candy'
  | 'cake'
  | 'cookie'
  | 'croissant'
  | 'coffee'
  | 'cupsoda'
  | 'glass'
  | 'flower'
  | 'table'
  | 'user';

export type MenuItem = {
  id: string;
  name: string;
  /** Состав — только если он указан в присланных файлах. */
  desc?: string;
  unit: string;
  /** Цена в сўмах за единицу из поля unit. Среднее по прайсам из присланных файлов. */
  price: number;
  /** Путь к фото. Если фото нет — рисуется плашка с иконкой. */
  image?: string;
  icon?: IconKey;
  /** Шаг заказа: штучные позиции добавляются сразу по 10, а не по одной. */
  step?: number;
  featured?: boolean;
};

const PIECE = 'за 1 шт · кратно 10';
const PLATE = 'тарелка';
const BIG_DISH = 'большое блюдо';
const MARTINI = 'мартинка';
const PORTION = 'порция';

/**
 * Меню собрано из прайсов и смет (фуршеты «по 100–300», смета на 19 января, меню Malibu от 28 июля).
 * Цена — среднее между всеми прайсами, где позиция встречалась (до 100 000 — округление до 500 сўм,
 * выше — до 5 000). Позиции без цены ни в одном файле в каталог не включены.
 */
export const MAIN_MENU: {id: string; title: string; items: MenuItem[]}[] = [
  {
    id: 'hot',
    title: 'Горячее',
    items: [
      {id: 'hot-samsa-meat', name: 'Мини-самса с рубленым мясом', unit: PIECE, price: 9500, step: 10, icon: 'wheat', featured: true},
      {id: 'hot-samsa-chicken', name: 'Мини-самса с курицей', unit: PIECE, price: 12000, step: 10, icon: 'wheat'},
      {id: 'hot-samsa-pumpkin', name: 'Мини-самса с тыквой', unit: PIECE, price: 11000, step: 10, icon: 'wheat'},
      {id: 'hot-samsa-greens', name: 'Мини-самса с зеленью', unit: PIECE, price: 11000, step: 10, icon: 'wheat'},
      {id: 'hot-crispy-chicken', name: 'Курочка в хрустящей панировке', unit: PIECE, price: 6000, step: 10, icon: 'drumstick'},
      {id: 'hot-shurpa', name: 'Шурпа «Илик»', unit: PORTION, price: 30000, icon: 'soup'},
      {id: 'hot-pirozhki', name: 'Горячие пирожки', unit: PORTION, price: 30000, icon: 'wheat'},
      {id: 'hot-plov', name: 'Праздничный плов', unit: PORTION, price: 32000, icon: 'utensils', featured: true},
    ],
  },
  {
    id: 'platters',
    title: 'Ассорти и плато',
    items: [
      {id: 'pl-meat-uz', name: 'Мясное ассорти по-узбекски', desc: 'казы, писта-гушт, тандыр-гушт, сырли-гушт, тил-рулет', unit: PLATE, price: 120000, icon: 'beef', featured: true},
      {id: 'pl-meat-deli', name: 'Мясная нарезка', desc: 'ветчина, копчёная колбаса, индейка, курица, говядина', unit: BIG_DISH, price: 210000, icon: 'beef'},
      {id: 'pl-tandir', name: 'Мясо из тандыра', unit: PLATE, price: 85000, icon: 'flame'},
      {id: 'pl-cheese', name: 'Сырное ассорти', unit: PLATE, price: 80000, icon: 'utensils'},
      {id: 'pl-cheese-big', name: 'Сырное плато «Четыре сыра»', desc: 'четыре вида сыра', unit: BIG_DISH, price: 200000, icon: 'utensils'},
      {id: 'pl-veg', name: 'Овощное ассорти', desc: 'помидоры, огурцы, зелень, редис, перец, брынза, лимон', unit: PLATE, price: 35000, icon: 'salad'},
      {id: 'pl-veg-big', name: 'Овощное плато', unit: BIG_DISH, price: 150000, icon: 'salad'},
      {id: 'pl-fish', name: 'Рыбное ассорти', unit: PLATE, price: 180000, icon: 'fish'},
      {id: 'pl-norin', name: 'Норин по-домашнему', desc: 'домашний', unit: PLATE, price: 35000, icon: 'utensils'},
      {id: 'pl-bread', name: 'Хлебная корзина', unit: 'хлебница', price: 30000, icon: 'wheat'},
      {id: 'pl-olives', name: 'Оливки и маслины', unit: MARTINI, price: 30000, icon: 'martini'},
    ],
  },
  {
    id: 'canapes',
    title: 'Канапе и брускетты',
    items: [
      {id: 'cn-sandwich', name: 'Мини-сэндвич «Фирменный»', unit: PIECE, price: 15000, step: 10, icon: 'sandwich'},
      {id: 'cn-club', name: 'Клаб-сэндвич', unit: PIECE, price: 25000, step: 10, icon: 'sandwich'},
      {id: 'cn-brus-beef', name: 'Брускетта с копчёной вырезкой', desc: 'говядина, огурцы, помидор черри, багет', unit: PIECE, price: 16500, step: 10, icon: 'utensils', featured: true},
      {id: 'cn-brus-salmon', name: 'Брускетта с лососем', desc: 'лосось, маринованные огурцы, сливочный сыр, багет', unit: PIECE, price: 35000, step: 10, icon: 'fish'},
      {id: 'cn-brus-turkey', name: 'Брускетта с индейкой', desc: 'помидор черри в кисло-сладком соусе, багет, тимьян', unit: PIECE, price: 14000, step: 10, icon: 'utensils'},
      {id: 'cn-canape-beef', name: 'Канапе с говядиной', desc: 'говядина, огурцы, помидор, оливки', unit: PIECE, price: 15000, step: 10, image: '/images/hero-buffet.jpg', featured: true},
      {id: 'cn-canape-cheese', name: 'Канапе «Три сыра»', desc: 'три вида сыра и маслины', unit: PIECE, price: 15500, step: 10, image: '/images/format-buffet.jpg'},
      {id: 'cn-canape-greek', name: 'Канапе «Греческое»', desc: 'фета, маслины, огурцы, помидор черри', unit: PIECE, price: 14000, step: 10, icon: 'utensils'},
      {id: 'cn-tart-caviar', name: 'Тарталетка с красной икрой', desc: 'красная икра и масло', unit: PIECE, price: 60000, step: 10, icon: 'fish'},
      {id: 'cn-tart-salmon', name: 'Тарталетка с лососем', unit: PIECE, price: 30000, step: 10, icon: 'fish'},
    ],
  },
  {
    id: 'salads',
    title: 'Салаты',
    items: [
      {id: 'sl-beef', name: 'Нежная говядина', desc: 'говядина, помидор, огурцы, сыр, зелень', unit: PLATE, price: 36000, icon: 'salad', featured: true},
      {id: 'sl-eggplant', name: 'Хрустящий баклажан', desc: 'баклажан в кляре', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-nest', name: 'Гнездо глухаря', desc: 'индейка, яйцо, картофель пай, майонез', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-spring', name: 'Салат «Весна»', desc: 'брынза, айсберг, помидор, зелень', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-greek', name: 'Греческий салат', unit: PLATE, price: 36000, image: '/images/dish-salad.jpg'},
      {id: 'sl-arugula', name: 'Салат с рукколой', unit: PLATE, price: 36000, icon: 'salad'},
    ],
  },
  {
    id: 'fruits',
    title: 'Фрукты и ягоды',
    items: [
      {id: 'fr-cup', name: 'Фрукты в стаканчиках', unit: 'стаканчик · кратно 10', price: 13000, step: 10, icon: 'apple', featured: true},
      {id: 'fr-skewers', name: 'Фруктовые шпажки', unit: PIECE, price: 13000, step: 10, icon: 'apple'},
      {id: 'fr-strawberry', name: 'Клубника в мартинке', unit: MARTINI, price: 15000, icon: 'cherry'},
      {id: 'fr-cherry', name: 'Вишня в мартинке', unit: MARTINI, price: 15000, icon: 'cherry'},
      {id: 'fr-apricot', name: 'Абрикос (урюк) в мартинке', unit: MARTINI, price: 15000, icon: 'citrus'},
      {id: 'fr-melon', name: 'Арбуз и дыня', unit: PLATE, price: 15000, icon: 'citrus'},
      {id: 'fr-grape', name: 'Виноград «Ризамат»', unit: PLATE, price: 25000, icon: 'grape'},
      {id: 'fr-peach', name: 'Персики белые и красные', unit: PLATE, price: 20000, icon: 'citrus'},
      {id: 'fr-assorted', name: 'Фруктовое ассорти', desc: 'сезонные фрукты', unit: PLATE, price: 80000, icon: 'apple'},
      {id: 'fr-platter', name: 'Большое фруктовое плато', unit: 'плато', price: 400000, icon: 'apple'},
      {id: 'fr-vase', name: 'Фруктовая ваза', unit: 'ваза', price: 100000, icon: 'grape'},
    ],
  },
  {
    id: 'nuts',
    title: 'Орехи и сладости',
    items: [
      {id: 'nt-pistachio', name: 'Фисташки', desc: 'турецкие и иранские', unit: MARTINI, price: 44000, icon: 'nut'},
      {id: 'nt-almond', name: 'Миндаль', desc: 'сорта: ореховый, «Президент», калибр', unit: MARTINI, price: 39000, icon: 'nut'},
      {id: 'nt-pecan', name: 'Орех пекан', unit: MARTINI, price: 37000, icon: 'nut'},
      {id: 'nt-cashew', name: 'Кешью', desc: 'турецкий: нежареный, жареный, солёный', unit: MARTINI, price: 38000, icon: 'nut'},
      {id: 'nt-dried', name: 'Сухофрукты', unit: MARTINI, price: 35000, icon: 'grape'},
      {id: 'nt-candy', name: 'Конфеты в мартинке', unit: MARTINI, price: 35000, icon: 'candy'},
      {id: 'nt-candy-big', name: 'Конфеты ассорти', unit: BIG_DISH, price: 135000, icon: 'candy'},
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    items: [
      {id: 'ds-fruit', name: 'Мини-пирожное «Фруктовое»', unit: PIECE, price: 8000, step: 10, icon: 'cake'},
      {id: 'ds-chocolate', name: 'Мини-пирожное «Шоколадное»', unit: PIECE, price: 9000, step: 10, icon: 'cake'},
      {id: 'ds-coffee', name: 'Мини-пирожное «Кофейня»', unit: PIECE, price: 8500, step: 10, icon: 'cake'},
      {id: 'ds-eclair', name: 'Эклеры в ассортименте', unit: PIECE, price: 25500, step: 10, icon: 'cake'},
      {id: 'ds-macaron', name: 'Макаронс в ассортименте', unit: PIECE, price: 15000, step: 10, image: '/images/dish-dessert.jpg', featured: true},
      {id: 'ds-croissant', name: 'Круассаны', unit: PIECE, price: 5500, step: 10, image: '/images/format-coffee.jpg', featured: true},
      {id: 'ds-hedgehog', name: 'Пирожное «Ёжик»', unit: PIECE, price: 8000, step: 10, icon: 'cake'},
      {id: 'ds-citrus-tart', name: 'Тарталетка с цитрусовым джемом', unit: PIECE, price: 9000, step: 10, icon: 'cake'},
      {id: 'ds-orange-cookie', name: 'Апельсиновое печенье', unit: PIECE, price: 7000, step: 10, icon: 'cookie'},
      {id: 'ds-lemon-cookie', name: 'Лимонное печенье', unit: PIECE, price: 7000, step: 10, icon: 'cookie'},
      {id: 'ds-oat-cookie', name: 'Овсяное печенье', unit: BIG_DISH, price: 150000, icon: 'cookie'},
      {id: 'ds-cake-plate', name: 'Ассорти пирожных', unit: PLATE, price: 70000, icon: 'cake'},
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    items: [
      {id: 'dr-espresso', name: 'Эспрессо и американо', unit: 'чашка · кратно 10', price: 25000, step: 10, icon: 'coffee'},
      {id: 'dr-instant', name: 'Кофе Jacobs', unit: 'чашка · кратно 10', price: 5500, step: 10, icon: 'coffee'},
      {id: 'dr-tea', name: 'Чай Greenfield', unit: 'порция · кратно 10', price: 3500, step: 10, icon: 'coffee'},
      {id: 'dr-mojito', name: 'Мохито фирменный', unit: 'графин', price: 45000, icon: 'cupsoda'},
      {id: 'dr-lemonade', name: 'Лимонад фирменный', unit: 'графин', price: 60000, icon: 'cupsoda'},
      {id: 'dr-water', name: 'Минеральная вода 0,33 л', unit: 'бутылка · кратно 10', price: 3500, step: 10, icon: 'glass'},
      {id: 'dr-juice', name: 'Сок, 1 л', unit: 'упаковка 1 л', price: 15500, icon: 'cupsoda'},
      {id: 'dr-fanta', name: 'Fanta, 1 л', unit: 'бутылка 1 л', price: 9000, icon: 'cupsoda'},
      {id: 'dr-cola', name: 'Cola, 1 л', unit: 'бутылка 1 л', price: 9000, icon: 'cupsoda'},
      {id: 'dr-lemon', name: 'Лимон дольками', unit: PLATE, price: 15000, icon: 'citrus'},
    ],
  },
];

export type RentalItem = {
  id: string;
  name: string;
  desc: string;
  unit: string;
  price: number;
  image?: string;
  icon?: IconKey;
  /** Цена за одного гостя: при добавлении количество берётся по числу гостей в заказе. */
  perGuest?: boolean;
};

/** Аренда и персонал — по прайсам из присланных смет, цена усреднена (см. MAIN_MENU). */
export const RENTAL_CATALOG: {id: string; title: string; items: RentalItem[]}[] = [
  {
    id: 'tableware',
    title: 'Посуда и оборудование',
    items: [
      {
        id: 'rent-set-buffet',
        name: 'Комплект посуды для фуршета',
        desc: 'тарелка, вилка, хайбол, чашка с блюдцем, чайная и десертная ложки, влажная и бумажная салфетки, сахар',
        unit: 'на 1 гостя',
        price: 16000,
        perGuest: true,
        image: '/images/rental-porcelain.jpg',
      },
      {
        id: 'rent-porcelain',
        name: 'Фарфор и стекло для банкета',
        desc: 'комплект фарфоровой посуды и стекла на одного гостя',
        unit: 'на 1 гостя',
        price: 30000,
        perGuest: true,
        image: '/images/format-banquet.jpg',
      },
      {
        id: 'rent-eco',
        name: 'Одноразовая посуда',
        desc: 'эко-посуда и приборы для лёгкого формата',
        unit: 'на 1 гостя',
        price: 15000,
        perGuest: true,
        image: '/images/rental-eco.jpg',
      },
      {
        id: 'rent-chafing',
        name: 'Мармит для горячих блюд',
        desc: 'держит горячие блюда тёплыми на всё время события',
        unit: 'за 1 шт',
        price: 160000,
        image: '/images/rental-chafing.jpg',
      },
      {
        id: 'rent-boiler',
        name: 'Барное оборудование: бойлер',
        desc: 'горячая вода для кофе и чая',
        unit: 'за 1 шт',
        price: 100000,
        icon: 'coffee',
      },
      {
        id: 'rent-vase',
        name: 'Ваза с живыми цветами',
        desc: 'живые цветы для оформления стола',
        unit: 'за 1 вазу',
        price: 100000,
        icon: 'flower',
      },
    ],
  },
  {
    id: 'furniture',
    title: 'Мебель и текстиль',
    items: [
      {
        id: 'rent-wood-table',
        name: 'Деревянный стол 90 × 180 см',
        desc: 'для фуршетной линии или рассадки гостей',
        unit: 'за 1 шт',
        price: 110000,
        image: '/images/format-buffet.jpg',
      },
      {
        id: 'rent-cocktail-table',
        name: 'Коктейльный стол 60 × 110 см',
        desc: 'высокий стол для свободного общения',
        unit: 'за 1 шт',
        price: 160000,
        icon: 'table',
      },
      {
        id: 'rent-tablecloth',
        name: 'Скатерть для коктейльного стола',
        desc: 'оформление коктейльного стола скатертью',
        unit: 'за 1 шт',
        price: 20000,
        icon: 'table',
      },
    ],
  },
  {
    id: 'staff',
    title: 'Персонал',
    items: [
      {
        id: 'staff-manager',
        name: 'Менеджер по персоналу',
        desc: 'координирует команду и подачу на площадке',
        unit: 'на мероприятие',
        price: 350000,
        icon: 'user',
      },
      {
        id: 'staff-waiter',
        name: 'Официант',
        desc: 'обслуживание гостей и столов',
        unit: 'на мероприятие',
        price: 300000,
        icon: 'user',
      },
      {
        id: 'staff-bartender',
        name: 'Бармен',
        desc: 'напитки, кофе и чай на баре',
        unit: 'на мероприятие',
        price: 335000,
        icon: 'user',
      },
      {
        id: 'staff-dishwasher',
        name: 'Посудомойка',
        desc: 'мойка посуды на площадке',
        unit: 'на мероприятие',
        price: 250000,
        icon: 'user',
      },
    ],
  },
];

/** Персонал для блока «Сервис под ключ» — берётся из каталога, чтобы цены не расходились. */
export const STAFF = (RENTAL_CATALOG.find(c => c.id === 'staff')?.items ?? []).map(i => ({
  title: i.name,
  text: `${formatPrice(i.price)} сўм ${i.unit} · ${i.desc}`,
}));

/** Самая низкая цена посуды на одного гостя — для плитки «Посуда и мебель» на главной. */
export const TABLEWARE_FROM = Math.min(
  ...(RENTAL_CATALOG.find(c => c.id === 'tableware')?.items ?? [])
    .filter(i => i.perGuest)
    .map(i => i.price),
);

export const STEPS = [
  {title: 'Соберите заказ', text: 'Формат, пакет меню, число гостей, посуда и мебель — прямо на сайте.'},
  {title: 'Получите смету', text: 'Менеджер уточнит детали и пришлёт итоговое меню с ценой.'},
  {title: 'Встречайте гостей', text: 'Привозим, накрываем, обслуживаем и убираем за собой.'},
];

export const CORPORATE = [
  {title: 'Коммерческое предложение', text: 'Форматы, пакеты и условия для вашей компании — одним документом.'},
  {title: 'Прайс-лист в сўмах', text: 'Полный список блюд, халяль-сетов и аренды с ценами в UZS.'},
  {title: 'Договор и ЭСФ (Didox)', text: 'Официальный договор, счёт-фактура и ЭСФ через Soliq / Didox.'},
  {title: 'Регулярные заказы', text: 'Кофе-брейки и фуршеты для офисов и мероприятий по всему Узбекистану.'},
];
