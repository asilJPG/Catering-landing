// Всё содержимое сайта в одном месте.
// ВАЖНО: название, контакты, меню, цены и условия — заготовки. Замените на реальные перед запуском.

/** Рабочее название. Когда утвердите своё — поменяйте здесь, оно обновится по всему сайту. */
export const BRAND = 'Luma Catering';

export const PHONE = '+998 (90) 123-45-67';
export const PHONE_HREF = `tel:${PHONE.replace(/[^+\d]/g, '')}`;
export const EMAIL = 'hello@lumacatering.uz';
export const INSTAGRAM_HREF = 'https://instagram.com';
export const TELEGRAM_HREF = 'https://t.me';
export const CITY_SCRIPT = 'в Ташкенте';
export const ADDRESS = 'Ташкент, Мирабадский р-н, ул. Нукус, 29';
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

export type Package = {
  id: string;
  title: string;
  /** цена за одного гостя, сўм */
  price: number;
  note: string;
  items: string[];
};

export type Format = {
  id: FormatId;
  title: string;
  text: string;
  minGuests: number;
  image: string;
  art: Art;
  packages: Package[];
};

export const FORMATS: Format[] = [
  {
    id: 'banquet',
    title: 'Банкет',
    text: 'Рассадка, горячее и официанты. Свадьбы, юбилеи, торжественные ужины.',
    minGuests: 20,
    image: '/images/format-banquet.jpg',
    art: {shape: 'round', cols: 4, rows: 3, colors: ['#7a4a2b', '#5a9a5f', '#e0563f'], bg: '#f8ead2'},
    packages: [
      {
        id: 'banquet-1',
        title: 'Классика',
        price: 0,
        note: 'Семейный праздник или небольшой юбилей',
        items: ['3 холодные закуски', '2 салата', 'Горячее на выбор: курица или говядина', 'Гарнир', 'Хлебная корзина', 'Чай и лимонад'],
      },
      {
        id: 'banquet-2',
        title: 'Праздничный',
        price: 0,
        note: 'Самый частый выбор для свадьбы и тойя',
        items: ['5 холодных закусок (100% Халяль)', '3 салата', 'Горячая закуска', 'Два горячих: телятина и рыба', 'Ташкентский праздничный плов', 'Фруктовая подача', 'Чай с навватом, лимонады, соки'],
      },
      {
        id: 'banquet-3',
        title: 'Премиум',
        price: 0,
        note: 'Когда стол — главное впечатление вечера',
        items: ['7 холодных закусок и сырная тарелка', '4 салата', '2 горячие закуски', 'Три горячих: баранина, говядина, рыба', 'Плов на курдючном масле или казан-кебаб', 'Восточный и европейский десертный стол', 'Лимонад-бар и чайная станция'],
      },
    ],
  },
  {
    id: 'buffet',
    title: 'Фуршет',
    text: 'Закуски на один укус, гости свободно общаются. Презентации, открытия, выставки.',
    minGuests: 15,
    image: '/images/format-buffet.jpg',
    art: {shape: 'round', cols: 6, rows: 4, colors: ['#f6c26b', '#e0563f', '#7a4a2b', '#5a9a5f'], bg: '#fde9d2'},
    packages: [
      {
        id: 'buffet-1',
        title: 'Лёгкий',
        price: 0,
        note: 'Короткое событие на час-полтора',
        items: ['8 закусок на гостя', '4 вида канапе', 'Брускетты', 'Овощи и соусы', 'Лимонад и вода'],
      },
      {
        id: 'buffet-2',
        title: 'Стандарт',
        price: 0,
        note: 'Полноценный фуршет на два-три часа',
        items: ['12 закусок на гостя', '6 видов канапе', 'Брускетты и тарталетки', 'Мини-сэндвичи', 'Мини-десерты', 'Лимонады, соки, вода'],
      },
      {
        id: 'buffet-3',
        title: 'Премиум',
        price: 0,
        note: 'С горячими закусками и десертным столом',
        items: ['16 закусок на гостя (Халяль)', '8 видов канапе, включая форель и говядину', 'Горячие мини-шашлычки и самса', 'Мини-бургеры', 'Сырная и фруктовая подача', 'Десертный стол', 'Лимонад-бар и чайная станция'],
      },
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee Break',
    text: 'Кофе, чай, выпечка и фрукты между сессиями. Конференции, тренинги, планёрки.',
    minGuests: 10,
    image: '/images/format-coffee.jpg',
    art: {shape: 'square', cols: 5, rows: 4, colors: ['#d99a4e', '#f3e3c6', '#7a4a2b', '#e59aa6'], bg: '#ece4f5'},
    packages: [
      {
        id: 'coffee-1',
        title: 'Экспресс',
        price: 0,
        note: 'Один короткий перерыв',
        items: ['Кофе и чай', 'Печенье', 'Мини-выпечка', 'Вода'],
      },
      {
        id: 'coffee-2',
        title: 'Стандарт',
        price: 0,
        note: 'Сладкое и солёное на один перерыв',
        items: ['Кофе и чай', 'Мини-круассаны', 'Мини-сэндвичи', 'Десерт', 'Фрукты', 'Вода и сок'],
      },
      {
        id: 'coffee-3',
        title: 'Расширенный',
        price: 0,
        note: 'Два перерыва за день',
        items: ['Кофе и чай весь день', 'Выпечка и сэндвичи', 'Канапе', 'Два вида десертов', 'Фрукты', 'Вода, сок, лимонад'],
      },
    ],
  },
  {
    id: 'lunch',
    title: 'Business Lunch',
    text: 'Горячие обеды в офис: по будням, по расписанию, для всей команды.',
    minGuests: 10,
    image: '/images/format-lunch.jpg',
    art: {shape: 'pill', cols: 4, rows: 3, colors: ['#5a9a5f', '#e0563f', '#d99a4e'], bg: '#e4f1dc'},
    packages: [
      {
        id: 'lunch-1',
        title: 'Лёгкий',
        price: 0,
        note: 'Когда не хочется тяжёлого',
        items: ['Салат', 'Суп', 'Хлеб', 'Напиток'],
      },
      {
        id: 'lunch-2',
        title: 'Полный',
        price: 0,
        note: 'Обычный рабочий обед',
        items: ['Салат', 'Суп', 'Горячее с гарниром', 'Хлеб', 'Напиток'],
      },
      {
        id: 'lunch-3',
        title: 'Большой',
        price: 0,
        note: 'С десертом и двойным горячим на выбор',
        items: ['Салат', 'Суп', 'Горячее с гарниром на выбор из двух', 'Десерт', 'Хлеб', 'Напиток'],
      },
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
};

export const MAIN_MENU: {id: string; title: string; items: MenuItem[]}[] = [
  {
    id: 'snacks',
    title: 'Закуски и канапе',
    items: [
      {id: 'snack-roastbeef', name: 'Канапе с ростбифом', desc: 'вяленый томат, горчичный крем, микрозелень', unit: '20 шт · 420 г', price: 0, image: '/images/dish-canapes.jpg'},
      {id: 'snack-samsa', name: 'Мини-самса с тыквой', desc: 'слоёное тесто, зира, кунжут', unit: '20 шт · 500 г', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'snack-salmon', name: 'Тарталетки с форелью', desc: 'мусс из копчёной форели, укроп', unit: '20 шт · 400 г', price: 0, image: '/images/dish-salmon.jpg'},
      {id: 'snack-bruschetta', name: 'Брускетта с баклажаном', desc: 'печёный баклажан, сузьма, гранат', unit: '20 шт · 460 г', price: 0, image: '/images/dish-bruschetta.jpg'},
    ],
  },
  {
    id: 'salads',
    title: 'Салаты и боулы',
    items: [
      {id: 'salad-achichuk', name: 'Ачичук с базиликом', desc: 'спелые томаты, красный лук, сумах', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salad.jpg'},
      {id: 'salad-quinoa', name: 'Киноа и печёная свёкла', desc: 'фета, грецкий орех, мята', unit: '1 кг · 5 порций', price: 0, image: '/images/format-lunch.jpg'},
      {id: 'salad-beef', name: 'Тёплый салат с говядиной', desc: 'баклажан, сладкий перец, кинза', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-bruschetta.jpg'},
      {id: 'salad-caesar', name: 'Цезарь с курицей', desc: 'ромэн, пармезан, домашние гренки', unit: '1 кг · 5 порций', price: 0, image: '/images/dish-salad.jpg'},
    ],
  },
  {
    id: 'hot',
    title: 'Горячие блюда',
    items: [
      {id: 'hot-plov', name: 'Праздничный плов', desc: 'баранина, жёлтая морковь, нут, изюм', unit: 'на 8 персон · 3.2 кг', price: 0, image: '/images/format-banquet.jpg'},
      {id: 'hot-shashlik', name: 'Шашлык-ассорти', desc: 'баранина, говядина, курица, овощи на углях', unit: 'на 8 персон · 2.8 кг', price: 0, image: '/images/dish-grill.jpg'},
      {id: 'hot-salmon', name: 'Лосось на гриле', desc: 'соус из щавеля, молодой картофель', unit: 'на 6 персон · 1.8 кг', price: 0, image: '/images/dish-salmon.jpg'},
      {id: 'hot-veg', name: 'Овощи на углях', desc: 'баклажан, кабачок, перец, зелёное масло', unit: 'на 6 персон · 1.5 кг', price: 0, image: '/images/dish-grill.jpg'},
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    items: [
      {id: 'des-baklava', name: 'Мини-пахлава с фисташкой', desc: 'фисташка, горный мёд, сливочное масло', unit: '24 шт · 720 г', price: 0, image: '/images/dish-dessert.jpg'},
      {id: 'des-panna', name: 'Панна-котта с облепихой', desc: 'сливки, ваниль, облепиховый соус', unit: '12 шт · 960 г', price: 0, image: '/images/promo-cake.jpg'},
      {id: 'des-eclairs', name: 'Эклеры ассорти', desc: 'ваниль, шоколад, малина', unit: '16 шт · 640 г', price: 0, image: '/images/dish-dessert.jpg'},
      {id: 'des-fruits', name: 'Сезонные фрукты', desc: 'отборная фруктовая тарелка на стол', unit: '2 кг', price: 0, image: '/images/format-buffet.jpg'},
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    items: [
      {id: 'drk-tarkhun', name: 'Лимонад тархун-лайм', desc: 'свежий тархун, лайм, газированная вода', unit: '2 л · в графинах', price: 0, image: '/images/format-buffet.jpg'},
      {id: 'drk-compote', name: 'Компот из сухофруктов', desc: 'курага, чернослив, яблоко', unit: '2 л · в графинах', price: 0, image: '/images/format-banquet.jpg'},
      {id: 'drk-tea', name: 'Зелёный чай с навватом', desc: 'в термосе, лимон и восточные сладости', unit: '2 л · 10 чашек', price: 0, image: '/images/format-coffee.jpg'},
      {id: 'drk-coffee', name: 'Фильтр-кофе свежеобжаренный', desc: 'молоко, сливки и тростниковый сахар отдельно', unit: '2 л · 10 чашек', price: 0, image: '/images/format-coffee.jpg'},
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
      'Сбалансированное меню: холодные закуски, 2 горячих и ташкентский плов',
      'Вывоз круглых банкетных столов, текстиля и хрустальных бокалов за пределы ТКАД',
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
  {icon: 'clock', title: 'Готовим в день события', text: 'Кухня в центре Ташкента готовит точно к вашему времени подачи.'},
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
  {title: 'Регулярные заказы', text: 'Бизнес-ланчи и кофе-брейки для офисов по всему Ташкенту.'},
];

export const FAQ = [
  {
    q: 'За сколько нужно заказывать?',
    a: 'Business Lunch и Coffee Break по Ташкенту — за 12–24 часа. Фуршет — за 2 дня. Свадьбу или крупный банкет на выезд в область (Чарвак, Бостанлык) лучше бронировать за 5–7 дней.',
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
    q: 'Доставляете ли в Чарвак и Ташкентскую область?',
    a: 'Да! Внутри ТКАД доставка от 0 сўм бесплатная (до этой суммы — 0 сўм). Выезд в Чарвак, Чимган, Бостанлык, а также корпоративные выезды по Узбекистану согласовываются индивидуально.',
  },
  {
    q: 'Как можно оплатить заказ?',
    a: 'Частным клиентам — через Payme, Click, Uzum, картами Uzcard / Humo или наличными курьеру в сўмах. Компаниям — перечислением на расчётный счёт РУз с оформлением ЭСФ.',
  },
];
