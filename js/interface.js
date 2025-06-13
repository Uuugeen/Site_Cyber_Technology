// === Зміна теми ===
export function applyTheme(theme) {
  const icon = document.getElementById("icon");
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
}

export function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
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
}

// === Повідомлення ===
export function showMessage(text, timeout = 2000) {
  let message = document.getElementById('message');
  if (!message) {
    message = document.createElement('div');
    message.id = 'message';
    message.className = 'message';
    document.body.appendChild(message);
  }
  message.innerText = text;
  message.classList.add('show');
  setTimeout(() => {
    message.classList.remove('show');
  }, timeout);
}

// === Бургер-меню ===
export function initBurgerMenu() {
  const nav = document.getElementById("mainNav");
  const burgerBtn = document.getElementById("burgerBtn");
  const closeNavBtn = document.getElementById("closeNavBtn");

  if (nav && burgerBtn) 
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