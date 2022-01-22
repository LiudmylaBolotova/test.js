// This

// homework

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };



// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]






// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };




// DOM


const magicBtn = document.querySelector('.js-magic-btn');



// const navItemEl = document.querySelectorAll('.site-nav_item');

// console.log(navItemEl);

// magicBtn.addEventListener('click', () => {
    
//     const navItemEl = document.querySelectorAll('.site-nav_item');

//     console.log(navItemEl);
// });



// const heroTitleEl = document.querySelector('.hero_title');

// console.log(heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Репета пирожочек';

// const action = document.querySelectorAll('.js-actions button');
// console.log(action);
// console.log(action[0].dataset);
// console.log(action[1].dataset.action);




// magicBtn.addEventListener('click', () => {
// const navEl = document.querySelector('.site-nav');
// console.log(navEl);
// console.log(navEl.classList);
//     navEl.classList.add('super-cool');
//     navEl.classList.remove('super-cool');
// });



// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);

// magicBtn.addEventListener('click', () => {
    
//     navEl.classList.toggle('qwerty');
//     console.log(navEl);
// });


 
// Работа с классами

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool');
// navEl.classList.remove('site-nav');
//  navEl.classList.replace('super-cool', 'qwerty');
// console.log(navEl.classList.contains('wow'));


// const navEl = document.querySelector('.site-nav');
// const firstNavItemEl = navEl.querySelector('.site-nav_item');

// console.log(firstNavItemEl);

// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);

// console.log(navEl.children);
// console.log(navEl.lastElementChild);






// const titleEl = document.createElement('h2');
// titleEl.classList.add('page-title');
// console.log(titleEl);
// titleEl.textContent = 'заголовок из js';

// document.body.appendChild(titleEl);






// const navItemEl = document.createElement('li');
// navItemEl.classList.add('.site-nav_item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('.site-nav_link');
// navLinkEl.textContent = 'Добавленная ссылка из js';
// navLinkEl.href = '/index.html';


// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);


// const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl, imagEl);







// const product = {
//     name: 'Сервоприводы',

//     description: 'lhjjyghtf kjdugy alsdjkuaghd lkkhjdhv hlwkj khsffgafsgklk',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.classList.add('product_name');
// nameEl.textContent = product.name;


// const descrEl = document.createElement('p');
// descrEl.classList.add('product_descr');
// descrEl.textContent = product.description;


// const priceEl = document.createElement('p');
// priceEl.classList.add('product_price');
// priceEl.textContent = `Цена: ${product.price}`;


// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);



// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);








// title

// const titleEl = document.querySelector('.title');
// titleEl.innerHTML = 'перезапишет разметку';
// titleEl.innerHTML = '';


// titleEl.insertAdjacentHTML('beforebegin', 'newCode');
// titleEl.insertAdjacentHTML('afterend', 'newCodeTwo');
// titleEl.insertAdjacentHTML('afterbegin', 'newCodeThree');
// titleEl.insertAdjacentHTML('beforeend', 'newCodeFour');