const projects = [
    {
        id: 0,
        title: {
            ru: "Новостной портал ‘Blog’",
            en: "News portal ‘Blog’",
        },
        desc: {
            ru: "Вывод всех статей, переход на подробное описание, на той же странице без перезагрузки. Форма комментариев, с добавлением/удалением, подсчет кол-ва, вывод сообщения, если нет. ",
            en: "Output of all articles, transition to a detailed description, on the same page without reloading. Comment form, with adding/deleting, counting, displaying a message in case of absence. ",
        },

        skills: "(MEVN), client – Vue JS, server - Mongo DB",
        img: "blog_sm.jpg",
        imgBig: "blog_lg.jpg",
        site: "",
        siteTitle: "Web Blog",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Blog-MEVN",
        gitTitle: "Web Blog",
        demo: "https://youtu.be/IBJdLZu3WmU",
    },
    {
        id: 1,
        title: {
            ru: "Travel Agent - GULP - mobile, autocomplete, calendar, swiper slider.",
            en: "Travel Agent - GULP - mobile, autocomplete, calendar, swiper slider.",
        },
        desc: {
            ru: "Лендинг туристического сайта на Gulp сборке. HTML, SCSS, flexbox и CSS Grid. Скрипт для автокомплита и подсказок при вводе текста - autocomplete.js. Плагин для выбора даты через календарь (datepicker) easepick js. Одновременное использование нескольких swiper sliders.",
            en: "Landing page for a travel website using Gulp. HTML, SCSS, flexbox and CSS Grid. Script for autocomplete and hints when entering text - autocomplete.js. Plugin for selecting a date via a calendar (datepicker) easepick js. Simultaneous use of several swiper sliders.",
        },

        skills: "GULP, HTML, SCSS, JS, Grid, Flex, Swiper slider",
        img: "travel-agent_sm.jpg",
        imgBig: "travel-agent_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Travel-Agent-GULP-autocomplete-calendar-swiper-slider/",
        siteTitle: "Travel Agent",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Travel-Agent-GULP-autocomplete-calendar-swiper-slider.git",
        gitTitle: "Travel-Agent-GULP-autocomplete-calendar-swiper-slider",
        demo: "",
    },
    {
        id: 2,
        title: {
            ru: "Travel X - Swiper Header",
            en: "Travel X - Swiper Header",
        },
        desc: {
            ru: "HTML SCSS верстка для креативной шапки сайта на Gulp сборке. Swiper слайдер с параллакс эффектом. Мобильная адаптация. Прелоадер.",
            en: "HTML SCSS layout for the creative header of the site using Gulp. Swiper slider with parallax effect. Mobile adaptation. Preloader.",
        },

        skills: "GULP, HTML, SCSS, JS, Swiper slider & paralax",
        img: "travel-x_sm.jpg",
        imgBig: "travel-x_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Travel-X---Swiper-Header/",
        siteTitle: "Travel X",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Travel-X---Swiper-Header.git",
        gitTitle: "Travel-X---Swiper-Header",
        demo: "",
    },
    {
        id: 3,
        title: {
            ru: "Elegant Store - GULP - mobile",
            en: "Elegant Store - GULP - mobile",
        },
        desc: {
            ru: "Cайт интернет магазина. Главная страница с каталогом товаров. Верстка на Gulp сборке. HTML, SCSS, JS, Swiper slider. Мобильная адаптация.",
            en: "Online store website. Home page with product catalog. Mobile responsive. Сountdown.",
        },

        skills: "GULP, HTML, CSS, Grid, Flex, JS, Swiper slider",
        img: "3legant_sm.jpg",
        imgBig: "3legant_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Elegant-Store---GULP---mobile/",
        siteTitle: "3legant",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Elegant-Store---GULP---mobile.git",
        gitTitle: "3legant",
        demo: "",
    },
    {
        id: 4,
        title: {
            ru: "'Modimal' Интернет-магазин - GULP",
            en: "'Modimal' online store - GULP",
        },
        desc: {
            ru: "Cайт интернет магазина. Верстка на Gulp сборке. HTML, SCSS, JS, Swiper slider. Миксины и переменные. Аккордеон. Мобильная навигация/адаптация.",
            en: "Online store website. Gulp, HTML, SCSS, JS, Swiper slider. Mixins and variables. Accordion. Mobile navigation/adaptation",
        },

        skills: "GULP, HTML, SCSS, JS, Grid, Flex, Swiper slider, Accordion, Mixins and variables",
        img: "modimal_sm.jpg",
        imgBig: "modimal_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Modimal/",
        siteTitle: "Modimal",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Modimal.git",
        gitTitle: "Modimal",
        demo: "",
    },
    {
        id: 5,
        title: {
            ru: "Panto. Магазин мебели и декора.",
            en: "Panto Furniture Landing",
        },
        desc: {
            ru: "Главная страница. Мобильный адаптив. Корзина товаров. Подсчет стоимости. JS интерактив (табы, Swiper-slider). Переменные",
            en: "Home page. Mobile responsive. Shopping cart. Cost calculation. JS interactive (tabs, Swiper-slider). Vars",
        },

        skills: "HTML CSS, Flex, JS, Swiper-slider, variables",
        img: "panto_sm.jpg",
        imgBig: "panto_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Panto-Furniture-Landing/",
        siteTitle: "Panto",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Panto-Furniture-Landing.git",
        gitTitle: "Panto-Furniture-Landing",
        demo: "https://youtu.be/yTyBtRLhs98",
    },
    {
        id: 6,
        title: {
            ru: "Верстка главной страницы туристического сайта",
            en: "2rism. Free Travel Design.",
        },
        desc: {
            ru: "Главная страница. Мобильный адаптив. JS скрипты (селект, календарь, инпут с подсказками). CSS Grid для мобильной адаптации.",
            en: "Home page. Mobile responsive. JS scripts (custom: selection, calendar, login with hints). CSS Grid for mobile adaptation.",
        },

        skills: "HTML CSS, Grid, Flex, JS",
        img: "2rism_sm.jpg",
        imgBig: "2rism_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/2rism/",
        siteTitle: "2rism",
        gitRef: "https://github.com/Kovalchuk-Alexandr/2rism",
        gitTitle: "2rism",
        demo: "https://youtu.be/Zx4qEWlw1vU",
    },
    {
        id: 7,
        title: {
            ru: "Адаптивная верстка сайта",
            en: "Alivio. Mobile responsive website layout",
        },
        desc: {
            ru: "Главная страница. Мобильный адаптив. JS скрипты (секция с видео-роликом ).",
            en: "Home page. Mobile responsive. JS scripts (video section).",
        },

        skills: "HTML CSS, Flex, JS",
        img: "alivio_sm.jpg",
        imgBig: "alivio_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Alivio/",
        siteTitle: "Alivio",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Alivio.git",
        gitTitle: "Alivio",
        demo: "https://youtu.be/Dpbvqacg7cs",
    },
    {
        id: 8,
        title: {
            ru: "Лендинг жилого комплекса LoftHouse.",
            en: "Loft House residential complex Landing",
        },
        desc: {
            ru: "Главная страница. Мобильный адаптив. JS, Lightbox для Youtube. Google Maps. Переменные",
            en: "Home page. Mobile responsive. Youtube Lightbox. Google Maps. Vars",
        },

        skills: "HTML, CSS Grid, Flex, SCSS, JS, variables, Youtube Lightbox. Google Maps",
        img: "lofthouse_sm.jpg",
        imgBig: "lofthouse_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/LoftHouse/",
        siteTitle: "Loft House",
        gitRef: "https://github.com/Kovalchuk-Alexandr/LoftHouse.git",
        gitTitle: "LoftHouse",
        demo: "https://youtu.be/JDM_AZv7zqM",
    },
    {
        id: 9,
        title: {
            ru: "MNTN-Landing-Page",
            en: "MNTN-Landing-Page",
        },
        desc: {
            ru: "Главная страница туристического сайта. Мобильная навигация. Адаптив. Прилетающие подчеркивания меню. Анимация scroll down & read more",
            en: "Home page. Mobile responsive. Only HTML CSS. Flying menu underlines. Animation scroll down & read more.",
        },

        skills: "Only HTML CSS",
        img: "mntn_sm.jpg",
        imgBig: "mntn_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/MNTN-Landing-Page/",
        siteTitle: "MNTN",
        gitRef: "https://github.com/Kovalchuk-Alexandr/MNTN-Landing-Page.git",
        gitTitle: "MNTN",
        demo: "",
    },
    {
        id: 10,
        title: {
            ru: "Верстка сайта «Free Health»",
            en: "Layout of the website<br>«Free Health»",
        },
        desc: {
            ru: "Анимация, выплывающее сбоку меню, Header появляется после прокрутки 50% экрана.",
            en: "Animation of a menu pop-up on the side, Header appears after scrolling 50% of the screen.",
        },

        skills: "jQuery",
        img: "fh_sm.jpg",
        imgBig: "fh_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/Free-Health/",
        siteTitle: "Free-Health",
        gitRef: "https://github.com/Kovalchuk-Alexandr/Free-Health.git",
        gitTitle: "Free-Health",
        demo: "https://youtu.be/T1pJeQ6zIZI",
    },
    {
        id: 11,
        title: {
            ru: "Интернет-магазин ",
            en: "Online store",
        },
        desc: {
            ru: "Корзина товаров, появляющаяся сбоку, добавление товаров не больше, чем на складе, удаление, авто-подсчет количества и стоимости, фильтр по категориям, поиск по названию, переход на страницу товара, анимация.",
            en: "A store cart appearing from the side, adding items no more than in stock, deleting, auto-calculating quantity and cost, filter by category, search by name, following to the product page, animation.",
        },

        skills: "client - Java Script, server - Mongo DB",
        img: "e-shop_sm.jpg",
        imgBig: "e-shop_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/eshop_local/",
        siteTitle: "E-Shop",
        gitRef: "https://github.com/Kovalchuk-Alexandr/eshop-js.git",
        gitTitle: "E-Shop",
        demo: "https://youtu.be/wur0cIoSF_w",
    },
    // {
    //     id: 3,
    //     title: {
    //         ru: "Портфолио фрилансера",
    //         en: "Freelancer portfolio ",
    //     },
    //     desc: {
    //         ru: 'Многостраничный сайт-портфолио. "Подробно". Ru/En язык. Светлая/Темная темы. Адаптив. Переменные. LightBox.',
    //         en: 'Multi-pages portfolio site. "Details." Ru/En language. Light/Dark themes. Adaptive. Variables. LightBox',
    //     },

    //     skills: "Java Script",
    //     img: "fl_portfolio_sm.jpg",
    //     imgBig: "fl_portfolio_lg.jpg",
    //     site: "https://kovalchuk-alexandr.github.io/freelancer_portfolio_my/",
    //     siteTitle: "Freelancer portfolio",
    //     gitRef: "https://github.com/Kovalchuk-Alexandr/freelancer_portfolio_my.git",
    //     gitTitle: "freelancer_portfolio_my",
    // },
    {
        id: 12,
        title: {
            ru: "Портфолио",
            en: "Portfolio ",
        },
        desc: {
            ru: 'Одностраничный сайт-портфолио. "Подробно". Адаптив.',
            en: 'One-page portfolio website. "Details." Adaptive.',
        },

        skills: "Java Script",
        img: "portfolio1_sm.jpg",
        imgBig: "portfolio1_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/PortfolioMy/index.html",
        siteTitle: "Portfolio",
        gitRef: "",
        gitTitle: "",
    },
    {
        id: 13,
        title: {
            ru: "Простой сайт на jQuery ",
            en: "Simple jQuery website",
        },
        desc: {
            ru: "Одностраничный сайт. Карусель. Боковое меню. Анимация",
            en: "One page site. Carousel. Sidebar. Animation",
        },

        skills: "jQuery",
        img: "jquery_sm.jpg",
        imgBig: "jquery_lg.jpg",
        site: "https://kovalchuk-alexandr.github.io/jQuery/",
        siteTitle: "Washoo",
        gitRef: "https://github.com/Kovalchuk-Alexandr/jQuery.git",
        gitTitle: "Washoo",
        demo: "https://youtu.be/mLkGyWYoIuY",
    },
];

// Названия статических надписей
const globalTexts = {
    greating: {
        ru: "Приветствую, я",
        en: "Hi, my name is ",
    },
    name: {
        ru: "Александр Ковальчук",
        en: "Alexander Kovalchuk",
    },
    aboutme: {
        ru: "фронтэнд разработчик",
        en: "a frontend developer",
    },
    slogan: {
        ru: "со страстью к знаниям и творчеству",
        en: "with passion for learning and creating",
    },
    "btn-load": {
        ru: "Загрузить резюме",
        en: "Download CV",
    },
    projects: {
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
    skills: {
        ru: "Навыки",
        en: "Skills",
    },
    contacts: {
        ru: "Контакты",
        en: "Contacts",
    },
    location: {
        ru: "Расположение",
        en: "Location",
    },
    place: {
        ru: "Днепр, Украина",
        en: "Dnipro, Ukraine",
    },
};

// Kovalchuk_Alexandr.doc
// https://docs.google.com/document/d/1sh2D9XNrhXUHriTJ5jau8URiod3V5TtO/edit?usp=sharing&ouid=117206839528032799965&rtpof=true&sd=true

// JSNodeJava KovalchukAA Resume.pdf
// https://drive.google.com/file/d/1VnRo2FS2ZyOvGzTiyazgaLFUqtQtw1z9/view?usp=share_link
