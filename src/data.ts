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

export type FormatId = 'banquet' | 'buffet' | 'coffee' | 'lunch';

export type Format = {
  id: FormatId;
  title: string;
  text: string;
  minGuests: number;
  pricePerGuest: number;
  image: string;
  art: Art;
  includes: string[];
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
    includes: [
      'Холодные закуски, салаты, два горячих и праздничный плов (100% Халяль)',
      'Фарфор, хрустальные бокалы, текстиль, круглые столы и стулья',
      'Официанты и шеф-повар на площадке на всё время события',
    ],
  },
  {
    id: 'buffet',
    title: 'Фуршет',
    text: 'Изящные закуски на один укус для презентаций и форумов.',
    minGuests: 15,
    pricePerGuest: 0,
    image: '/images/format-buffet.jpg',
    art: {shape: 'round', cols: 6, rows: 4, colors: ['#f6c26b', '#e0563f', '#7a4a2b', '#5a9a5f'], bg: '#fde9d2'},
    includes: [
      'Канапе, брускетты, тарталетки, горячие мини-закуски и десерты',
      'Многоуровневая подача, стеклянная посуда и скатерти в тон',
      'Бармен, официанты-ранеры и быстрая уборка площадки после события',
    ],
  },
  {
    id: 'coffee',
    title: 'Кофе-брейк',
    text: 'Свежая выпечка, чай с навватом и фильтр-кофе на перерыв.',
    minGuests: 15,
    pricePerGuest: 0,
    image: '/images/format-coffee.jpg',
    art: {shape: 'square', cols: 5, rows: 4, colors: ['#d99a4e', '#f3e3c6', '#7a4a2b', '#e59aa6'], bg: '#ece4f5'},
    includes: [
      'Свежие круассаны, мини-самса, сэндвичи и фруктовая подача',
      'Фильтр-кофе, зелёный и чёрный чай с лимоном, навват, вода и соки',
      'Сервировка к точному времени перерыва без задержек',
    ],
  },
  {
    id: 'lunch',
    title: 'Обеды в офис',
    text: 'Горячие халяль-ланчи по будням для команды по графику.',
    minGuests: 10,
    pricePerGuest: 0,
    image: '/images/format-lunch.jpg',
    art: {shape: 'pill', cols: 4, rows: 3, colors: ['#5a9a5f', '#e0563f', '#d99a4e'], bg: '#e4f1dc'},
    includes: [
      'Салат, первое блюдо, горячее с гарниром и домашняя выпечка',
      'Сбалансированное обновляемое меню на каждый рабочий день',
      'Доставка точно ко времени и ЭСФ через Didox / Soliq для юр. лиц',
    ],
  },
];

export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  unit: string;
  price: number;
  image: string;
  featured?: boolean;
};

export const MAIN_MENU: {id: string; title: string; items: MenuItem[]}[] = [
  {
    id: 'snacks',
    title: 'Закуски и канапе',
    items: [
      {id: 'snack-roastbeef', name: 'Канапе с ростбифом', desc: 'вяленый томат, горчичный крем, микрозелень', unit: '20 шт · 420 г', price: 0, image: '/images/dish-canapes.jpg', featured: true},
      {id: 'snack-samsa', name: 'Мини-самса с тыквой и говядиной', desc: 'слоёное тесто, зира, чёрный кунжут', unit: '20 шт · 600 г', price: 0, image: '/images/format-coffee.jpg', featured: true},
      {id: 'snack-salmon', name: 'Тарталетки с форелью', desc: 'мусс из копчёной форели, укроп, огурец', unit: '20 шт · 400 г', price: 0, image: '/images/dish-salmon.jpg', featured: true},
      {id: 'snack-bruschetta', name: 'Брускетта с баклажаном', desc: 'печёный баклажан, сузьма, зёрна граната', unit: '20 шт · 460 г', price: 0, image: '/images/dish-bruschetta.jpg'},
      {id: 'snack-cheese', name: 'Сырное плато с мёдом', desc: 'халяль-сыры, грецкий орех, инжир, виноград', unit: '1 кг · на 8 персон', price: 0, image: '/images/format-buffet.jpg'},
      {id: 'snack-meat', name: 'Мясное ассорти Халяль', desc: 'казы, говяжий язык, рулет из индейки, хрен', unit: '1 кг · на 8 персон', price: 0, image: '/images/dish-canapes.jpg'},
      {id: 'snack-sliders', name: 'Мини-бургеры с говядиной', desc: 'бриошь, мраморная котлета, чеддер, соус', unit: '16 шт · 960 г', price: 0, image: '/images/dish-bruschetta.jpg'},
      {id: 'snack-rolls', name: 'Рулетики из баклажана с орехом', desc: 'грецкий орех, кинза, чесночная сузьма', unit: '20 шт · 500 г', price: 0, image: '/images/dish-salad.jpg'},
    ],
  },
  {
    id: 'salads',
    title: 'Салаты и боулы',
    items: [
      {id: 'salad-achichuk', name: 'Ачичук с базиликом', desc: 'спелые томаты, красный лук, сумах', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salad.jpg', featured: true},
      {id: 'salad-quinoa', name: 'Боул с киноа и свёклой', desc: 'печёная свёкла, фета, грецкий орех, мята', unit: '1 кг · 5 порций', price: 0, image: '/images/format-lunch.jpg', featured: true},
      {id: 'salad-beef', name: 'Тёплый салат с говядиной', desc: 'хрустящий баклажан, сладкий перец, кинза', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-bruschetta.jpg', featured: true},
      {id: 'salad-caesar', name: 'Цезарь с курицей гриль', desc: 'листья ромэн, твёрдый сыр, домашние гренки', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salad.jpg'},
      {id: 'salad-greek', name: 'Греческий с брынзой', desc: 'томаты черри, огурец, оливки, орегано', unit: '1 кг · 5 порций', price: 0, image: '/images/format-lunch.jpg'},
      {id: 'salad-salmon-avocado', name: 'Салат с форелью и авокадо', desc: 'шпинат, слабосолёная форель, цитрусовая заправка', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salmon.jpg'},
      {id: 'salad-bahor', name: 'Весенний салат «Бахор»', desc: 'редис, свежий огурец, говяжья вырезка, зелень', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salad.jpg'},
      {id: 'salad-hummus', name: 'Хумус с нутом и питой', desc: 'тахини, зира, оливковое масло, кунжут', unit: '800 г · на 6 персон', price: 0, image: '/images/dish-bruschetta.jpg'},
    ],
  },
  {
    id: 'hot',
    title: 'Горячие блюда',
    items: [
      {id: 'hot-plov', name: 'Праздничный плов', desc: 'баранина, жёлтая морковь, нут, изюм, зира', unit: 'на 8 персон · 3.2 кг', price: 0, image: '/images/format-banquet.jpg', featured: true},
      {id: 'hot-shashlik', name: 'Шашлык-ассорти на углях', desc: 'баранина, говядина, курица, маринованный лук', unit: 'на 8 персон · 2.8 кг', price: 0, image: '/images/dish-grill.jpg', featured: true},
      {id: 'hot-salmon', name: 'Лосось на гриле', desc: 'сливочный соус с зеленью, молодой картофель', unit: 'на 6 персон · 1.8 кг', price: 0, image: '/images/dish-salmon.jpg', featured: true},
      {id: 'hot-kazan', name: 'Казан-кебаб из говядины', desc: 'томлёная вырезка, золотистый картофель, специи', unit: 'на 6 персон · 2.4 кг', price: 0, image: '/images/dish-grill.jpg'},
      {id: 'hot-manti', name: 'Манты с рубленным мясом', desc: 'тонкое тесто, сочная говядина, сметана и сузьма', unit: '24 шт · на 6 персон', price: 0, image: '/images/format-banquet.jpg'},
      {id: 'hot-beef-medallions', name: 'Медальоны из телятины', desc: 'перечный соус деми-глас, пюре с зеленью', unit: 'на 6 персон · 1.8 кг', price: 0, image: '/images/dish-grill.jpg'},
      {id: 'hot-chicken', name: 'Цыплёнок с розмарином', desc: 'запечённый с лимоном и молодым картофелем', unit: 'на 6 персон · 2.0 кг', price: 0, image: '/images/format-lunch.jpg'},
      {id: 'hot-veg', name: 'Овощи на углях', desc: 'баклажан, кабачок, перец, зелёное масло', unit: 'на 6 персон · 1.5 кг', price: 0, image: '/images/dish-grill.jpg'},
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    items: [
      {id: 'des-baklava', name: 'Мини-пахлава с фисташкой', desc: 'хрустящее тесто фило, фисташка, горный мёд', unit: '24 шт · 720 г', price: 0, image: '/images/dish-dessert.jpg', featured: true},
      {id: 'des-eclairs', name: 'Эклеры ассорти', desc: 'ваниль, тёмный шоколад, фисташка, малина', unit: '16 шт · 640 г', price: 0, image: '/images/dish-dessert.jpg', featured: true},
      {id: 'des-fruits', name: 'Сезонные фрукты', desc: 'клубника, виноград, груша, гранат и дыня', unit: '2 кг · на 8 персон', price: 0, image: '/images/format-buffet.jpg'},
      {id: 'des-panna', name: 'Панна-котта с облепихой', desc: 'сливки, мадагаскарская ваниль, облепиховый соус', unit: '12 шт · 960 г', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'des-cheesecake', name: 'Мини-чизкейк Сан-Себастьян', desc: 'карамельная корочка, ягодный соус', unit: '12 шт · 900 г', price: 0, image: '/images/dish-dessert.jpg'},
      {id: 'des-tart', name: 'Тарталетки с малиной и кремом', desc: 'песочная основа, заварной крем, свежая ягода', unit: '16 шт · 680 г', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'des-cakepops', name: 'Восточные сладости с орехами', desc: 'чак-чак, нуга, миндаль и курага в шоколаде', unit: '1 кг · на 10 персон', price: 0, image: '/images/dish-dessert.jpg'},
      {id: 'des-croissant', name: 'Мини-круассаны со сливками', desc: 'слоёная выпечка к чаю и кофе-брейку', unit: '20 шт · 700 г', price: 0, image: '/images/format-coffee.jpg'},
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    items: [
      {id: 'drk-tarkhun', name: 'Лимонад тархун-лайм', desc: 'свежий тархун, лайм, без консервантов', unit: '2 л · в графинах', price: 0, image: '/images/format-buffet.jpg', featured: true},
      {id: 'drk-compote', name: 'Компот из сухофруктов', desc: 'курага, чернослив, узбекские яблоки', unit: '2 л · в графинах', price: 0, image: '/images/format-banquet.jpg'},
      {id: 'drk-tea', name: 'Зелёный чай с навватом', desc: 'в термосах, свежий лимон и мята', unit: '2 л · 10 чашек', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'drk-coffee', name: 'Фильтр-кофе свежеобжаренный', desc: 'молоко, сливки и тростниковый сахар отдельно', unit: '2 л · 10 чашек', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'drk-berry', name: 'Морс из лесных ягод', desc: 'клюква, малина и чёрная смородина', unit: '2 л · в графинах', price: 0, image: '/images/format-buffet.jpg'},
      {id: 'drk-citrus', name: 'Цитрусовый лимонад с мятой', desc: 'апельсин, грейпфрут, мята и лёд', unit: '2 л · в графинах', price: 0, image: '/images/format-buffet.jpg'},
      {id: 'drk-black-tea', name: 'Чёрный чай с чабрецом', desc: 'горный чабрец, лимон, подача в самоваре/термосе', unit: '2 л · 10 чашек', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'drk-water', name: 'Вода без газа и с газом', desc: 'охлаждённая подача в стекле с лаймом', unit: '6 × 0.5 л', price: 0, image: '/images/format-buffet.jpg'},
    ],
  },
];

export const CASES = [
  {
    title: 'Офисный фуршет в Tashkent City',
    subtitle: 'Стратегическая сессия для управляющей команды',
    format: 'Доставка + фуршет под ключ',
    guests: 45,
    budget: 0,
    image: '/images/format-buffet.jpg',
    tasks: [
      'Организовать питание за 20 минут без перерыва рабочего ритма',
      'Оформить зону в корпоративном стиле с фарфором и стеклом',
      'Подать порционные канапе (100% Халяль), мини-самсу и кофе-бар',
    ],
    quote: 'Привезли точно к кофе-паузе в Tashkent City, разложили всё за 15 минут. Закрыли смету и ЭСФ по договору без задержек.',
  },
  {
    title: 'Банкет и выездной ужин на даче в Чарваке',
    subtitle: 'Торжественный вечер с официантами и шеф-поваром',
    format: 'Выездной банкет + фарфор',
    guests: 80,
    budget: 0,
    image: '/images/format-banquet.jpg',
    tasks: [
      'Сбалансированное меню: холодные закуски, 2 горячих и праздничный плов',
      'Вывоз круглых банкетных столов, текстиля и хрустальных бокалов на площадку',
      'Слаженная работа 6 официантов и финальная подача шашлыка на углях',
    ],
    quote: 'Гости до сих пор вспоминают подачу шашлыка и плова — всё было горячим и вовремя даже в горах.',
  },
];

export const REVIEWS = [
  {
    name: 'Малика Р., Tashkent City',
    date: '14 октября 2026',
    text: 'Как всегда всё на уровне! Доставили точно ко времени, закуски свежие, ростбиф и форель гости разобрали первыми. Работаем по договору и ЭСФ уже четвёртый раз.',
  },
  {
    name: 'IT Park Uzbekistan, Мирзо-Улугбек',
    date: '02 ноября 2026',
    text: 'Заказывали фуршет и кофе-брейк на митап на 80 человек. Посуда, скатерти, термосы — всё привезли и забрали сами, без лишней суеты.',
  },
  {
    name: 'Тимур А., Юнусабад',
    date: '21 сентября 2026',
    text: 'Отдельное спасибо за строгий стандарт Халяль, пунктуальность и гибкость: оперативно адаптировали часть меню и добавили горячий чай с навватом.',
  },
];

export type RentalItem = {
  id: string;
  name: string;
  desc: string;
  unit: string;
  price: number;
  image: string;
};

export const RENTAL_CATALOG: {id: string; title: string; items: RentalItem[]}[] = [
  {
    id: 'tableware',
    title: 'Посуда и подача',
    items: [
      {
        id: 'rent-porcelain',
        name: 'Фарфор и стальные приборы',
        desc: 'белые тарелки, стакан для воды, вилка, нож и льняная салфетка',
        unit: 'на 1 персону',
        price: 0,
        image: '/images/rental-porcelain.jpg',
      },
      {
        id: 'rent-eco',
        name: 'Одноразовая эко-посуда',
        desc: 'крафт-боксы с крышкой, бамбуковые приборы, стакан и салфетки',
        unit: 'на 1 персону',
        price: 0,
        image: '/images/rental-eco.jpg',
      },
      {
        id: 'rent-chafing',
        name: 'Мармиты и графины с подогревом',
        desc: 'зеркальные чафинг-диши для горячего, щипцы и стеклянные графины',
        unit: 'комплект линии',
        price: 0,
        image: '/images/rental-chafing.jpg',
      },
      {
        id: 'rent-risers',
        name: 'Горки и подставки для фуршета',
        desc: 'многоуровневые деревянные подиумы, сланец и стеклянные клоши',
        unit: 'комплект подачи',
        price: 0,
        image: '/images/format-buffet.jpg',
      },
    ],
  },
  {
    id: 'furniture',
    title: 'Мебель и текстиль',
    items: [
      {
        id: 'rent-round-table',
        name: 'Банкетные столы с текстилем',
        desc: 'круглые или длинные столы со скатертью в пол для рассадки гостей',
        unit: '1 стол · на 8 персон',
        price: 0,
        image: '/images/format-banquet.jpg',
      },
      {
        id: 'rent-cocktail-table',
        name: 'Фуршетные и коктейльные столы',
        desc: 'высокие столы для зоны приветствия и свободного общения',
        unit: '1 стол · на 6 персон',
        price: 0,
        image: '/images/hero-buffet.jpg',
      },
      {
        id: 'rent-chairs',
        name: 'Банкетные стулья с подушками',
        desc: 'удобные стулья для торжественной рассадки в зале и на выезде',
        unit: '1 стул',
        price: 0,
        image: '/images/format-banquet.jpg',
      },
      {
        id: 'rent-textile',
        name: 'Скатерти и тканевые салфетки',
        desc: 'белый и тёплый бежевый лён, юбки для фуршетной линии',
        unit: 'комплект на стол',
        price: 0,
        image: '/images/rental-porcelain.jpg',
      },
    ],
  },
];

export const STAFF = [
  {title: 'Официанты', text: 'от 0 сўм / официант · 1 специалист на 15 гостей'},
  {title: 'Бармен лимонад-бара', text: 'от 0 сўм / бармен · подача лимонадов, кофе и чая'},
  {title: 'Шеф на площадке', text: 'от 0 сўм / шеф · финальная отдача плова и горячего'},
  {title: 'Монтаж и уборка', text: 'приезжаем за 1.5 часа до гостей и забираем всё сами'},
];

/** Посуда: выбирается один вариант. Цена — за гостя. */
export const TABLEWARE = [
  {id: 'eco', title: 'Одноразовая эко', text: 'Крафт и бамбук. Подходит для ланчей и кофе-брейков.', price: 0},
  {id: 'porcelain', title: 'Фарфор и стекло', text: 'Белый фарфор, бокалы, стальные приборы.', price: 0},
  {id: 'premium', title: 'Премиум-сервировка', text: 'Дизайнерская посуда, хрусталь, подстановочные тарелки.', price: 0},
];

export type Extra = {
  id: string;
  group: 'furniture' | 'staff';
  title: string;
  text: string;
  price: number;
  /** на сколько гостей хватает одной единицы; 1 — цена за гостя */
  per: number;
  unit: string;
};

export const EXTRAS: Extra[] = [
  {id: 'cocktail-tables', group: 'furniture', title: 'Фуршетные столы', text: 'Высокие коктейльные столы со стрейч-чехлами.', price: 0, per: 12, unit: 'стол'},
  {id: 'round-tables', group: 'furniture', title: 'Банкетные столы', text: 'Круглые столы на 8 гостей.', price: 0, per: 8, unit: 'стол'},
  {id: 'chairs', group: 'furniture', title: 'Стулья', text: 'Стулья «Кьявари» с мягкой подушкой.', price: 0, per: 1, unit: 'стул'},
  {id: 'textile', group: 'furniture', title: 'Текстиль', text: 'Скатерти и тканевые салфетки в выбранном цвете.', price: 0, per: 1, unit: 'комплект'},
  {id: 'waiters', group: 'staff', title: 'Официанты', text: 'Один официант на 15 гостей, на всё событие.', price: 0, per: 15, unit: 'официант'},
  {id: 'barman', group: 'staff', title: 'Бармен', text: 'Лимонад-бар: тархун, цитрус, фильтр-кофе, чай.', price: 0, per: 60, unit: 'бармен'},
  {id: 'chef', group: 'staff', title: 'Шеф на площадке', text: 'Финальная подача горячего и контроль стола.', price: 0, per: 150, unit: 'шеф'},
];

export const FEATURES = [
  {icon: 'tag', title: 'Цены в сўмах на сайте', text: 'Стоимость на гостя видна сразу — без скрытых сервисных наценок.'},
  {icon: 'box', title: '100% Халяль под ключ', text: 'Сертифицированное мясо, посуда, мебель и персонал в одной смете.'},
  {icon: 'clock', title: 'Готовим в день события', text: 'Собственная кухня в Узбекистане готовит точно к вашему времени подачи.'},
  {icon: 'home', title: 'Для компаний и семей', text: 'Работаем с юр. лицами через Didox / Soliq или по заказу на дом.'},
] as const;

export const STEPS = [
  {title: 'Соберите заказ', text: 'Формат, пакет меню, число гостей, посуда и мебель — прямо на сайте.'},
  {title: 'Получите смету', text: 'Менеджер уточнит детали и пришлёт итоговое меню с ценой.'},
  {title: 'Встречайте гостей', text: 'Привозим, накрываем, обслуживаем и убираем за собой.'},
];

export const CORPORATE = [
  {title: 'Коммерческое предложение', text: 'Форматы, пакеты и условия для вашей компании — одним документом.'},
  {title: 'Прайс-лист в сўмах', text: 'Полный список блюд, халяль-сетов и аренды с ценами в UZS.'},
  {title: 'Договор и ЭСФ (Didox)', text: 'Официальный договор, счёт-фактура и ЭСФ через Soliq / Didox.'},
  {title: 'Регулярные заказы', text: 'Бизнес-ланчи и кофе-брейки для офисов по всему Узбекистану.'},
];

export const FAQ = [
  {
    q: 'За сколько нужно заказывать?',
    a: 'Business Lunch и Coffee Break по Узбекистану — за 12–24 часа. Фуршет — за 2 дня. Свадьбу или крупный выездной банкет лучше бронировать за 5–7 дней.',
  },
  {
    q: 'Все ли блюда соответствуют стандарту Халяль?',
    a: 'Да, на 100%. Мы закупаем только сертифицированное халяль-мясо, работаем на отдельной чистой кухне и не используем свинину или алкоголь в рецептурах.',
  },
  {
    q: 'Можно ли заменить блюда в пакете?',
    a: 'Да. Любую позицию можно заменить на блюдо из основного меню (например, добавить плов, самсу или вегетарианские боулы) и учесть пожелания гостей.',
  },
  {
    q: 'Работаете ли вы по всему Узбекистану?',
    a: 'Да! Доставка и выезд по Узбекистану — 0 сўм. Организуем банкеты, фуршеты и корпоративные выезды в любой город и на загородные площадки.',
  },
  {
    q: 'Как можно оплатить заказ?',
    a: 'Частным клиентам — через Payme, Click, Uzum, картами Uzcard / Humo или наличными курьеру в сўмах. Компаниям — перечислением на расчётный счёт РУз с оформлением ЭСФ.',
  },
];
