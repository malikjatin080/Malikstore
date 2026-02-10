let cart = [];
let total = 0;
function orderNow(name, price) {
  let msg = `Hello Malik Store,%0AProduct: ${name}%0APrice: ₹${price}`;
  window.open(`https://wa.me/919306116203?text=${msg}`, "_blank");
}

function addToCart(name, price) {
  cart.push(name);
  total += price;

  document.getElementById("cart-items").innerText =
    "Items: " + cart.join(", ");

  document.getElementById("cart-total").innerText =
    "Total: ₹" + total;
}
