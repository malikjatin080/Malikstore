function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsDiv = document.getElementById("cartItems");
    let subtotal = 0;

    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = "";

    cart.forEach((item, index) => {
        subtotal += item.price;

        cartItemsDiv.innerHTML += `
            <div class="cart-card">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("total").innerText = subtotal + 79;
}
{
   name: "T-Shirt",
   price: 499,
   image: "images/tshirt.jpg"
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
