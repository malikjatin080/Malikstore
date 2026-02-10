/***********************
 GLOBAL STORAGE SETUP
************************/
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let user = JSON.parse(localStorage.getItem("user")) || null;

/***********************
 CART FUNCTIONS
************************/
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  alert(name + " added to cart 🛒");
}

function renderCart() {
  let items = cart.map(i => i.name).join(", ");
  let total = cart.reduce((s, i) => s + i.price, 0);

  let itemsEl = document.getElementById("cartItems");
  let totalEl = document.getElementById("cartTotal");

  if (itemsEl && totalEl) {
    itemsEl.innerText = items || "No items";
    totalEl.innerText = "Total: ₹" + total;
  }
}

/***********************
 WISHLIST FUNCTIONS
************************/
function addToWishlist(item) {
  if (!wishlist.includes(item)) {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(item + " added to wishlist ❤️");
  } else {
    alert("Already in wishlist");
  }
}

/***********************
 LOGIN / SIGNUP
************************/
function signup() {
  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPass").value;

  if (!email || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email, pass }));
  alert("Signup successful ✅");
  closeModals();
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.email === email && savedUser.pass === pass) {
    user = savedUser;
    alert("Login successful ✅");
    closeModals();
  } else {
    alert("Invalid login ❌");
  }
}

/***********************
 MODALS
************************/
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModals() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

/***********************
 ORDER HISTORY
************************/
function placeOrder() {
  if (!cart.length) {
    alert("Cart is empty");
    return;
  }

  let total = cart.reduce((s, i) => s + i.price, 0);

  orders.push({
    items: cart,
    total,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  cart = [];

  alert("Order placed successfully 📦");
  renderCart();
}

/***********************
 ORDERS PAGE RENDER
************************/
function renderOrders() {
  let list = document.getElementById("orderList");
  if (!list) return;

  if (!orders.length) {
    list.innerHTML = "<li>No orders yet</li>";
    return;
  }

  list.innerHTML = orders.map(o =>
    `<li>
      <strong>₹${o.total}</strong><br>
      ${o.items.map(i => i.name).join(", ")}<br>
      <small>${o.date}</small>
    </li>`
  ).join("");
}

/***********************
 RATING (UI ONLY)
************************/
function rateProduct(product, stars) {
  alert(product + " rated " + stars + " ⭐");
}

/***********************
 WHATSAPP ORDER
************************/
function orderOnWhatsApp(product, price) {
  let msg =
    `Hello Malik Store,%0AProduct: ${product}%0APrice: ₹${price}`;
  window.open(
    `https://wa.me/91XXXXXXXXXX?text=${msg}`,
    "_blank"
  );
}

/***********************
 INIT
************************/
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  renderOrders();
});
