const Data = [
    {
        id:1,
        BookName:"Applied Physics",
        price:1000,
        img:"images/1.jpg"
    },
    {
        id:2,
        BookName:"Maths",
        price:2000,
        img:"images/2.jpg"
    },
    {
        id:3,
        BookName:"Urdu",
        price:3000,
        img:"images/3.jpg"
    },
    {
        id:4,
        BookName:"Embedded System",
        price:4000,
        img:"images/4.jpg"
    },
    {
        id:5,
        BookName:"Circuit Analysis",
        price:4000,
        img:"images/5.jpg",
    },
];

const myContent = document.querySelector(".listProduct")

const showInHtml = Data.map((project,index)=>{
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

document.querySelectorAll('.plus').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-id');
        const counterElement = document.getElementById(`counter-${index}`);
        let count = parseInt(counterElement.textContent, 10);
        counterElement.textContent = ++count; // Increment the counter
    });
});

// document.querySelectorAll('.minus').forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const index = event.target.getAttribute('data-id');
//         const counterElement = document.getElementById(`counter-${index}`);
//         let count = parseInt(counterElement.textContent, 10);
//         if (count > 0) {
//             counterElement.textContent = --count; // Decrement the counter, but not below 0
//         }
//     });
// });


//   minus button logic using for loop
const listen = document.getElementsByClassName('minus')
for(let i=0;i<listen.length;i++){
    listen[i].addEventListener('click',(e)=>{
        const index = e.target.getAttribute('data-id');
        const counterElement = document.getElementById(`counter-${index}`)
        let count = parseInt(counterElement.textContent,10)
        counterElement.textContent = count-1;
        if(count<=0)
        {
            counterElement.textContent=0;
        }   
    })
}
console.log(listen.length)
