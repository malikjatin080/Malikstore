let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push(name);
  total += price;

  document.getElementById("cart-items").innerText =
    "Items: " + cart.join(", ");

  document.getElementById("cart-total").innerText =
    "Total: ₹" + total;
}
