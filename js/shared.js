// === shared.js ===

export const CATEGORIES = [
  {
    id: 1,
    name: "Смартфони",
    description: "Останні моделі смартфонів від провідних брендів."
  },
  {
    id: 2,
    name: "Ноутбуки",
    description: "Потужні ноутбуки для роботи та ігор."
  },
  {
    id: 3,
    name: "Периферія",
    description: "Клавіатури, миші, навушники та інше."
  }
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "iPhone 14 Pro",
    price: 49999,
    image: "img/product/iphone14pro.jpg",
    bestseller: true,
    categoryId: 1,
    description: "Apple iPhone 14 Pro — флагманський смартфон з інноваційним дисплеєм Super Retina XDR, потужним процесором A16 Bionic та професійною камерою для найкращих фото і відео.",
    characteristics: "Дисплей: 6.1\" OLED Super Retina XDR, Процесор: Apple A16 Bionic, Камера: 48 МП + 12 МП + 12 МП, Фронтальна: 12 МП, Пам'ять: 128 ГБ, Face ID, iOS 16, Акумулятор: 3200 мАг"
  },
  {
    id: "p2",
    name: "MacBook Air M2",
    price: 59999,
    image: "img/product/macbookair.jpg",
    bestseller: true,
    categoryId: 2,
    description: "MacBook Air на базі чіпа Apple M2 — ультратонкий ноутбук з високою продуктивністю, Retina-дисплеєм та тривалим часом автономної роботи.",
    characteristics: "Дисплей: 13.6\" Liquid Retina, Процесор: Apple M2, ОЗП: 8 ГБ, SSD: 256 ГБ, Клавіатура: Magic Keyboard, FaceTime HD камера, Thunderbolt/USB 4, macOS"
  },
  {
    id: "p3",
    name: "Logitech MX Master 3",
    price: 3499,
    image: "img/product/logitechmx.jpg",
    bestseller: true,
    categoryId: 3,
    description: "Logitech MX Master 3 — ергономічна бездротова миша для професіоналів з точним сенсором, програмованими кнопками та швидкою зарядкою.",
    characteristics: "Тип: Бездротова, Сенсор: 4000 DPI Darkfield, Кнопки: 7, Підключення: Bluetooth/USB, Час роботи: до 70 днів, Швидка зарядка USB-C"
  },
  {
    id: "p4",
    name: "Samsung Galaxy S23",
    price: 42999,
    image: "img/product/galaxys23.jpg",
    bestseller: false,
    categoryId: 1,
    description: "Samsung Galaxy S23 — сучасний смартфон з AMOLED-дисплеєм, потужним процесором Snapdragon 8 Gen 2 та камерою для якісних фото навіть уночі.",
    characteristics: "Дисплей: 6.1\" Dynamic AMOLED 2X, Процесор: Snapdragon 8 Gen 2, Камера: 50 МП + 12 МП + 10 МП, Фронтальна: 12 МП, Пам'ять: 128 ГБ, Акумулятор: 3900 мАг, Android 13"
  },
  {
    id: "p5",
    name: "Acer Aspire 7",
    price: 29999,
    image: "img/product/acer-aspire7.jpg",
    bestseller: false,
    categoryId: 2,
    description: "Acer Aspire 7 — універсальний ноутбук для роботи та навчання з потужним процесором AMD Ryzen та відеокартою NVIDIA GTX.",
    characteristics: "Дисплей: 15.6\" Full HD IPS, Процесор: AMD Ryzen 5 3550H, ОЗП: 8 ГБ, SSD: 512 ГБ, Відеокарта: NVIDIA GTX 1650, Windows 11"
  },
  {
    id: "p6",
    name: "HP Pavilion 15",
    price: 25499,
    image: "img/product/hp-pavilion.jpg",
    bestseller: false,
    categoryId: 2,
    description: "HP Pavilion 15 — стильний ноутбук для повсякденних задач з процесором Intel Core i5 та швидким SSD.",
    characteristics: "Дисплей: 15.6\" Full HD, Процесор: Intel Core i5-1135G7, ОЗП: 8 ГБ, SSD: 512 ГБ, Відео: Intel Iris Xe, Windows 11"
  },
  {
    id: "p7",
    name: "Xiaomi Redmi Note 12",
    price: 10999,
    image: "img/product/redmi-note12.jpg",
    bestseller: false,
    categoryId: 1,
    description: "Xiaomi Redmi Note 12 — доступний смартфон з AMOLED-дисплеєм, потужною батареєю та камерою 50 МП.",
    characteristics: "Дисплей: 6.67\" AMOLED 120 Гц, Процесор: Snapdragon 685, Камера: 50 МП + 8 МП + 2 МП, Фронтальна: 13 МП, Пам'ять: 128 ГБ, Акумулятор: 5000 мАг, Android 13"
  },
  {
    id: "p8",
    name: "Samsung Galaxy Buds 2",
    price: 3999,
    image: "img/product/galaxy-buds2.jpg",
    bestseller: false,
    categoryId: 3,
    description: "Samsung Galaxy Buds 2 — бездротові навушники з активним шумозаглушенням та якісним звуком.",
    characteristics: "Тип: Вакуумні TWS, Час роботи: до 20 год, Шумозаглушення: ANC, Підключення: Bluetooth 5.2, Зарядка: USB-C/бездротова"
  },
  {
    id: "p9",
    name: "Logitech G Pro X",
    price: 4499,
    image: "img/product/logitech-gprox.jpg",
    bestseller: true,
    categoryId: 3,
    description: "Logitech G Pro X — професійна ігрова гарнітура з мікрофоном Blue VO!CE та змінними амбушурами.",
    characteristics: "Тип: Провідна, Динаміки: 50 мм, Мікрофон: з шумозаглушенням, Кабель: 2 м, Сумісність: PC/PS4/Xbox"
  },
  {
    id: "p10",
    name: "Dell XPS 13",
    price: 68999,
    image: "img/product/dell-xps13.jpg",
    bestseller: false,
    categoryId: 2,
    description: "Dell XPS 13 — преміальний ультрабук з безрамковим дисплеєм, потужним процесором Intel Core i7 та SSD.",
    characteristics: "Дисплей: 13.4\" Full HD+, Процесор: Intel Core i7-1165G7, ОЗП: 16 ГБ, SSD: 512 ГБ, Відео: Intel Iris Xe, Windows 11"
  },
  {
    id: "p11",
    name: "iPad Air 5",
    price: 29999,
    image: "img/product/ipad-air5.jpg",
    bestseller: true,
    categoryId: 1,
    description: "Apple iPad Air 5 — легкий планшет з потужним чіпом M1, яскравим дисплеєм та підтримкою Apple Pencil 2.",
    characteristics: "Дисплей: 10.9\" Liquid Retina, Процесор: Apple M1, ОЗП: 8 ГБ, Пам'ять: 64 ГБ, Камера: 12 МП, Face ID, iPadOS"
  },
  {
    id: "p12",
    name: "Sony WH-1000XM5",
    price: 9999,
    image: "img/product/sony-xm5.jpg",
    bestseller: false,
    categoryId: 3,
    description: "Sony WH-1000XM5 — топові бездротові навушники з найкращим шумозаглушенням та автономністю до 30 годин.",
    characteristics: "Тип: Повнорозмірні, Шумозаглушення: ANC, Час роботи: до 30 год, Підключення: Bluetooth 5.2, Зарядка: USB-C"
  },
  {
    id: "p13",
    name: "Asus ROG Zephyrus",
    price: 85999,
    image: "img/product/asus-zephyrus.jpg",
    bestseller: true,
    categoryId: 2,
    description: "Asus ROG Zephyrus — ігровий ноутбук з потужною відеокартою RTX 3070 та дисплеєм 165 Гц.",
    characteristics: "Дисплей: 15.6\" 4K OLED, Процесор: AMD Ryzen 9 5900HX, ОЗП: 32 ГБ, SSD: 1 ТБ, Відеокарта: NVIDIA RTX 3070, Windows 11 Home"
  },
  {
    id: "p14",
    name: "Apple Watch Series 8",
    price: 13999,
    image: "img/product/apple-watch8.jpg",
    bestseller: false,
    categoryId: 1,
    description: "Apple Watch Series 8 — розумні годинники з моніторингом здоров'я, GPS та водонепроникністю.",
    characteristics: "Дисплей: Retina, Процесор: S8 SiP, ОЗП: 1 ГБ, Пам'ять: 32 ГБ, Сенсори: пульсометр, акселерометр, гіроскоп, Спосіб зарядки: безконтактна магнітна"
  },
  {
    id: "p15",
    name: "Samsung Galaxy Tab S8",
    price: 34999,
    image: "img/product/galaxy-tab-s8.jpg",
    bestseller: false,
    categoryId: 2,
    description: "Samsung Galaxy Tab S8 — потужний планшет з великим дисплеєм, підтримкою S Pen та 5G.",
    characteristics: "Дисплей: 11\" LTPS TFT, Процесор: Snapdragon 8 Gen 1, ОЗП: 8 ГБ, SSD: 128 ГБ, Камера: 13 МП + 6 МП, Фронтальна: 12 МП, Акумулятор: 8000 мАг, Android 12"
  },
  {
    id: "p16",
    name: "Bose QuietComfort 35 II",
    price: 10999,
    image: "img/product/bose-qc35ii.jpg",
    bestseller: false,
    categoryId: 3,
    description: "Bose QuietComfort 35 II — бездротові навушники з активним шумозаглушенням та голосовим управлінням.",
    characteristics: "Тип: Повнорозмірні, Шумозаглушення: ANC, Час роботи: до 20 год, Підключення: Bluetooth, Зарядка: USB-C"
  },
  {
    id: "p17",
    name: "Microsoft Surface Laptop 4",
    price: 54999,
    image: "img/product/surface-laptop4.jpg",
    bestseller: false,
    categoryId: 2,
    description: "Microsoft Surface Laptop 4 — стильний ноутбук з сенсорним дисплеєм, процесором Intel Core i5 та тривалим часом автономної роботи.",
    characteristics: "Дисплей: 13.5\" PixelSense, Процесор: Intel Core i5-1135G7, ОЗП: 8 ГБ, SSD: 256 ГБ, Відео: Intel Iris Xe, Windows 11 Home"
  },
  {
    id: "p18",
    name: "Oculus Quest 2",
    price: 19999,
    image: "img/product/oculus-quest2.jpg",
    bestseller: false,
    categoryId: 3,
    description: "Oculus Quest 2 — автономні VR-окуляри з високою роздільною здатністю та широким полем зору.",
    characteristics: "Дисплей: LCD, Роздільна здатність: 1832 x 1920 на око, Процесор: Qualcomm Snapdragon XR2, ОЗП: 6 ГБ, Пам'ять: 128 ГБ, Аудіо: просторовий звук, Батарея: до 2.5 годин"
  },
  {
    id: "p19",
    name: "Razer Blade 15",
    price: 89999,
    image: "img/product/razer-blade15.jpg",
    bestseller: true,
    categoryId: 2,
    description: "Razer Blade 15 — ігровий ноутбук з дисплеєм 15.6\" 4K OLED, процесором Intel Core i7 та відеокартою NVIDIA RTX 3080.",
    characteristics: "Дисплей: 15.6\" 4K OLED Touch, Процесор: Intel Core i7-11800H, ОЗП: 32 ГБ, SSD: 1 ТБ, Відеокарта: NVIDIA RTX 3080, Windows 11 Home"
  },
  {
    id: "p20",
    name: "Apple Mac Mini M1",
    price: 24999,
    image: "img/product/mac-mini-m1.jpg",
    bestseller: false,
    categoryId: 2,
    description: "Apple Mac Mini M1 — компактний десктоп з чіпом M1, підтримкою до 16 ГБ ОЗП та 2 ТБ SSD.",
    characteristics: "Процесор: Apple M1, ОЗП: 8/16 ГБ, SSD: 256/512 ГБ/1 ТБ/2 ТБ, Відео: інтегрована Apple GPU, Порти: Thunderbolt 3, USB-A, HDMI 2.0, Ethernet, Wi-Fi 6, Bluetooth 5.0"
  }
];

