let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
    let item = cart.find(p => p.name === name);

    if(item){
        item.quantity += 1;
    } else {
        cart.push({name, price, quantity:1});
    }

    saveCart();
}

function removeItem(name){
    cart = cart.filter(item => item.name !== name);
    saveCart();
    location.reload();
}

function changeQty(name, amount){
    let item = cart.find(p => p.name === name);
    item.quantity += amount;

    if(item.quantity <= 0){
        removeItem(name);
    }

    saveCart();
    location.reload();
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    let count = cart.reduce((sum,item)=> sum + item.quantity,0);
    let el = document.getElementById("cart-count");
    if(el) el.innerText = count;
}

updateCartCount();
