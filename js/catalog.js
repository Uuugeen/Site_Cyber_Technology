// === catalog.js ===

import { PRODUCTS, CATEGORIES } from './shared.js';
import { showProductDetails } from './product.js';

const catalogList = document.getElementById('catalogList');
const categoryFilter = document.getElementById('catalogCategoryFilter');
const resetBtn = document.getElementById('resetCatalogFilter');
const searchLabel = document.getElementById('searchQueryLabel');

if (categoryFilter) categoryFilter.value = '';

export function renderCatalog(categoryId = null, searchQuery = '') {
  if (!catalogList) return;

  catalogList.innerHTML = '';

  let filtered = categoryId
    ? PRODUCTS.filter(p => p.categoryId === parseInt(categoryId))
    : [...PRODUCTS];

  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    filtered = filtered.filter(p => {
      const category = CATEGORIES.find(c => c.id === p.categoryId)?.name.toLowerCase() || '';
      return (
        p.name.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.characteristics?.toLowerCase().includes(q) ||
        category.includes(q) ||
        p.price.toString().includes(q)
      );
    });

    if (searchLabel) {
      searchLabel.textContent = `Результати за запитом: "${searchQuery}"`;
      searchLabel.style.display = 'block';
    }
  } else {
    if (searchLabel) searchLabel.style.display = 'none';
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.price} ₴</p>
      <button data-id="${product.id}" class="buttonsSite details-btn">Детальніше</button>
    `;
    catalogList.appendChild(card);
  });

  catalogList.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      if (id) showProductDetails(id);
    });
  });
}

export function renderCatalogFilter() {
  if (!categoryFilter) return;

  categoryFilter.innerHTML = '';
  const allOption = document.createElement('option');
  allOption.value = '';
  allOption.textContent = 'Всі категорії';
  categoryFilter.appendChild(allOption);

  CATEGORIES.forEach(category => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    categoryFilter.appendChild(option);
  });

  categoryFilter.onchange = () => {
    const val = categoryFilter.value;
    if (!val) {
      renderCatalog();
    } else {
      renderCatalog(val);
    }
  };

  if (resetBtn) {
    resetBtn.onclick = () => {
      categoryFilter.value = '';
      renderCatalog();
    };
  }
}

export function triggerSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.trim() : '';
  renderCatalog(null, query);
}




