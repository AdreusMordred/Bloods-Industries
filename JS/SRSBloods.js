// CART SYSTEM// SRSBloods.js

const CART_KEY = 'srs_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  let cart = getCart();
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
  alert('Product added to cart!');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

async function fetchProducts() {
  const response = await fetch('/products.json');
  return await response.json();
}

async function renderCart() {
  const cart = getCart();
  const products = await fetchProducts();
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let total = 0;
  cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return;

    const itemTotal = product.price * cartItem.quantity;
    total += itemTotal;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="cart-img">
      <div class="cart-details">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Quantity: ${cartItem.quantity}</p>
        <p>Total: $${itemTotal.toFixed(2)}</p>
        <button onclick="removeFromCart(${product.id})" class="remove-btn">Remove</button>
      </div>
    `;
    cartContainer.appendChild(item);
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
  cartContainer.appendChild(totalDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cart-container')) {
    renderCart();
  }
});
