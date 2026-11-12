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
  desc: string;
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
      {id: 'hot-samsa-meat', name: 'Мини-самса с рубленым мясом', desc: 'слоёное тесто, сочная мясная начинка с луком', unit: PIECE, price: 9500, step: 10, icon: 'wheat', featured: true},
      {id: 'hot-samsa-chicken', name: 'Мини-самса с курицей', desc: 'нежное куриное филе в слоёном тесте', unit: PIECE, price: 12000, step: 10, icon: 'wheat'},
      {id: 'hot-samsa-pumpkin', name: 'Мини-самса с тыквой', desc: 'сладковатая тыква и лук в слоёном тесте', unit: PIECE, price: 11000, step: 10, icon: 'wheat'},
      {id: 'hot-samsa-greens', name: 'Мини-самса с зеленью', desc: 'свежая зелень в хрустящем тесте', unit: PIECE, price: 11000, step: 10, icon: 'wheat'},
      {id: 'hot-crispy-chicken', name: 'Курочка в хрустящей панировке', desc: 'золотистая корочка и сочное мясо внутри', unit: PIECE, price: 6000, step: 10, icon: 'drumstick'},
      {id: 'hot-shurpa', name: 'Шурпа «Илик»', desc: 'наваристый бульон на косточке', unit: PORTION, price: 30000, icon: 'soup'},
      {id: 'hot-pirozhki', name: 'Горячие пирожки', desc: 'румяные пирожки к первому блюду', unit: PORTION, price: 30000, icon: 'wheat'},
      {id: 'hot-plov', name: 'Праздничный плов', desc: 'рассыпчатый плов по-узбекски', unit: PORTION, price: 32000, icon: 'utensils', featured: true},
    ],
  },
  {
    id: 'platters',
    title: 'Ассорти и плато',
    items: [
      {id: 'pl-meat-uz', name: 'Мясное ассорти по-узбекски', desc: 'казы, писта-гушт, тандыр-гушт, сырли-гушт, тил-рулет', unit: PLATE, price: 120000, icon: 'beef', featured: true},
      {id: 'pl-meat-deli', name: 'Мясная нарезка', desc: 'ветчина, копчёная колбаса, индейка, курица, говядина', unit: BIG_DISH, price: 210000, icon: 'beef'},
      {id: 'pl-tandir', name: 'Мясо из тандыра', desc: 'нежное мясо, томлёное в тандыре', unit: PLATE, price: 85000, icon: 'flame'},
      {id: 'pl-cheese', name: 'Сырное ассорти', desc: 'нарезка из нескольких сортов сыра', unit: PLATE, price: 80000, icon: 'utensils'},
      {id: 'pl-cheese-big', name: 'Сырное плато «Четыре сыра»', desc: 'четыре вида сыра для большого стола', unit: BIG_DISH, price: 200000, icon: 'utensils'},
      {id: 'pl-veg', name: 'Овощное ассорти', desc: 'помидоры, огурцы, редис, брынза, свежая зелень', unit: PLATE, price: 35000, icon: 'salad'},
      {id: 'pl-veg-big', name: 'Овощное плато', desc: 'свежие сезонные овощи крупной нарезкой', unit: BIG_DISH, price: 150000, icon: 'salad'},
      {id: 'pl-fish', name: 'Рыбное ассорти', desc: 'нарезка из рыбных деликатесов', unit: PLATE, price: 180000, icon: 'fish'},
      {id: 'pl-norin', name: 'Норин по-домашнему', desc: 'традиционная холодная закуска', unit: PLATE, price: 35000, icon: 'utensils'},
      {id: 'pl-bread', name: 'Хлебная корзина', desc: 'ассорти свежих лепёшек и хлеба', unit: 'хлебница', price: 30000, icon: 'wheat'},
      {id: 'pl-olives', name: 'Оливки и маслины', desc: 'в стеклянной мартинке', unit: MARTINI, price: 30000, icon: 'martini'},
    ],
  },
  {
    id: 'canapes',
    title: 'Канапе и брускетты',
    items: [
      {id: 'cn-sandwich', name: 'Мини-сэндвич «Фирменный»', desc: 'на один укус, подача на шпажке', unit: PIECE, price: 15000, step: 10, icon: 'sandwich'},
      {id: 'cn-club', name: 'Клаб-сэндвич', desc: 'классический клаб-сэндвич на поджаренном хлебе', unit: PIECE, price: 25000, step: 10, icon: 'sandwich'},
      {id: 'cn-brus-beef', name: 'Брускетта с копчёной вырезкой', desc: 'говядина, огурцы, черри, хрустящий багет', unit: PIECE, price: 16500, step: 10, image: '/images/dish-bruschetta.jpg', featured: true},
      {id: 'cn-brus-salmon', name: 'Брускетта с лососем', desc: 'лосось, маринованные огурцы, сливочный сыр, багет', unit: PIECE, price: 35000, step: 10, icon: 'fish'},
      {id: 'cn-brus-turkey', name: 'Брускетта с индейкой', desc: 'черри в кисло-сладком соусе, тимьян, багет', unit: PIECE, price: 14000, step: 10, icon: 'utensils'},
      {id: 'cn-canape-beef', name: 'Канапе с говядиной', desc: 'говядина, огурцы, помидор, оливки', unit: PIECE, price: 15000, step: 10, image: '/images/hero-buffet.jpg', featured: true},
      {id: 'cn-canape-cheese', name: 'Канапе «Три сыра»', desc: 'три вида сыра и маслины', unit: PIECE, price: 15500, step: 10, image: '/images/format-buffet.jpg'},
      {id: 'cn-canape-greek', name: 'Канапе «Греческое»', desc: 'фета, маслины, огурцы, черри', unit: PIECE, price: 14000, step: 10, icon: 'utensils'},
      {id: 'cn-tart-caviar', name: 'Тарталетка с красной икрой', desc: 'красная икра и сливочное масло', unit: PIECE, price: 60000, step: 10, icon: 'fish'},
      {id: 'cn-tart-salmon', name: 'Тарталетка с лососем', desc: 'хрустящая корзинка с нежным лососем', unit: PIECE, price: 30000, step: 10, icon: 'fish'},
    ],
  },
  {
    id: 'salads',
    title: 'Салаты',
    items: [
      {id: 'sl-beef', name: 'Нежная говядина', desc: 'говядина, помидоры, огурцы, сыр, свежая зелень', unit: PLATE, price: 36000, image: '/images/dish-salad.jpg', featured: true},
      {id: 'sl-eggplant', name: 'Хрустящий баклажан', desc: 'баклажан в хрустящем кляре и свежие овощи', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-nest', name: 'Гнездо глухаря', desc: 'индейка, яйцо, хрустящий картофель, майонез', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-spring', name: 'Салат «Весна»', desc: 'брынза, айсберг, помидоры, зелень', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-greek', name: 'Греческий салат', desc: 'классический греческий салат со свежими овощами', unit: PLATE, price: 36000, icon: 'salad'},
      {id: 'sl-arugula', name: 'Салат с рукколой', desc: 'руккола и свежие овощи', unit: PLATE, price: 36000, icon: 'salad'},
    ],
  },
  {
    id: 'fruits',
    title: 'Фрукты и ягоды',
    items: [
      {id: 'fr-cup', name: 'Фрукты в стаканчиках', desc: 'порционные фрукты на один стакан', unit: 'стаканчик · кратно 10', price: 13000, step: 10, icon: 'apple', featured: true},
      {id: 'fr-skewers', name: 'Фруктовые шпажки', desc: 'свежие фрукты на шпажках', unit: PIECE, price: 13000, step: 10, icon: 'apple'},
      {id: 'fr-strawberry', name: 'Клубника в мартинке', desc: 'сочная клубника', unit: MARTINI, price: 15000, icon: 'cherry'},
      {id: 'fr-cherry', name: 'Вишня в мартинке', desc: 'спелая вишня', unit: MARTINI, price: 15000, icon: 'cherry'},
      {id: 'fr-apricot', name: 'Абрикос (урюк) в мартинке', desc: 'сезонный урюк', unit: MARTINI, price: 15000, icon: 'citrus'},
      {id: 'fr-melon', name: 'Арбуз и дыня', desc: 'охлаждённая нарезка', unit: PLATE, price: 15000, icon: 'citrus'},
      {id: 'fr-grape', name: 'Виноград «Ризамат»', desc: 'сладкий сорт винограда', unit: PLATE, price: 25000, icon: 'grape'},
      {id: 'fr-peach', name: 'Персики белые и красные', desc: 'сочные сезонные персики', unit: PLATE, price: 20000, icon: 'citrus'},
      {id: 'fr-assorted', name: 'Фруктовое ассорти', desc: 'сезонные фрукты на тарелке', unit: PLATE, price: 80000, icon: 'apple'},
      {id: 'fr-platter', name: 'Большое фруктовое плато', desc: 'сезонные фрукты для большого стола', unit: 'плато', price: 400000, icon: 'apple'},
      {id: 'fr-vase', name: 'Фруктовая ваза', desc: 'высокая ваза с фруктами в центр стола', unit: 'ваза', price: 100000, icon: 'grape'},
    ],
  },
  {
    id: 'nuts',
    title: 'Орехи и сладости',
    items: [
      {id: 'nt-pistachio', name: 'Фисташки', desc: 'турецкие и иранские фисташки', unit: MARTINI, price: 44000, icon: 'nut'},
      {id: 'nt-almond', name: 'Миндаль', desc: 'крупный миндаль разных сортов', unit: MARTINI, price: 39000, icon: 'nut'},
      {id: 'nt-pecan', name: 'Орех пекан', desc: 'в стеклянной мартинке', unit: MARTINI, price: 37000, icon: 'nut'},
      {id: 'nt-cashew', name: 'Кешью', desc: 'жареный и солёный', unit: MARTINI, price: 38000, icon: 'nut'},
      {id: 'nt-dried', name: 'Сухофрукты', desc: 'ассорти сухофруктов', unit: MARTINI, price: 35000, icon: 'grape'},
      {id: 'nt-candy', name: 'Конфеты в мартинке', desc: 'ассорти конфет', unit: MARTINI, price: 35000, icon: 'candy'},
      {id: 'nt-candy-big', name: 'Конфеты ассорти', desc: 'большое блюдо для стола', unit: BIG_DISH, price: 135000, icon: 'candy'},
    ],
  },
  {
    id: 'desserts',
    title: 'Десерты',
    items: [
      {id: 'ds-fruit', name: 'Мини-пирожное «Фруктовое»', desc: 'лёгкий бисквит со свежими фруктами', unit: PIECE, price: 8000, step: 10, icon: 'cake'},
      {id: 'ds-chocolate', name: 'Мини-пирожное «Шоколадное»', desc: 'шоколадный бисквит и крем', unit: PIECE, price: 9000, step: 10, icon: 'cake'},
      {id: 'ds-coffee', name: 'Мини-пирожное «Кофейня»', desc: 'кофейный крем на бисквите', unit: PIECE, price: 8500, step: 10, icon: 'cake'},
      {id: 'ds-eclair', name: 'Эклеры в ассортименте', desc: 'заварное тесто и нежный крем', unit: PIECE, price: 25500, step: 10, icon: 'cake'},
      {id: 'ds-macaron', name: 'Макаронс в ассортименте', desc: 'миндальное печенье с кремом разных вкусов', unit: PIECE, price: 15000, step: 10, image: '/images/dish-dessert.jpg', featured: true},
      {id: 'ds-croissant', name: 'Круассаны', desc: 'слоёные круассаны свежей выпечки', unit: PIECE, price: 5500, step: 10, image: '/images/format-coffee.jpg', featured: true},
      {id: 'ds-hedgehog', name: 'Пирожное «Ёжик»', desc: 'шоколадное пирожное в форме ёжика', unit: PIECE, price: 8000, step: 10, icon: 'cake'},
      {id: 'ds-citrus-tart', name: 'Тарталетка с цитрусовым джемом', desc: 'песочная корзинка и цитрусовый джем', unit: PIECE, price: 9000, step: 10, icon: 'cake'},
      {id: 'ds-orange-cookie', name: 'Апельсиновое печенье', desc: 'ароматное печенье с цедрой', unit: PIECE, price: 7000, step: 10, icon: 'cookie'},
      {id: 'ds-lemon-cookie', name: 'Лимонное печенье', desc: 'рассыпчатое печенье с лимоном', unit: PIECE, price: 7000, step: 10, icon: 'cookie'},
      {id: 'ds-oat-cookie', name: 'Овсяное печенье', desc: 'большое блюдо для чайного стола', unit: BIG_DISH, price: 150000, icon: 'cookie'},
      {id: 'ds-cake-plate', name: 'Ассорти пирожных', desc: 'нарезка из нескольких видов', unit: PLATE, price: 70000, icon: 'cake'},
    ],
  },
  {
    id: 'drinks',
    title: 'Напитки',
    items: [
      {id: 'dr-espresso', name: 'Эспрессо и американо', desc: 'свежесваренный зерновой кофе', unit: 'чашка · кратно 10', price: 25000, step: 10, icon: 'coffee'},
      {id: 'dr-instant', name: 'Кофе Jacobs', desc: 'растворимый кофе', unit: 'чашка · кратно 10', price: 5500, step: 10, icon: 'coffee'},
      {id: 'dr-tea', name: 'Чай Greenfield', desc: 'чёрный и зелёный', unit: 'порция · кратно 10', price: 3500, step: 10, icon: 'coffee'},
      {id: 'dr-mojito', name: 'Мохито фирменный', desc: 'освежающий лимонад с мятой и лаймом', unit: 'графин', price: 45000, icon: 'cupsoda'},
      {id: 'dr-lemonade', name: 'Лимонад фирменный', desc: 'домашний лимонад', unit: 'графин', price: 60000, icon: 'cupsoda'},
      {id: 'dr-water', name: 'Минеральная вода 0,33 л', desc: 'охлаждённая, в стекле', unit: 'бутылка · кратно 10', price: 3500, step: 10, icon: 'glass'},
      {id: 'dr-juice', name: 'Сок, 1 л', desc: 'сок в ассортименте', unit: 'упаковка 1 л', price: 15500, icon: 'cupsoda'},
      {id: 'dr-fanta', name: 'Fanta, 1 л', desc: 'газированный напиток', unit: 'бутылка 1 л', price: 9000, icon: 'cupsoda'},
      {id: 'dr-cola', name: 'Cola, 1 л', desc: 'газированный напиток', unit: 'бутылка 1 л', price: 9000, icon: 'cupsoda'},
      {id: 'dr-lemon', name: 'Лимон дольками', desc: 'свежий лимон к чаю', unit: PLATE, price: 15000, icon: 'citrus'},
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

/** Посуда: выбирается один вариант. Цена — за гостя. */
export const TABLEWARE = [
  {id: 'eco', title: 'Одноразовая эко', text: 'Крафт и бамбук. Подходит для кофе-брейков и фуршетов.', price: 0},
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
  {title: 'Регулярные заказы', text: 'Кофе-брейки и фуршеты для офисов и мероприятий по всему Узбекистану.'},
];

export const FAQ = [
  {
    q: 'За сколько нужно заказывать?',
    a: 'Кофе-брейк — за 12–24 часа. Фуршет — за 2 дня. Свадьбу или крупный выездной банкет лучше бронировать за 5–7 дней.',
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
