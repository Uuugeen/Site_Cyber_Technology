// === cart.js ===

import { PRODUCTS } from './shared.js';
import { prepareOrder } from './client.js';

// Додаємо універсальну функцію для повідомлень
export function showMessage(text, timeout = 2000) {
  const message = document.getElementById('message');
  if (message) {
    message.innerText = text;
    message.classList.add('show');
    setTimeout(() => {
      message.classList.remove('show');
    }, timeout);
  }
}

document.addEventListener('click', (e) => {
  const checkoutBtn = e.target.closest('#checkoutBtn');
  
  if (checkoutBtn) {
    const rawCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!rawCart || rawCart.length === 0) {
      showMessage("Кошик порожній!");
      return;
    }
    prepareOrder(rawCart, PRODUCTS);
  }
});


let cart = [];

// Додавання товару в кошик
export function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty--;
    if (existing.qty <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCartToStorage();
  updateCartUI();
}

// Збереження в localStorage
function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Завантаження з localStorage
export function loadCartFromStorage() {
  const stored = localStorage.getItem("cart");
  if (stored) {
    cart = JSON.parse(stored);
    updateCartUI();
  }
}

// Оновлення інтерфейсу кошика (кількість і список)
function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = count;

  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItemsContainer || !cartTotal) return;

  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;

    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${product.name}</strong>  
        <div>
          <img/ src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px; object-fit: contain;">
          <span style="padding:1rem 1rem 1rem 0">Кількість:\t${item.qty}</span>
          <button class="cart-decrease" data-id="${item.id}">−</button>
          <button class="cart-increase" data-id="${item.id}">+</button>
        </div>
      </div>
      <div>${itemTotal} ₴</div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = `${total} ₴`;
}

// Обробка кнопок
document.addEventListener("click", (e) => {
  const incBtn = e.target.closest(".cart-increase");
  if (incBtn) {
    const id = incBtn.dataset.id;
    if (id) addToCart(id);
  }

  const decBtn = e.target.closest(".cart-decrease");
  if (decBtn) {
    const id = decBtn.dataset.id;
    if (id) removeFromCart(id);
  }

  const clearBtn = e.target.closest("#clearCartBtn");
  if (clearBtn) {
    clearCart();
    showMessage("Кошик очищено!");
  }
});



