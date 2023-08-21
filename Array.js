"use strict";
// collection of consecutive cells in ram is called an array
// array can get consecutive space or cells in Ram
// Example 
let myArray = [0, 1, 3, 4, 5, 6, 19];
// we can get a particular value in array using its index
console.log(myArray[3]);
// to define the type [] should be written 
// Example
let array2 = [9, 8, 20, 21];
console.log(typeof array2);
console.log(array2);
// we can also change the value of an array using index
array2[0] = 3;
console.log(array2);
// we can also limit the number of values in an array
// if we change a value in array it will change in original array
// we can push values in array using function
let names = ["habiba", "khizra", "wajeeha"];
function pushNewValue(newName) {
    names[3] = newName;
}
pushNewValue("nimra");
console.log(names);
// we can also check the length of an array
console.log(names.length);
// to add a new value at the end of array we can use length every element will be added at the end.
// Example 
let studentName = ["khizar", "Ali", "Habiba"];
function pushNewElement(newStudent) {
    studentName[studentName.length] = newStudent;
}
pushNewElement("hajra");
pushNewElement("hadi");
pushNewElement("hashir");
console.log(studentName);
