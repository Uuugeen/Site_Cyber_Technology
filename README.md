Results Site: https://uuugeen.github.io/Site_Cyber_Technology/

This project implements an online store of modern electronics "Kyber-Technika" with the following main functions:

Home page (index.html):

Header with logo, navigation, theme switcher (light/dark), login and cart buttons.
Main banner with a call to go to the catalog.
Dynamic list of product categories.
"Bestsellers" block with popular products.
Product catalog with filtering by categories and search.
Modal windows for login, registration, viewing profile, product details, cart, placing an order, changing password, viewing orders.

Catalog and categories:

Categories and products are stored in the CATEGORIES and PRODUCTS arrays.
Categories and products are rendered dynamically via renderCategories, renderBestsellers, renderCatalog.
Catalog filtering by categories and search query.

Cart:

Add/remove items to cart, calculate amount, save to localStorage.

Place order with contact form.

View recent orders in user profile.

Authentication and profile:

Simple login/registration with password verification.

Save user to localStorage.
Ability to edit profile, change password, view order history.

Interface:

Responsive layout (CSS, media queries).

Dark/light theme.
Modal windows for user interaction.
Notifications about actions (add to cart, clear cart, successful order, etc.).

Code structure:

The code is divided into modules: cart.js, catalog.js, client.js, core.js, product.js, shared.js.
All logic for working with DOM, localStorage, modals, cart, catalog, and user is implemented in pure JavaScript.
The project is a completely front-end implementation without a backend, data storage takes place in the browser (localStorage).
