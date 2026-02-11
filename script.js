let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

updateCartCount();
