let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart").innerText =
    "Cart: " + count + " items";
}
