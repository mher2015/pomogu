// ===================================================================
// data.js — «Помогу» демо-данные (пользователи, клиенты, заказы)
// Пока нет базы данных: всё хранится прямо в этом файле как JS-массивы.
// Позже эти массивы легко заменить на fetch() к настоящей базе (Firebase,
// Supabase, Google Sheets API и т.д.) — интерфейс сайта не изменится.
// ===================================================================

// ---- ИСПОЛНИТЕЛИ (те, кто предлагает услугу: таксисты, гиды, кафе) ----
const USERS = [
  {
    id: "u1",
    name: "Армен Саркисян",
    role: "driver",           // driver | guide | restaurant
    city: "Горис",
    phone: "+374 55 123 456",
    rating: 4.8,
    reviews: 12,
    lat: 39.5106,
    lng: 46.3372,
    description: "Такси Горис — Ереван, ежедневно, седан 4 места."
  },
  {
    id: "u2",
    name: "Гоар Мартиросян",
    role: "guide",
    city: "Горис",
    phone: "+374 55 234 567",
    rating: 5.0,
    reviews: 8,
    lat: 39.5089,
    lng: 46.3421,
    description: "Экскурсии по Горису и Хндзореску, английский/русский."
  },
  {
    id: "u3",
    name: "Кафе «Ани»",
    role: "restaurant",
    city: "Горис",
    phone: "+374 55 345 678",
    rating: 4.5,
    reviews: 21,
    lat: 39.5115,
    lng: 46.3390,
    description: "Армянская кухня, хачапури, толма, домашнее вино."
  },
  {
    id: "u4",
    name: "Гагик Ованнисян",
    role: "driver",
    city: "Капан",
    phone: "+374 55 456 789",
    rating: 4.6,
    reviews: 5,
    lat: 39.2064,
    lng: 46.4058,
    description: "Такси Капан — Ереван и по региону, минивэн 6 мест."
  }
];

// ---- КЛИЕНТЫ (те, кто оставляет заказ / ищет услугу) ----
const CLIENTS = [
  {
    id: "c1",
    name: "Наира",
    city: "Горис",
    phone: "+374 77 111 222"
  },
  {
    id: "c2",
    name: "Давид",
    city: "Капан",
    phone: "+374 77 222 333"
  },
  {
    id: "c3",
    name: "Лусине",
    city: "Сисиан",
    phone: "+374 77 333 444"
  }
];

// ---- ЗАКАЗЫ (связывают клиента, категорию и, если есть, исполнителя) ----
const ORDERS = [
  {
    id: "o1",
    category: "taxi",
    clientId: "c1",
    userId: "u1",
    from: "Горис",
    to: "Ереван",
    price: "Договорная",
    status: "open"          // open | accepted | done
  },
  {
    id: "o2",
    category: "tourism",
    clientId: "c2",
    userId: "u2",
    place: "Горис",
    price: "15 000 ֏",
    status: "open"
  },
  {
    id: "o3",
    category: "food",
    clientId: "c3",
    userId: "u3",
    place: "Горис",
    price: null,
    status: "open"
  }
];

// ---- Небольшие помощники, чтобы страницы могли искать по данным ----
function getUserById(id) {
  return USERS.find(u => u.id === id);
}
function getClientById(id) {
  return CLIENTS.find(c => c.id === id);
}
function getUsersByRole(role) {
  return USERS.filter(u => u.role === role);
}
function getOrdersByCategory(category) {
  return ORDERS.filter(o => o.category === category);
}
