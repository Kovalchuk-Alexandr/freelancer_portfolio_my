const projects = [
  {
    id: 0,
    title: {
        ru: 'Новостной портал ‘Blog’',
        en: 'News portal ‘Blog’'
      },
    desc: {
        ru: 'Вывод всех статей, переход на подробное описание, на той же странице без перезагрузки. Форма комментариев, с добавлением/удалением, подсчет кол-ва, вывод сообщения, если нет. ',
        en: 'Output of all articles, transition to a detailed description, on the same page without reloading. Comment form, with adding/deleting, counting, displaying a message in case of absence. '
      },
      
    skills: '(MEVN), client – Vue JS, server - Mongo DB',
    img: 'blog_sm.jpg',
    imgBig: 'blog_lg.jpg',
    site: '',
    siteTitle: 'Free Health',
    gitRef: 'https://github.com/Kovalchuk-Alexandr/Blog-MEVN',
    gitTitle: 'Web Blog'
  },
  {
    id: 1,
    title: {
        ru: 'Верстка сайта «Free Health»',
        en: "Layout of the website<br>«Free Health»"
      },
    desc: {
          ru: 'Анимация, выплывающее сбоку меню, Header появляется после прокрутки 50% экрана.',
          en: 'Animation of a menu pop-up on the side, Header appears after scrolling 50% of the screen.'
        },
      
    skills: 'jQuery',
    img: 'fh_sm.jpg',
    imgBig: 'fh_lg.jpg',
    site: 'https://kovalchuk-alexandr.github.io/Free-Health/',
    siteTitle: 'Free-Health',
    gitRef: 'https://github.com/Kovalchuk-Alexandr/Free-Health.git',
    gitTitle: 'Free-Health'
  },
  {
    id: 2,
    title: {
      ru: 'Интернет-магазин ',
      en: 'Online store'
    },
    desc: {
      ru: 'Корзина товаров, появляющаяся сбоку, добавление товаров не больше, чем на складе, удаление, авто-подсчет количества и стоимости, фильтр по категориям, поиск по названию, переход на страницу товара, анимация.',
      en: 'A store cart appearing from the side, adding items no more than in stock, deleting, auto-calculating quantity and cost, filter by category, search by name, following to the product page, animation.'
    },
      
    skills: 'client - Java Script, server - Mongo DB',
    img: 'e-shop_sm.jpg',
    imgBig: 'e-shop_lg.jpg',
    site: 'https://kovalchuk-alexandr.github.io/eshop_local/',
    siteTitle: 'E-Shop',
    gitRef: 'https://github.com/Kovalchuk-Alexandr/eshop-js.git',
    gitTitle: 'E-Shop'
  },
  {
    id: 3,
    title: {
      ru: 'Портфолио фрилансера',
      en: 'Freelancer portfolio '
    },
    desc: {
      ru: 'Многостраничный сайт-портфолио. "Подробно". Ru/En язык. Светлая/Темная темы. Адаптив.',
      en: 'Multi-pages portfolio site. "Details." Ru/En language. Light/Dark themes. Adaptive.'
    },
      
    skills: 'Java Script',
    img: 'fl_portfolio_sm.jpg',
    imgBig: 'fl_portfolio_lg.jpg',
    site: 'https://kovalchuk-alexandr.github.io/freelancer_portfolio_my/',
    siteTitle: 'Freelancer portfolio',
    gitRef: '',
    gitTitle: ''
  },
  {
    id: 4,
    title: {
        ru: 'Портфолио',
        en: 'Portfolio '
      },
    desc: {
        ru: 'Одностраничный сайт-портфолио. "Подробно". Адаптив.',
        en: 'One-page portfolio website. "Details." Adaptive.'
      },
      
    skills: 'Java Script',
    img: 'portfolio1_sm.jpg',
    imgBig: 'portfolio1_lg.jpg',
    site: 'https://kovalchuk-alexandr.github.io/freelancer_portfolio_my/',
    siteTitle: 'Freelancer portfolio',
    gitRef: '',
    gitTitle: ''
  },
  {
    id: 5,
    title: {
      ru: 'Простой сайт на jQuery ',
      en: 'Simple jQuery website'
      },
    desc: {
      ru: 'Одностраничный сайт. Карусель. Боковое меню. Анимация',
      en: 'One page site. Carousel. Sidebar. Animation'
      },
      
    skills: 'jQuery',
    img: 'jquery_sm.jpg',
    imgBig: 'jquery_lg.jpg',
    site: 'https://kovalchuk-alexandr.github.io/jQuery/',
    siteTitle: 'Washoo',
    gitRef: 'https://github.com/Kovalchuk-Alexandr/jQuery.git',
    gitTitle: 'Washoo'
  },
];


// Названия статических надписей
const globalTexts = {
    "greating": {
      ru: "Приветствую, я",
      en: "Hi, my name is ",
    },
    "name": {
      ru: "Александр Ковальчук",
      en: "Alexander Kovalchuk",
    },
    "aboutme": {
      ru: "фронтэнд разработчик",
      en: "a frontend developer",
    },
    "slogan": {
      ru: "со страстью к знаниям и творчеству",
      en: "with passion for learning and creating",
    },
    "btn-load": {
      ru: "Загрузить резюме",
      en: "Download CV",
    },
    "projects": {
      ru: "Проекты",
      en: "Projects",
    },
    "projects-mn": {
      ru: "Проекты",
      en: "Projects",
    },
    "skills-mn": {
      ru: "Навыки",
      en: "Skills",
    },
    "contacts-mn": {
      ru: "Контакты",
      en: "Contacts",
    },
    "skills": {
      ru: "Навыки",
      en: "Skills",
    },
    "contacts": {
      ru: "Контакты",
      en: "Contacts",
    },
    "location": {
      ru: "Расположение",
      en: "Location",
    },
    "place": {
      ru: "Днепр, Украина",
      en: "Dnipro, Ukraine",
    },
}

// Kovalchuk_Alexandr.doc
// https://docs.google.com/document/d/1sh2D9XNrhXUHriTJ5jau8URiod3V5TtO/edit?usp=sharing&ouid=117206839528032799965&rtpof=true&sd=true

// JSNodeJava KovalchukAA Resume.pdf
// https://drive.google.com/file/d/1VnRo2FS2ZyOvGzTiyazgaLFUqtQtw1z9/view?usp=share_link
