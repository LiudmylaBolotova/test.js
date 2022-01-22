// objects


// homework


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
 
//   values.push(apartment[key]);
// }


// console.log(key);
//   console.log(apartment[key]);

// keys.push(key);
//   values.push(apartment[key]);




// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }






// Object.keys(apartment);
// Object.values(apartment);

// keys.push(keys);
//   values.push(apartment[keys]);

// keys.push(Object.keys(apartment));
//     values.push(Object.values(apartment));



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);






// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
// //   console.log(color.hex);
// // console.log(color.rgb);
//     hexColors.push(color);
//     rgbColors.push(color);
// }
// console.log(hexColors.push(hex));
//   console.log(rgbColors.push(rgb));


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {

//   const hexColors = colors.push(colors.hex);
// const rgbColors = colors.push(colors.rgb);
// }





// countTotalSalary('polly', 256);
// countTotalSalary('ajax', 644);
// countTotalSalary('mango', 976);





// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const key of products) {
//         if (key.name === productName) {
//             totalPrice = key.price * key.quantity;
//             return totalPrice;
//         }
//     }
//     return totalPrice;
//     // Пиши код выше этой строки
// }


















// function, massive - Object!!!

// const fn = function () {
//  console.log('hello');
// }
// fn.hello = 'wow';
// console.dir(fn.hello);


// const friends = [
//   {name: 'Polly', online: false},
//   {name: 'Mango', online: true},
//   {name: 'Ajax', online: true},
//   { name: 'Kiwi', online: false }];
  
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);

//   friend.newprop = 555;
// }
  
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === name) {
//       return 'YESS';
// }
//   }
//   return 'Not find'
// };

// console.log(findFriendByName(friends, 'Polly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// const allGetNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {

//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(allGetNames(friends));



// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));
// console.log();


// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend.offline);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));






// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;




// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;



// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;






// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }



// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today: {low, high, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, } = forecast;

// const {tomorrow: {low, high, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, } = forecast;



// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;



// Change code below this line
// function calculateMeanTemperature(forecast) {
  
// const {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   },
// } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return { ...{ category, priority, completed }, ...data };
//   // Change code above this line
// }




// let total = 0;
// function add(...args) {
//   for (const key of args) {
// total += key;
//   }
//   return total;
//   // Change code above this line
// }
// add(15, 27);
// console.log(total);




// Сбор recet

// const profile = {
//     name: 'Mango',
//     tag: 'mangoYa',
//     location: 'Canada',
//     stats: {
//         follower: 4443,
//         views: 5434,
//         likes: 4334,

//     },
// };

// const { name, tag, location, ...newProfile } = profile;


// console.log(profile);
// console.log(newProfile);
// console.log(name, tag, location);



// function add(...args) {

//   let total = 0;

//   for (const key of args) {
//     total += key;
//   }

//     return total;
//   // Change code above this line
// }
// add(86, 6);
// add(88, 0, 345, 9);
// console.log(total);


// function add(...args) {
  
//   let total = 0;

//   for (const key of args) {
//     total += key;
//   };
//   return total;
//   // Change code above this line
// }


// function addOverNum(number, ...args) {
//   let total = 0;


//   for (const arg of args) {
//     if (number < arg) {
// total += arg;
//     };
    
//   };

//   return total;
//   // Change code above this line
// }




// Change code below this line
// function findMatches(numbers, ...args) {
//   const matches = []; // Don't change this line
// for (const number of numbers) {
//   for (const arg of args) {
// if (number === arg) {
//   matches.push(arg);
// };
//   };
// };
//   // Change code above this line
//   return matches;
// };
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);



// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const bookIndex = this.books.indexOf(oldName)
//         this.books.splice(bookIndex, 1, newName);
    


//     // Change code above this line
//   },
// };




// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return Object.values(this.potions);
// }
//   // Change code above this line
// };




// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

// this.potions.push(potionName);

//     // Change code above this line
//   },
// };




// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const potionsIndex = this.potions.indexOf(oldName)
//         this.potions.splice(potionsIndex, 1, newName);

//     // Change code above this line
//   },
// };



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.potions[i].name) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (oldName === this.potions[i].name) {
//         return (this.potions[i].name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };


























// const a = { x: 1, y: 2 };
// const b = { x: 5, y: 6 };
// const c = { x: 0, y: 3 };

// const d = {...a, x: 10, ...b, y: 20};

// console.log(d);


















console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();








