"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function addOptionalChaining(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20));
console.log(addOptionalChaining(13, 24));
console.log(addOptionalChaining(13, 24, 90));
const subtract = (num1, num2) => num1 - num2;
const subtractRequired = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(subtract(2, 3));
console.log(subtractRequired(22, 10));
console.log(subtractRequired(22, 10, 3));
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log(multi(2, 7));
const multiREST = function (num1, num2, ...num3) {
    return num1 * num2 * num3.reduce((a, b) => a + b, 0);
};
let numbers = [1, 2, 4, 56, 7];
console.log(multiREST(2, 10, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
