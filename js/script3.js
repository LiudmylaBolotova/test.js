// Callbacks

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }





// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// }
// );






// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);










// forEach

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

  
// orderedItems.forEach(function (item, index) {
// totalPrice += item;
// });
//   // Change code above this line
//   return totalPrice;
// }




// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function(number, index){
// if (number > value) {
//   filteredNumbers.push(number);
// }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }




// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

// firstArray.forEach(function(number, index){
//    if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
// });
//   return commonElements;
//   // Change code above this line
// }





// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line




// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }




// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }




// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//       continue;
//     }
//     newArray.push(numbers[i]);
//   }
//   return newArray;
//   // Change code above this line
// }


// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);




// Map

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);




// flatMap

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);





// Change code below this line
// const getUserNames = users => users.map(student => student.name);


  // Change code above this line



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >=  MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);




// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter((user) => user.eyeColor === color);

// };
// Change code above this line



// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter((user) => user.age > minAge && user.age < maxAge);


// };
// Change code above this line



// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };
// Change code above this line




// Change code below this line
// const getFriends = (users) => {
//    return users.flatMap(user => user.friends).filter((friends, index, array) => array.indexOf(friends) === index);
// };
// Change code above this line
































// This в стрелочных функциях

// const showThis = () => {
//   console.log('This in showThis: ', this);
// };
// showThis();

// const user = {
//   name: 'Mango',
// }
// user.showContext = showThis;
// user.showContext();





// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('This: ', this);
//     console.log('This fullName: ', this.fullName);

//     const inner = () => {
//       console.log('This is inner: ', this);
//     }
//     inner();
//   },
// };

// user.showName();






// Change code below this line
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive)
// };
// Change code above this line


// Change code below this line
// const getInactiveUsers = (users) => {
//  return users.filter(user => !user.isActive)
// };
// Change code above this line






// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);





// Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };
// Change code above this line




// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);





// Change code below this line
// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive)
// };
// Change code above this line




// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);





// Change code below this line
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive)
// };
// Change code above this line



// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;




// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, name) => {
//   return total + name.playtime / name.gamesPlayed;
// }, 0);





// Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };
// Change code above this line



// Change code below this line
// const getTotalFriendCount = users => {
//  return users.reduce((total, user) => total + user.friends.length, 0);
// };
// Change code above this line



// sorts

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();




// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//     a.author.localeCompare(b.author),
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//     b.author.localeCompare(a.author),
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);




// Change code below this line
// const sortByAscendingBalance = users => {
//    return [...users].sort((a, b) => a.balance - b.balance)
// };
// Change code above this line



// Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
//  };




// Change code below this line
// const sortByName = users => {
//    return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// Change code above this line



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author))
// .filter(books => books.rating > MIN_BOOK_RATING)
//   .map(book => book.author);



// Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// };
// Change code above this line







// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]









// Change code below this line
// const getSortedFriends = users => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((item, index, array) => array.indexOf(item) === index)
//     .sort((a, b) => a.localeCompare(b));
// }; 

// Change code above this line









// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     const balanceGender = users.filter(user => user.gender === gender);
//  return balanceGender.reduce((acc, value) => acc + value.balance, 0);  
// };
// Change code above this line
















































// Filter

// const filter = function (array, test) {

//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);

//     };
//   }

//   return filteredArray;
// };

// 1 Надо передать функцию
// 2 Функция получает элемент массива
// 3 Если элемент массива удовлетворяет условие - true
// 4 Если элемент массива НЕ удовлетворяет условие - false
  

// const callback1 = function (value) {
//   return value <= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value >= 4;
// }

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value, callback2) {
//   return value >= 4;
// });
// console.log(r2);



// Замыкание

// const fnA = function (parameter) {
//   const innerVariable = 'значение внутренней переменной функции fnA';
//   const innerFunction = function () {

//     console.log(innerVariable);
//     console.log(`Это вызов innerFunction`);
//   };
//   return innerFunction;
// };

// const fnB = fnA();
// console.log(fnB);




// Cooking

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName}: ${dish}`);
// };

// makeDish('Mango', 'eggs');
// makeDish('Mango', 'coffee');
// makeDish('Mango', 'sandwich');

// makeDish('Polly', 'soup');
// makeDish('Polly', 'juice');
// makeDish('Polly', 'bread');



// const makeSheff = function (name) {
// const makeDish = function (dish) {
// console.log(`${name}: ${dish}`);

//   };
// return makeDish;
// };

// const mango = makeSheff('Mango');


// mango('eggs');
// mango('sandwich');

// const polly = makeSheff('Polly');

// polly('soup');
// polly('bread');




// Сортировка кастомная по первой букве, возрастание

// const byName = [...player].sort((a, b) => {
//   const result = a.name[0] > b.name[0];
//   if (result) {
//     return 1;
//   }
//   if (!result) {
//     return -1;
// }
// });