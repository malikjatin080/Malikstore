let cart = JSON.parse(localStorage.getItem("cart")) || [];
let user = localStorage.getItem("user");

function updateCartCount() {
let count = document.getElementById("cart-count");
if(count) count.innerText = cart.length;
}
updateCartCount();

function addToCart(name, price) {
if(!user){
alert("Login first!");
window.location.href="login.html";
return;
}
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
alert("Added to Cart");
}

function signup(){
let email=document.getElementById("newEmail").value;
let pass=document.getElementById("newPass").value;
localStorage.setItem("user",email);
alert("Account Created");
window.location.href="index.html";
}

function login(){
let email=document.getElementById("email").value;
localStorage.setItem("user",email);
alert("Login Success");
window.location.href="index.html";
}

function loadCart(){
let container=document.getElementById("cart-items");
if(!container) return;

let subtotal=0;
container.innerHTML="";
cart.forEach((item,index)=>{
subtotal+=item.price;
container.innerHTML+=`
<div class="cart-card">
<h4>${item.name}</h4>
<p>₹${item.price}</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
`;
});

document.getElementById("subtotal").innerText=subtotal;
document.getElementById("total").innerText=subtotal+79;
}
loadCart();

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
location.reload();
}

function checkout(){
let method=document.getElementById("payment-method").value;
let orders=JSON.parse(localStorage.getItem("orders"))||[];

orders.push({items:cart,date:new Date().toLocaleString()});
localStorage.setItem("orders",JSON.stringify(orders));
localStorage.removeItem("cart");

alert("Payment Successful!");
window.location.href="orders.html";
}

function loadOrders(){
let orders=JSON.parse(localStorage.getItem("orders"))||[];
let list=document.getElementById("order-list");
if(!list) return;

orders.forEach(o=>{
list.innerHTML+=`
<div class="order-card">
<p>${o.date}</p>
<p>${o.items.length} Items Purchased</p>
</div>
`;
});
}
loadOrders();
