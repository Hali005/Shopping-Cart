const Data = [
    {
        id: 1,
        BookName: "Applied Physics",
        price: 500,
        img: "images/1.jpg"
    },
    {
        id: 2,
        BookName: "Maths",
        price: 800,
        img: "images/2.jpg"
    },
    {
        id: 3,
        BookName: "Urdu",
        price: 900,
        img: "images/3.jpg"
    },
    {
        id: 4,
        BookName: "Embedded System",
        price: 1000,
        img: "images/4.jpg"
    },
    {
        id: 5,
        BookName: "Circuit Analysis",
        price: 1100,
        img: "images/5.jpg",
    },
];

const myContent = document.querySelector(".listProduct")
const cartcount = document.getElementById("cart-count")
const amount = document.getElementById("amount")
const listCart = document.querySelector(".listCart")
let iconCart = document.querySelector(".icon-cart")
let closecart = document.querySelector(".close")
let body = document.querySelector("body")

let totalcart = 0;
let cartItems = {};
let total=0;

function updatecart() {
    cartcount.textContent = totalcart;
}

function updateTotalAmount(){
    amount.innerHTML= total
}

function updateCartDisplay() {
    listCart.innerHTML = ''; 
    for(let i=0; i<Data.length;i++)
    {
        let item = Data[i]
        let quantity=cartItems[i+1]
        if (quantity > 0) {
            let cartItemHTML = `
            <div class="item">
                <div class="image">
                    <img src="${item.img}">
                </div>
                <div class="name">
                    ${item.BookName}
                </div>
                <div class="totalPrice">
                    RS${item.price * quantity}
                </div>
                <div class="quantity">
                    Quantity: <span>${quantity}</span>
                </div>
                <div>
                    <span id="amount">Total Amount: ${total}</span>
                </div>
            </div>`;
            listCart.innerHTML += cartItemHTML;
        }
    }
}

closecart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const showInHtml = Data.map((project, index) => {
    return `
            <div class="item" data-id="${index}">
                <img src=${project.img}>
                <h2>${project.BookName}</h2>
                <div class="price">${project.price}</div>
                <div class="btn">
                    <button class="minus" data-id="${index}">-</button>
                    <span class="counter" id="counter-${index}">0</span>
                    <button class="plus" data-id="${index}">+</button>
                </div>
            </div>
        </div>
    `
}).join('')

myContent.innerHTML = showInHtml

let plus = document.querySelectorAll('.plus').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-id');
        const counterElement = document.getElementById(`counter-${index}`);
        let count = parseInt(counterElement.textContent, 10);
        counterElement.textContent = ++count;

        const productId = Data[index].id;
        if (cartItems[productId]) {
            cartItems[productId]++;
        } else {
            cartItems[productId] = 1;
        }
        totalcart++;
        total = total + Data[index].price
        updatecart();
        updateCartDisplay();
    });
});

let minus = document.querySelectorAll('.minus').forEach((button) => {
    button.addEventListener('click', (event) => {
        let index = event.target.getAttribute('data-id');
        
        const counterElement = document.getElementById(`counter-${index}`);
        let count = parseInt(counterElement.textContent, 10);
        if (count > 0) {
            counterElement.innerHTML = --count;

            const productId = Data[index].id;
            if (cartItems[productId] && cartItems[productId] > 0) {
                cartItems[productId]--;
            }
            totalcart--;
            total = total - Data[index].price
            updatecart();
            updateCartDisplay();
        }
    });
});
