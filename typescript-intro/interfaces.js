"use strict";
// this is a user created data type
Object.defineProperty(exports, "__esModule", { value: true });
// below demonstrates renaming properties  ex: name is now userName
// below is an example of object destructuring
// the email can now be accessed via the variable name userLogin for the below object
var _a = { name: "John", id: 1, email: 'john@mail.com' }, userName = _a.name, userLogin = _a.email;
console.log(userLogin);
var employee = { name: "George", id: 2, email: '', salary: 1000 };
console.log(employee);
var users = [
    { name: "Paul", id: 5, email: 'paul@mail.com' },
    { name: "Bob", id: 6, email: 'bob@mail.com' },
    { name: "Joe", id: 7, email: 'joe@mail.com' }
];
console.log(users[2]);
var _b = [
    { name: "Paul", id: 5, email: 'paul@mail.com' },
    { name: "Bob", id: 6, email: 'bob@mail.com' },
    { name: "Joe", id: 7, email: 'joe@mail.com' }
], user1 = _b[0], user2 = _b[1], restUsers = _b.slice(2);
console.log(user2);
console.log(restUsers); // this will return an array of the restUsers
var result = restUsers.filter(function (user) { return user.id > 6; });
console.log(result);
