// === script.js ===

import { Core } from './core.js';
import { showProductDetails } from './product.js';
import { renderCatalog, renderCatalogFilter } from './catalog.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('викликаємо Core.init()');
  Core.init();
  renderCatalog();          
  renderCatalogFilter();

  // === Тема ===
  const themeToggle = document.querySelector(".theme-toggle");
  const icon = document.getElementById("icon");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      if (icon) icon.setAttribute("fill", "#f3f3f3");
    } else {
      document.body.classList.remove("dark-mode");
      if (icon) icon.setAttribute("fill", "#000000");
    }

    // Додаткова стилізація модалок
    const modals = document.querySelectorAll(".modal .modal-content");
    modals.forEach(modal => {
      modal.style.backgroundColor = theme === "dark" ? "#2a2a2a" : "#fff";
      modal.style.color = theme === "dark" ? "#f3f3f3" : "#000";
    });
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      const newTheme = isDark ? "dark" : "light";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
  }

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
    } else if (!isOpen) {
      searchModal.classList.add('expanded');
      setTimeout(() => searchInput.focus(), 300);
    } else {
      searchModal.classList.remove('expanded');
    }
  });
}


  // === Бургер-меню ===
const nav = document.getElementById("mainNav");
const burgerBtn = document.getElementById("burgerBtn");
const closeNavBtn = document.getElementById("closeNavBtn");

if (nav && burgerBtn) {
  burgerBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    burgerBtn.classList.toggle("active");
    document.getElementById("closeNavBtn").style.display = "block";
  });

  // Закрити по кнопці "×"
  if (closeNavBtn) {
    closeNavBtn.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      burgerBtn.classList.remove("active");
      document.getElementById("closeNavBtn").style.display = "none";
    });
  }

  // Закривати при кліку поза навігацією
  document.addEventListener("click", (e) => {
    const isClickOutsideNav = !nav.contains(e.target) && e.target !== burgerBtn;
    if (document.body.classList.contains("nav-open") && isClickOutsideNav) {
      document.body.classList.remove("nav-open");
      burgerBtn.classList.remove("active");
      document.getElementById("closeNavBtn").style.display = "none";
    }
  });

  // При ресайзі
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      document.body.classList.remove("nav-open");
      burgerBtn.classList.remove("active");
      document.getElementById("closeNavBtn").style.display = "none";
    }
  });
}
