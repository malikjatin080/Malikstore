// CART STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE CART COUNT
function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

// ADD TO CART FUNCTION
function addToCart(name, price, image) {
    const product = {
        id: Date.now(),
        name: name,
        price: price,
        image: image
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

// LOAD CART ON PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});
