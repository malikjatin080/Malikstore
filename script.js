// ===== USER CHECK =====
let user = localStorage.getItem("user");

// ===== CART =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== UPDATE CART COUNT =====
function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}
updateCartCount();

// ===== ADD TO CART =====
function addToCart(name, price) {

    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert("Added to cart!");
}

// ===== LOAD CART PAGE =====
function loadCart() {

    let container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {

        subtotal += item.price;

        container.innerHTML += `
        <div class="cart-card">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total").innerText = subtotal + 79;
}

// ===== REMOVE ITEM =====
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// ===== CHECKOUT =====
function checkout() {

    if (cart.length === 0) {
        alert("Cart empty!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        items: cart,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Payment Successful!");
    window.location.href = "orders.html";
}

// ===== LOAD ORDERS =====
function loadOrders() {

    let list = document.getElementById("order-list");
    if (!list) return;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.forEach(order => {
        list.innerHTML += `
        <div class="order-card">
            <p>Date: ${order.date}</p>
            <p>Items: ${order.items.length}</p>
        </div>
        `;
    });
}

// ===== RUN FUNCTIONS =====
loadCart();
loadOrders();
