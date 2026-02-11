let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
    let item = cart.find(p => p.name === name);

    if(item){
        item.qty++;
    } else {
        cart.push({name, price, qty:1});
    }

    saveCart();
    alert(name + " added!");
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    let totalQty = cart.reduce((sum,item)=>sum+item.qty,0);
    let el = document.getElementById("cart-count");
    if(el) el.innerText = totalQty;
}

updateCartCount();
