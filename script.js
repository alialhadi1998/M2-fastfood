let cart = [];

function addToCart(name, price){

let item = cart.find(
p => p.name === name
);

if(item){

item.qty++;

}else{

cart.push({
name:name,
price:price,
qty:1
});

}

updateCart();

}

function updateCart(){

let cartItems =
document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;
let count=0;

cart.forEach((item,index)=>{

total += item.price * item.qty;
count += item.qty;

cartItems.innerHTML += `
<div class="cart-item">

<h4>${item.name}</h4>

<p>${item.price} د.ع</p>

<button class="qty-btn"
onclick="decreaseQty(${index})">
-
</button>

${item.qty}

<button class="qty-btn"
onclick="increaseQty(${index})">
+
</button>

</div>
`;

});

document.getElementById("totalPrice")
.innerText = total;

document.getElementById("cartCount")
.innerText = count;

}

function increaseQty(index){

cart[index].qty++;

updateCart();

}

function decreaseQty(index){

cart[index].qty--;

if(cart[index].qty <= 0){

cart.splice(index,1);

}

updateCart();

}

function toggleCart(){

document
.getElementById("cartPanel")
.classList
.toggle("active");

}

function sendOrder(){

let message =
"طلب جديد من M2 Fast Food%0A%0A";

let total = 0;

cart.forEach(item=>{

message +=
item.name +
" × " +
item.qty +
"%0A";

total +=
item.price *
item.qty;

});

message +=
"%0Aالمجموع = " +
total +
" د.ع";

window.open(
"https://wa.me/9647819118161?text="+message
);

}
function searchFood(){

let filter =
document
.getElementById("searchInput")
.value
.toLowerCase();

let items =
document.querySelectorAll(".food-item");

items.forEach(item=>{

let text =
item.innerText.toLowerCase();

item.style.display =
text.includes(filter)
? "block"
: "none";

});

}