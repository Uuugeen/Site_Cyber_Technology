// === script.js ===

import { Core } from './core.js';
import { showProductDetails } from './product.js';
import { renderCatalog, renderCatalogFilter, triggerSearch } from './catalog.js';


document.addEventListener("DOMContentLoaded", () => {
  console.log('викликаємо Core.init()');
  Core.init();
  renderCatalog();          
  renderCatalogFilter();



  // === Модальні вікна ===
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const cartIcon = document.getElementById("modalIconCart");
  const closeBtns = document.querySelectorAll(".close-btn");

  if (cartBtn && cartModal) {
    cartBtn.addEventListener("click", () => {
      cartModal.classList.add("show");
      document.body.classList.add("modal-open");
    });
  }

  if (cartIcon && cartModal) {
    cartIcon.addEventListener("click", () => {
      cartModal.classList.add("show");
      document.body.classList.add("modal-open");
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("show")
        document.body.classList.remove("modal-open");
      };
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });

  // === Детальніше про товар ===
  document.addEventListener("click", (e) => {
    const infoBtn = e.target.closest(".details-btn");
    if (infoBtn) {
      const id = infoBtn.dataset.id;
      if (id) showProductDetails(id);
    }
  });

  
});

const searchBtn = document.getElementById('searchToggleBtn');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');

if (searchBtn && searchModal) {
  searchBtn.addEventListener('click', () => {
    const isOpen = searchModal.classList.contains('expanded');

    if (isOpen && searchInput.value.trim()) {
      triggerSearch();
      searchModal.classList.remove('expanded');
    } else if (!isOpen) {
      searchModal.classList.add('expanded');
      setTimeout(() => searchInput.focus(), 300);
    } else {
      searchModal.classList.remove('expanded');
    }
  });

  // Додаємо обробник Enter
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        triggerSearch();
        searchModal.classList.remove('expanded');
      }
    });
  }
}
