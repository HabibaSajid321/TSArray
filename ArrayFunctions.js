"use strict";
// we can use different built in functions to push values we dont need to write it manually.
//  .push() is a builtin function that will add the value we pass as an argument at the end of the array
// Example                       .push()
let array1 = ["habiba", "bushra", "khizra"];
array1.push("alina");
console.log(array1); // output ["habiba", "bushra","khizra", "alina"]
//                      .pop()
// .pop() will delete tha last value from the array
let arrayPop = ["habiba", "bushra", "khizra", "hajra"];
arrayPop.pop();
console.log(arrayPop); // output [ 'habiba', 'bushra', 'khizra' ]
//           .shift() 
// removee the fist value from the array
let arrayShift = ["habiba", "bushra", "khizra", "hajra"];
arrayShift.shift();
console.log(arrayShift); // output [ 'bushra', 'khizra', 'hajra' ]
//    .unshift()
// to add the value at the start of the array 
let arrayUnShift = ["habiba", "bushra", "khizra", "hajra"];
arrayUnShift.unshift("nimra");
console.log(arrayUnShift); // output ['nimra', 'bushra', 'khizra', 'hajra' ]
//   .splice()
// .splice() to change at the particular index can do what shift unshift pop puch do. 
// 3 arguments .splice(indexnumber, items to del, what to add)
// Example
let arraySplice = ['nimra', 'bushra', 'khizra', 'hajra'];
arraySplice.splice(2, 0, "habiba");
console.log(arraySplice);
