let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
}
addToCart('Printed T-Shirt', 499, 'images/tshirt1.jpg')

function placeOrder() {
  alert("Order placed (demo)");
}
