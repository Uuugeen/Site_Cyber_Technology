# 🛒 Kyber-Technika – Modern Electronics Store

**🌐 [Live Site:**](https://uuugeen.github.io/Site_Cyber_Technology/)

A fully client-side online store prototype for modern electronics — built with HTML, CSS, and JavaScript. Includes authentication, product catalog, cart, and order flow, all powered by localStorage.

---

## ✨ Key Features

### 🏠 Home Page (`index.html`)

- Header with logo, navigation, theme switcher (light/dark), login, and cart buttons.
- Main banner inviting users to explore the catalog.
- Dynamic product category list.
- **Bestsellers** section showing popular items.
- Featured products with category filters and search bar.
- Modal windows for:
  - Login / Registration
  - Profile View / Edit
  - Product Details
  - Cart / Order
  - Change Password
  - View Orders

---

## 🗂 Catalog & Categories

- Product data is stored in the `PRODUCTS` array.
- Categories in the `CATEGORIES` array.
- Rendered dynamically using:
  - `renderCategories()`
  - `renderBestsellers()`
  - `renderCatalog()`
- Catalog supports:
  - Filtering by category
  - Search by query

---

## 🛍 Cart Functionality

- Add / remove products to/from cart
- Live price calculations
- Persisted via `localStorage`
- Cart modal shows summary and checkout button

---

## 📦 Orders

- Placing an order through a contact form
- Order confirmation with status
- View past orders in the profile section

---

## 👤 Authentication & Profile

- Basic login / registration (with password check)
- All data saved in `localStorage`
- Users can:
  - Edit profile
  - Change password
  - View their order history

---

## 🎨 UI & UX

- Responsive design (media queries for desktop/mobile)
- Light / Dark theme toggle
- Modal-based interaction
- Inline notifications:
  - Add to cart
  - Clear cart
  - Order placed
  - Login success/failure, etc.

---

## 🧱 Code Structure

<img width="524" height="227" alt="image" src="https://github.com/user-attachments/assets/1a0d37d1-2ec5-45e4-bf64-df0eb61a6f7d" />


- Modular architecture using ES modules
- Pure JavaScript — no frameworks or libraries
- All data is stored and handled in the browser (localStorage)

---

## 🛠 Technical Notes

- Static site — deployable on GitHub Pages or any static hosting
- No backend — ideal for learning frontend architecture and prototyping e-commerce flows

---

## 📃 License

MIT License — for educational or personal non-commercial use.

