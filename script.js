let count = 0;
let total = 0;

function addToCart(price) {
  count++;
  total += price;
  document.getElementById("cart").innerText =
    `Cart: ${count} items | Total ₹${total}`;
}
