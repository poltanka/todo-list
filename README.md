# TODO List

Це проста та зручна веб-аплікація для створення та керування списками справ, які потрібно виконати протягом дня. Вона підтримує кілька списків справ, можливість відмічати завдання як виконані, видаляти їх і зберігає дані в LocalStorage браузера.

# Функціональність

- ➕ Додавання нових справ
- ✅ Відмітка справ як виконаних
- ❌ Видалення окремих справ
- 🧹 Очищення всіх виконаних справ
- 🔍 Фільтрація списку справ (усі / лише виконані)
- 💾 Збереження даних в LocalStorage (навіть після оновлення сторінки)

# Структура проєкту

```
📁 js/
  ├── main.js              - Точка входу, ініціалізація застосунку та обробка подій.
  ├── local_storage.js     - Робота з LocalStorage: завантаження та збереження справ.
  ├── todo_items.js        - Логіка: додавання, видалення, зміна стану, очищення.
  └── todo_list_ui.js      - Відображення UI: рендер елементів списку, фільтрація.

📄 index.html              - Основна HTML-структура
🎨 main.css                - Стилізація інтерфейсу
```

# Технології

- HTML5
- CSS3
- JavaScript (модульна структура)
- LocalStorage API