// === product.js ===

import { PRODUCTS, CATEGORIES } from './shared.js';
import { addToCart, showMessage } from './cart.js';
import { renderCatalog } from './catalog.js';



const categoryContainer = document.getElementById('categoryList');
const bestsellerContainer = document.getElementById('bestsellerProducts');

// Рендер категорій
export function renderCategories() {
  if (!categoryContainer) return;
  categoryContainer.innerHTML = '';

  CATEGORIES.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.setAttribute('data-category-id', category.id);
    div.innerHTML = `
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    `;
    categoryContainer.appendChild(div);
  });

  // Додаємо обробник кліку для фільтрації каталогу та скролу до каталогу
  categoryContainer.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoryId = card.getAttribute('data-category-id');
      renderCatalog(categoryId);

      // Скролимо до секції каталогу
      const catalogSection = document.getElementById('catalogPage');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Рендер хітів продажів
export function renderBestsellers() {
  if (!bestsellerContainer) return;
  bestsellerContainer.innerHTML = '';

  const bestsellers = PRODUCTS.filter(p => p.bestseller);

  bestsellers.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.price} ₴</p>
      <button data-id="${product.id}" class="details-btn">Детальніше</button>
    `;
    bestsellerContainer.appendChild(card);
  });
}

// Функція для показу модального вікна з інформацією про товар
export function showProductDetails(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("infoModal");
  const content = document.getElementById("infoModalContent");
  
  if (!modal || !content) return;
  const characteristics = product.characteristics
    ? product.characteristics.split(',').map(ch => `<li>${ch.trim()}</li>`).join('')
    : '<li>Інформація відсутня</li>';

  content.innerHTML = `
    <div class="product-info-layout">
      <div class="product-info-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info-details">
        <h2>${product.name}</h2>
        <p class="price"><strong>Ціна:</strong> ${product.price} ₴</p>
        <p><strong>Опис:</strong> ${product.description || 'Опис недоступний'}</p>
      </div>
    </div>
    <div class="product-info-specs">
      <h3>Характеристики</h3>
      <ul>${characteristics}</ul>
      <button id="infoAddToCartBtn" class="buttonsSite">Додати до кошика</button>
    </div>
  `;

  const addBtn = document.getElementById("infoAddToCartBtn");
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(product.id);
      if (typeof showMessage === "function") {
        showMessage("Товар додано до кошика!");
      }
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  };

  const closeBtn = modal.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    };
  }

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}





