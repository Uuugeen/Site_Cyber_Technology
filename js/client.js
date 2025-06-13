// === client.js ===
import { showMessage } from "./interface.js";

let currentUser = null;

export function loadUserFromStorage() {
  const stored = localStorage.getItem("user");
  if (stored) {
    currentUser = JSON.parse(stored);
  }
}

export function saveUser(user) {
  currentUser = user;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem(`cart_${user.email}`, localStorage.getItem("cart") || "[]");
  localStorage.setItem(`password_${user.email}`, user.password);
  updateUserUI(); 
}

export function logoutUser() {
  currentUser = null;
  localStorage.removeItem("user");
  updateUserUI();

  const modal = document.getElementById("userInfoModal");
  if (modal) modal.style.display = "none";
}

export function isLoggedIn() {
  return !!currentUser;
}

function validatePassword(password) {
  const minLength = /.{8,}/;
  const hasUpper = /[A-Z]/;
  const hasLower = /[a-z]/;
  const hasDigit = /[0-9]/;
  return minLength.test(password) && hasUpper.test(password) && hasLower.test(password) && hasDigit.test(password);
}

export function initClientUI() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("input[type='password']").value;
      const username = loginForm.querySelector("input[name='username']")?.value || "Користувач";

      const storedPassword = localStorage.getItem(`password_${email}`);

      if (!validatePassword(password)) {
        alert("Пароль має містити щонайменше 8 символів, одну велику літеру, одну малу та одну цифру.");
        return;
      }

      if (storedPassword && storedPassword !== password) {
        alert("Невірний пароль. Спробуйте ще раз.");
        return;
      }

      // Якщо пароля немає, реєструємо нового користувача
      if (!storedPassword) {
        localStorage.setItem(`password_${email}`, password);
      }

      saveUser({ email, username, password });
      loginForm.reset();
      const modal = document.getElementById("loginModal");
      if (modal) modal.style.display = "none";
      document.body.classList.remove("modal-open");

      location.reload();
    });
  }

  const editForm = document.getElementById("editProfileForm");
  if (editForm) {
    editForm.onsubmit = (e) => {
      e.preventDefault();
      const updatedUser = {
        ...currentUser,
        username: editForm.username.value,
        email: editForm.email.value,
        phone: editForm.phone.value,
        address: editForm.address.value,
        password: currentUser.password || ''
      };
      saveUser(updatedUser);
      loadUserFromStorage();
      showUserInfo();
      updateUserUI();
      showMessage("Дані оновлено!");

      const modal = document.getElementById("editProfileModal");
      if (modal) modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    };
  }

  updateUserUI();
}

export function prepareOrder(cart, products) {
  if (!cart || cart.length === 0) {
    alert("Кошик порожній");
    return;
  }

  const modal = document.getElementById("checkoutModal");
  const form = document.getElementById("checkoutForm");

  const nameInput = form.querySelector("input[name='username']");
  const emailInput = form.querySelector("input[name='email']");

  const modalCart = document.getElementById("cartModal");
  if (currentUser) {
    nameInput.value = currentUser.username;
    emailInput.value = currentUser.email;
  }
  modalCart.classList.remove("show");
  document.body.classList.add("modal-open");
  modal.classList.add("show");

  form.onsubmit = (e) => {
    e.preventDefault();
    const username = nameInput.value;
    const email = emailInput.value;
    const phone = form.querySelector("input[name='phone']").value;
    const address = form.querySelector("input[name='address']").value;

    const enrichedCart = cart.map(item => {
      const full = products.find(p => p.id === item.id);
      return ({
        ...item,
        name: full ? full.name : 'Товар',
        price: full ? full.price : 0
      });
    });

    const total = enrichedCart.reduce((sum, item) => sum + (item.qty * item.price), 0);

    const newOrder = {
      date: new Date().toLocaleString(),
      items: enrichedCart,
      total,
      contact: { username, email, phone, address }
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || {};
    const key = email || "guest";
    let userOrders = orders[key] || [];
    userOrders.push(newOrder);

    userOrders = userOrders.slice(-3);

    orders[key] = userOrders;
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.email}`, "[]");
    }
    showMessage("Замовлення успішно оформлено!", 1000);

    setTimeout(() => {
      modal.classList.remove("show");
      location.reload();
    }, 1000);
  }
}

function updateUserUI() {
  let loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) {
    // Якщо кнопки немає, створюємо її
    loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    // Додайте потрібний клас, якщо треба
    document.body.prepend(loginBtn); // або у потрібний контейнер
  }

 
  const newBtn = loginBtn.cloneNode(true);
  loginBtn.parentNode.replaceChild(newBtn, loginBtn);

  if (currentUser) {
    newBtn.textContent = `${currentUser.username}`;
    newBtn.onclick = () => {
      const modal = document.getElementById("userInfoModal");
      if (modal) {
        loadUserFromStorage();
        showUserInfo();
        modal.classList.add("show");
        document.body.classList.add("modal-open");
      }
    };
  } else {
    newBtn.textContent = "Вхід";
    newBtn.onclick = () => {
      const modal = document.getElementById("loginModal");
      if (modal) {
        modal.classList.add("show");
        document.body.classList.add("modal-open");
      }
    };
  }
}

document.addEventListener("click", (e) => {
  if (e.target.id === "editProfileBtn") {
    const modal = document.getElementById("editProfileModal");
    const form = document.getElementById("editProfileForm");
    if (modal && form && currentUser) {
      form.username.value = currentUser.username || '';
      form.email.value = currentUser.email || '';
      form.phone.value = currentUser.phone || '';
      form.address.value = currentUser.address || '';
      modal.classList.add("show");
      document.body.classList.add("modal-open");
    }
  }
});

function showUserInfo() {
  const infoBlock = document.getElementById("userInfoBlock");
  if (!infoBlock || !currentUser) return;

  const orders = JSON.parse(localStorage.getItem("orders")) || {};
  const userOrders = orders[currentUser.email] || [];

  let phone = currentUser.phone || "";
  let address = currentUser.address || "";
  if (userOrders.length > 0) {
    const lastOrder = userOrders[userOrders.length - 1];
    if (lastOrder.contact) {
      phone = lastOrder.contact.phone || phone;
      address = lastOrder.contact.address || address;
    }
  }

  const lastOrders = userOrders.slice(-3).reverse();

  infoBlock.innerHTML = `
    <h3>${currentUser.username}</h3>
    <h4>Інформація про користувача:</h4>
    <p>Email: ${currentUser.email}</p>
    <div>${phone ? "Телефон: " + phone : ""}</div>
    <div>${address ? "Адреса: " + address : ""}</div>
    <br>
    <button id="editProfileBtn" class="buttonsSite">Змінити дані</button>
    <h4>Останні замовлення:</h4>
    <ul>
      ${lastOrders.length > 0
        ? lastOrders.map((order, index) => `
          <li data-index="${userOrders.length - 1 - index}" class="order-item" style="cursor: pointer;">
            ${order.date} — ${order.total} ₴ (${order.items.length} товарів)
          </li>
        `).join('')
        : '<li>Немає замовлень</li>'}
    </ul>
    <br>
    <button id="logoutAccount" class="buttonsSite">Вийти з акаунту</button>
  `;

  document.querySelectorAll(".order-item").forEach(el => {
    el.addEventListener("click", () => {
      const index = el.dataset.index;
      const order = userOrders[index];
      const modal = document.getElementById("orderDetailsModal");
      const content = document.getElementById("orderDetailsContent");
      if (modal && content) {
        content.innerHTML = `
          <h3>Замовлення ${order.date}</h3>
          <ul>
            ${order.items.map(item => `
              <li>${item.name} × ${item.qty} — ${item.price * item.qty} ₴</li>
            `).join('')}
          </ul>
          <strong>Сума: ${order.total} ₴</strong>
          <br><br>
          <div>Ім'я: ${currentUser.username}</div>
          <div>Email: ${currentUser.email}</div>
          <div>Телефон: ${order.contact?.phone || ""}</div>
          <div>Адреса: ${order.contact?.address || ""}</div>
        `;
        modal.classList.add("show");
        document.body.classList.add("modal-open");
      }
    });
  });

  const logoutBtn = document.getElementById("logoutAccount");
  if (logoutBtn) logoutBtn.onclick = logoutUser;
}

const changePasswordBtn = document.getElementById("changePasswordBtn");
const changePasswordModal = document.getElementById("changePasswordModal");
const changePasswordForm = document.getElementById("changePasswordForm");

if (changePasswordBtn && changePasswordModal && changePasswordForm) {
  changePasswordBtn.onclick = () => {
    document.getElementById("editProfileModal")?.classList.remove("show");
    changePasswordModal.classList.add("show");
  };

  changePasswordForm.onsubmit = (e) => {
    e.preventDefault();
    const oldPass = changePasswordForm.oldPassword.value;
    const newPass = changePasswordForm.newPassword.value;

    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && stored.password === oldPass) {
      stored.password = newPass;
      saveUser(stored);
      showMessage("Пароль змінено");
      changePasswordModal.classList.remove("show");
      document.body.classList.remove("modal-open");
    } else {
      showMessage("Старий пароль невірний");
    }
  };
}
