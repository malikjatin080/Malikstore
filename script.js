let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
}

function placeOrder() {
  alert("Order placed (demo)");
}
