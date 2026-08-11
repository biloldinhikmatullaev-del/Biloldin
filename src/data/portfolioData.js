export const portfolioData = {
  developer: {
    name: "Билолдин",
    title: "Веб-разработчик",
    subtitle: "Создаю сайты и веб-приложения",
    tagline: "Превращаю ваши идеи в быстрые, удобные и продающие веб-сайты. Чистый код, 100% мобильная адаптивность и сдача точно в срок.",
    bio: "Занимаюсь современной фронтенд-разработкой. Специализируюсь на создании быстрыx лендингов, интерактивных сервисов и веб-приложений на React. Фокусируюсь на удобстве пользователей (UX), максимальной скорости загрузки и продуманной верстке без «воды».",
    status: "Доступен для новых заказов",
    location: "Бишкек / Онлайн",
    experience: "Более 15+ реализованных компонентов и проектов"
  },
  contacts: {
    whatsapp: {
      url: "https://wa.me/996555123456?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82.",
      display: "+996 (555) 123-456",
      label: "WhatsApp"
    },
    telegram: {
      url: "https://t.me/biloldin_dev",
      display: "@biloldin_dev",
      label: "Telegram"
    },
    email: {
      url: "mailto:biloldin.dev@gmail.com",
      display: "biloldin.dev@gmail.com",
      label: "Email"
    },
    github: {
      url: "https://github.com/biloldin",
      display: "github.com/biloldin",
      label: "GitHub"
    }
  },
  skills: [
    { name: "React.js", category: "Frontend", level: "Основной стек", icon: "Code2", color: "cyan" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "Основной стек", icon: "FileJson", color: "yellow" },
    { name: "HTML5 & CSS3", category: "Frontend", level: "Основной стек", icon: "Layout", color: "orange" },
    { name: "Tailwind CSS", category: "Styling", level: "Стилизация", icon: "Palette", color: "teal" },
    { name: "Firebase", category: "Backend / Database", level: "Базы данных", icon: "Flame", color: "amber" },
    { name: "Git & GitHub", category: "Tools", level: "Контроль версий", icon: "GitBranch", color: "red" },
    { name: "Netlify / Vercel", category: "Deployment", level: "Деплой сайтов", icon: "Globe", color: "emerald" },
    { name: "REST API", category: "Integration", level: "Интеграции", icon: "Cpu", color: "purple" }
  ],
  projects: [
    {
      id: "project-1",
      title: "SweetBakery — Кондитерский дом & торты",
      shortDesc: "Аппетитный интернет-магазин с каталогом свежей выпечки, тортов на заказ и фирменных кексов.",
      roleDesc: "Разработал адаптивный и вкусный UI для кондитерской, настроил удобный каталог десертов и корзину заказов.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://e1d3c9d5-d59b-4554-a44c-f0db4a30b7ae.netlify.app",
      githubUrl: "https://github.com/biloldin/sweetbakery",
      badge: "Живой сайт",
      type: "E-Commerce",
      previewTheme: "pink"
    },
    {
      id: "project-2",
      title: "TopServer — Серверная инфраструктура",
      shortDesc: "Высокопроизводительный веб-сервис для выбора и аренды серверных мощностей, VPS и Dedicated серверов.",
      roleDesc: "Спроектировал технологичный дизайн с микроанимациями, разработал сложный калькулятор сборки сервера и форму заказа.",
      techStack: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      liveUrl: "https://e1fc4517-bd36-4111-86e0-86db280e2519.netlify.app",
      githubUrl: "https://github.com/biloldin/topserver-vps",
      badge: "Живой сайт",
      type: "Landing & Service",
      previewTheme: "cyan"
    },
    {
      id: "project-3",
      title: "CarVIP — Премиум детейлинг-салон",
      shortDesc: "Презентабельный сайт автодетейлинга с галереей работ «До/После» и онлайн-калькулятором стоимости.",
      roleDesc: "Разработал стильный премиальный UI, внедрил интерактивный прайс-лист и настроил отправку заявок напрямую в WhatsApp.",
      techStack: ["HTML5", "CSS Animations", "JavaScript", "Responsive UI"],
      liveUrl: "https://f260cc14-038e-4d65-8954-9d641bdd92f8.netlify.app",
      githubUrl: "https://github.com/biloldin/carvip-detailing",
      badge: "Живой сайт",
      type: "Landing & Service",
      previewTheme: "amber"
    },
    {
      id: "project-4",
      title: "EcoSafe Bank — Дебетовая карта",
      shortDesc: "Финансовый лендинг банковского продукта с калькулятором кэшбэка и симуляцией CRM-панели для заявок.",
      roleDesc: "Создал доверительный и конверсионный дизайн, реализовал интерактивный калькулятор выгоды и форму оформления карты.",
      techStack: ["HTML5", "CSS3", "JavaScript", "FinTech UI"],
      liveUrl: "https://6202be6a-ece6-4fb9-b7db-69e85b09d489.netlify.app",
      githubUrl: "https://github.com/biloldin/ecosafe-bank",
      badge: "Живой сайт",
      type: "Landing & Service",
      previewTheme: "blue"
    },
    {
      id: "project-5",
      title: "JEEP — Центр внедорожников",
      shortDesc: "Эффектный промо-сайт с 3D-конфигуратором автомобилей и интерактивным RPG-симулятором тест-драйва.",
      roleDesc: "Разработал брутальный премиум-дизайн, внедрил движок Three.js для 3D-визуализации и сложную анимацию интерфейса.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Three.js"],
      liveUrl: "https://662357a7-78e1-45f3-bf30-2ca7089b5de7.netlify.app",
      githubUrl: "https://github.com/biloldin/jeep-auto-center",
      badge: "Живой сайт",
      type: "Landing & Service",
      previewTheme: "orange"
    },
    {
      id: "project-6",
      title: "ДЕНЬГИ — Цифровой банк",
      shortDesc: "Премиальное веб-приложение для управления финансами, картами и аналитикой расходов.",
      roleDesc: "Реализовал сложный дашборд с интерактивными графиками, 3D-моделью карты, калькулятором вкладов и конвертером валют.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Leaflet.js"],
      liveUrl: "https://779b1b15-08c4-48f6-95c4-cde9c61c83ae.netlify.app",
      githubUrl: "https://github.com/biloldin/dengi-digital-bank",
      badge: "Живой сайт",
      type: "Web App",
      previewTheme: "green"
    },
    {
      id: "project-7",
      title: "TechGear — Интернет-магазин электроники",
      shortDesc: "Современный каталожный интернет-магазин с корзиной, фильтрацией товаров и оформлением заказа.",
      roleDesc: "Спроектировал адаптивный UI, настроил стейт корзины на React и подключил Firebase для хранения товаров.",
      techStack: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://techgear-shop-demo.netlify.app",
      githubUrl: "https://github.com/biloldin/techgear-e-commerce",
      badge: "Живой сайт",
      type: "E-Commerce",
      previewTheme: "indigo"
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "Обсуждение & ТЗ",
      desc: "Изучаю ваши цели, составляем четкое техническое задание и фиксируем точные сроки и стоимость."
    },
    {
      step: "02",
      title: "Прототип & Дизайн",
      desc: "Создаю адаптивную верстку под мобильные и ПК. Согласовываем внешний вид и логику."
    },
    {
      step: "03",
      title: "Разработка на React",
      desc: "Пишу чистый оптимизированный код, подключаю интерактивные элементы, формы и базы данных."
    },
    {
      step: "04",
      title: "Деплой & Сдача",
      desc: "Публикую сайт в интернете (Netlify/Vercel), тестирую скорость и передаю готовый проект."
    }
  ],
  faqs: [
    {
      question: "Сколько времени занимает разработка сайта?",
      answer: "Простой лендинг делается за 3–5 дней. Сложные веб-приложения и интернет-магазины с базами данных — за 7–14 дней. Точный срок называю до начала работы."
    },
    {
      question: "Каждая ссылка на мои проекты действительно будет работать?",
      answer: "Да, абсолютно! Это правило №1: проекты публикуются на бесплатный надежный хостинг (Netlify/Vercel), имеют быстрый доступ из любой точки мира и открываются в новой вкладке."
    },
    {
      question: "Будет ли сайт удобно открываться с мобильного телефона?",
      answer: "Да, 100% мобильная адаптивность заложена изначально. Сайт идеально выглядит на смартфонах, планшетах и широких мониторах."
    },
    {
      question: "Что нужно предоставить для старта работы?",
      answer: "Достаточно описать идею своими словами или прислать примеры сайтов, которые вам нравятся. Текст и структуру мы составим вместе."
    }
  ],
  guarantees: [
    {
      title: "Гарантия дедлайна",
      desc: "Сдача точно в согласованный день. Без срывов и отговорок."
    },
    {
      title: "14 дней поддержки",
      desc: "Бесплатное исправление любых вопросов после передачи сайта."
    },
    {
      title: "Прозрачный код",
      desc: "Исходный код загружается на GitHub для максимального контроля."
    }
  ]
};
