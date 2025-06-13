// === core.js ===
console.log('core.js завантажено');

import { renderCategories, renderBestsellers } from './product.js';
import { loadCartFromStorage } from './cart.js';
import { loadUserFromStorage, initClientUI } from './client.js';
import { renderCatalog, renderCatalogFilter } from './catalog.js'; // Виправлено імпорт

export const Core = {
  init() {
    loadUserFromStorage();
    initClientUI(); 
    loadCartFromStorage();
    renderCategories();
    renderBestsellers();
    renderCatalogFilter(); // Додайте цей рядок
    renderCatalog(); // Ініціалізуємо каталог при старті
    console.log('Core ініціалізовано');

  }
};








