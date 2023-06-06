"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, age: userAge } = { name: "Murphy", age: 2, id: 4 };
let employee = { name: "Henry", age: 34, id: 5, email: "henry@hen.co", salary: 100000 };
let [user1, user2, ...restUsers] = [
    { name: "John", id: 11, age: 74 },
    { name: "Walt", id: 12, age: 49 },
    { name: "Joe", id: 13, age: 34 },
    { name: "Matt", id: 14, age: 34 },
    { name: "Pow", id: 15, age: 34 },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 13);
console.log(`result: ${result}`);
