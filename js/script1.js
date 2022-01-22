// let base = prompt('go namber');
// console.log(base = (Number(base)));

// let power = prompt('go stepen');
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);



// const max = 50;
// const min = 30;

// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));


// const colors = ['tomato', 'green', 'blue', 'pink', 'gray', 'teal'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;



// let brand = 'SamsUng';
// brand = brand.toUpperCase();
// console.log(brand);

// let brand = 'SamsUng';
// brand = brand.toLowerCase();
// console.log(brand);


// const blackListedWord1 = 'спам';
// const blackListedWord2 = 'распродажа';
// const blackListedWord3 = 'спешите';

// const string1 = 'Только сегодня на распродаже вы можете купить деньги';
// const string2 = 'Это не спам, спешите приобрести мозги';
// const string3 = 'Приходите к нам на ярмарку';

// console.log(string1.includes(blackListedWord1));
// console.log(string1.includes(blackListedWord2));
// console.log(string1.includes(blackListedWord3));

// console.log(string2.includes(blackListedWord1));
// console.log(string2.includes(blackListedWord2));
// console.log(string2.includes(blackListedWord3));

// console.log(string3.includes(blackListedWord1));
// console.log(string3.includes(blackListedWord2));
// console.log(string3.includes(blackListedWord3));


// if (40 > 55) {
//     console.log('large');
// } else {
//     console.log('small');
// }


// const balance = 1000;

// const message = balance >= 0 ? 'plus' : 'minus';
// console.log(message);


// const stars = 7;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 60;
//         break;
    
//     default:
//         console.log('youError');
// }

// console.log(price);



// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// console.log('stope');



// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 7;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Salary number ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);





// const min = 6;
// const max = 130;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//         console.log('Yes: ', i);
//     } else {
//         console.log('No: ', i);
//     }

//     total += i;
// }

// console.log('total: ', total);

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
        // console.log('No: ', i);
//         continue;
//     }
//     console.log('Yes: ', i);
//     total += i;
// }
// console.log('total: ', total);




// const btnAdd = document.querySelector('button[data-add]');
// console.log(btnAdd);

// const valueInput = document.querySelector('input[data-value]');

// let total = 0;

// const outputEl = document.querySelector('.js-output span');

// const resetBtn = document.querySelector('button[data-reset]')

// btnAdd.textContent = 'plus';
// btnAdd.addEventListener('click', () => {

// console.log('clic wow');
//         const value = Number(valueInput.value);
//         console.log(value);
//         total += value;
        
//         outputEl.textContent = total;

//         valueInput.value = '';
//  });
// resetBtn.addEventListener('click', function () {
//         total = 0;
//         outputEl.textContent = total;
// })




// массивы

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }









// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// const lastIndex = friends.length - 1;
// console.log(lastIndex);
// console.table(friends);

// console.log(friends[3]);

// friends[2] = 'Burger';
// console.table(friends);


// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a[0] = 500;
// b[2] = 300;

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const lastIndex = friends.length - 1;

// console.table(friends);
// for (let i = 0; i <= lastIndex; i += 1) {
// console.log(friends[i]);
        
//         friends[i] += '-1';
// }

// console.table(friends);


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//         console.log(friend);
// }



// const cart = [54, 32, 18, 102, 33, 3, 11, 145, 21, 39, 97];

// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//         console.log(cart[i]);
        
//         total += cart[i];
// }

// console.log('total: ', total);


// for (const value of cart) {
//         total += value;
// }

// console.log('total: ', total);




// const numbers = [54, 32, 18, 102, 33, 3, 11, 145, 16, 22, 21, 39, 97, 66];

// let total = 0;


// for (let i = 0; i < numbers.length; i += 1) {
//         const number = numbers[i];
//         console.log(number);
        
//         if (number % 2 === 0) {
//                 console.log('Chetnoe!')
//         }

//         total += number;
// }

// for (const number of numbers) {
//         console.log(number);

//          if (number % 2 === 0) {
//                  console.log(`${number} - Chetnoe!`);
                 
//                  total += number;
//         }


// }



// console.log('Total: ', total);


// for (const number of numbers) {
//         console.log(number);

//          if (number % 2 !== 0) {
//                  console.log(`Nechotnoe: `, number);
//                  continue;
//                 }

//         console.log(`${number} - Chetnoe!`);
                 
//         total += number;
// }



// console.log('Total: ', total);





// const logins = ['maNGo', 'KIwi', 'poLLY', 'aJakS']
// const loginToFind = 'poLLY';

// есть ли в массиве примитив? Используем тернарник с includes!!!
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//         const login = logins[i];

//         if (login === loginToFind) {
//                 message = `${loginToFind} - Find`
//                 break;
//         }

//         if (login !== loginToFind) {
//                 message = `${loginToFind} - Undefine`;
//         }
// }
// console.log(message);

// let message = `${loginToFind} - Undefine`;

// for (const login of logins) {
//       console.log(message);
// }




// const numbers = [9, 44, 15, 67, 53, 82, 6];
// let smallestNumber = numbers[0];

// // console.log(smallestNumber);
// for (const number of numbers) {
//         console.log(number);
//         if (number > smallestNumber) {
//                 smallestNumber = number;
//         }
// }

// console.log('smallestNumber -', smallestNumber);


// const friends = ['mango', 'ajax', 'polly', 'kiwi', 'banana'];
// let string = '';

// for (const friend of friends) {
//         string += friend + ',';

// }
// string = string.slice(0, string.length - 1)
// console.log(string);

// const string = friends.join(', ');
// console.log(string);




// const string = 'JavaScript';
// const letters = string.split('');
// let inString = '';

// console.log(letters);

// for (const letter of letters) {
//         console.log(letter);

        // if (letter === letter.toLowerCase()) {
        //         console.log('small -', letter); 
        //         inString += letter.toUpperCase();  
        // } else {
        //                 inString += letter.toLowerCase();      
        // }
        

//         inString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();

// }
// console.log(inString);




// const title = 'Top 10 benefits of React Framework';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);


// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1); ----wow!



// const array1 = [5, 16, 2, 30];
// const array2 = [1, 22, 43, 4, 33];

// let total = 0;
// const numbers = array1.concat(array2);
// console.log(numbers);

// for (const number of numbers) {
//         total += number;   
// }
// console.log(total);



// const cards = ['1', '2', '3', '4', '5', '6'];
// console.table(cards);
// const cardToRemove = '3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);
// cards.splice(index, 1);

// console.table(cards);





// const cardToInsert = '6';
// const index = 3;
// cards.splice(1, 0, '8', '8', '8');
// console.table(cards);






// const cardToUpdate = '4';
// cards.splice(1,1,555)

// console.table(cards);




// Homework

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch (password) {
// case null:
//    message = "Canceled by user!";
//     break;

//   case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;

//   default:
//  message = "Access denied, wrong password!";

// }

//   // Change code above this line
//   return message;
// }



// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }







// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }







// Function


// const add = function (a, b) {
//   console.log(a);
//   console.log(b);

//   const result = a * b;
//   console.log(result);
// }
// add(2, 3);
// add(8, 7);
// add(1, 9);

// const fn = function () {
//  console.log(1);
// console.log(2);



// console.log(3);
// console.log(4);
// }

// console.log(fn());



// const cart = [10, 2, 33, 12, 6, 204, 18, 40];
// let total = 0;

// for (const value of cart) {
//         total += value;
// }

// console.log('Total: ', total);





// const calculatorTotalPrice = function (items) {
//         console.log(items);
//         let total = 0;

//         for (const item of items) {
//                 total += item;
//        }
//         return total;
// };


// console.log(calculatorTotalPrice([9, 13, 202, 8, 16]));
// console.log(calculatorTotalPrice([18, 30, 14, 55, 104, 2]));
// console.log(calculatorTotalPrice([44, 99, 5, 63, 302]));
// console.log(calculatorTotalPrice([12, 80, 51, 106, 39, 26]));



// this function returns nothing

// const logItems = function (items) {
//         for (const item of items) {
//                 console.log(item);
//         }
// };


// logItems(['mango', 'polly', 'ajax', 'kiwi']);
// logItems([1, 2, 3, 4, 5, 6]);
// logItems(['dress', 'short', 'jeans']);



// const logins = ['khgfccgh', 'tddxfvjyj', 'ljgfawdcss', 'ruhdsssd'];

// const findLogin = function (allLogins, loginToFind) {

//         for (const login of allLogins) {
//                 if (login === loginToFind) {
//                         return `${loginToFind} find`;
//                 }
//         };
//         return `${loginToFind} Not find`;
// };



// const findLogin = function (allLogins, loginToFind) {
//         return allLogins.includes(loginToFind) ?
//                 `${loginToFind} find` :
//                 `${loginToFind} Not find`
// };

// console.log(findLogin(logins, 'khgfccgh'));
// console.log(findLogin(logins, 'tddxfvjyj'));
// console.log(findLogin(logins, 'ljgfawdcss'));
// console.log(findLogin(logins, 'ruhdsssd'));
// console.log(findLogin(logins, ',hgxss'));
// console.log(findLogin(logins, 'ruhlkugfdfa'));








// const numbers = [6, 855, 53, 9, 46, 743, 987, 3];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//         if (number < smallestNumber) {
//                 smallestNumber = number;
//         }
// }

// console.log('smallestNumber: ', smallestNumber);

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];   
    
//       for (const number of numbers) {
//         if (number < smallestNumber) {
//                 smallestNumber = number;
//         }
//         }  
//         return smallestNumber;
// }

// console.log(findSmallestNumber([632, 6, 382, 76, 234, 55, 4]));
// console.log(findSmallestNumber([6, 867, 2, 96, 343, 5, 4]));
// console.log(findSmallestNumber([97, 87, 2, 76, 3, 50, 14]));
// console.log(findSmallestNumber([6, 86, 32, 96, 986, 95, 874]));







// const changeCase = function (string) {
//         const letters = string.split('');
//         let invertedString = '';

//         for (const letter of letters) {
//                 const isInLowerCase = letter === letter.toLowerCase();
//                 invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
// }


//         return invertedString;
// };

// console.log(changeCase('khgfJHFh'));
// console.log(changeCase('tddxfgfdLKHfvjyj'));
// console.log(changeCase('lfsejlojhGFjgfawdcss'));
// console.log(changeCase('ruJHKJGhdsssd'));
// console.log(changeCase('hgKGDSSs'));
// console.log(changeCase('rLJHGFFgfdfa'));






// const fn = function () {
//         console.log(arguments);

//         const args = Array.from(arguments);
//         console.log(args);
// }

// fn(1, 2, 3, 4);
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6, 7);




// const fn = function (...args) {
        
//         console.log(args);
// }

// fn(1, 2, 3, 4);
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6, 7);


// const fn = function (a, b, c, ...args) {
//         console.log(`${a} ${b} ${c}`);
//         console.log(args);
// }

// fn('hgfds', 1, 2, 3, 4);
// fn('jyrssfgf', 1, 2, 3);
// fn('jgffsl', 1, 2, 3, 4, 5, 6, 7);




// const filterNumbers = function (array, ...args) {
//         console.log('array: ', array);
//         console.log('args: ', args); 
//         const uniqueElements = [];
        
//         for (const element of array) {
//                 if (args.includes(element)) {
//                         uniqueElements.push(element);
//                         console.log(`${element} yesss`);
//                 }
//         }

//         return uniqueElements;
// };



// console.log(filterNumbers([1, 4, 9, 25, 85, 5], 4, 65, 9, 10, 25, 6));
// console.log(filterNumbers([6, 4, 8, 25, 85, 10], 4, 65, 8, 10, 25, 6));
// console.log(filterNumbers([1, 4, 9, 2, 85, 5], 4, 85, 9, 10, 25, 6));
// console.log(filterNumbers([2, 4, 21, 25, 85, 5], 4, 65, 21, 10, 25, 6));
// console.log(filterNumbers([10, 4, 9, 213, 85, 15], 4, 65, 213, 10, 25, 6));
// console.log(filterNumbers([11, 44, 19, 25, 25, 5], 44, 65, 9, 10, 25, 6));