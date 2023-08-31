// this is a user created data type

export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;


}

// below demonstrates renaming properties  ex: name is now userName
// below is an example of object destructuring
// the email can now be accessed via the variable name userLogin for the below object

let { name: userName, email: userLogin }: User = { name: "John", id: 1, email: 'john@mail.com'};

console.log(userLogin);

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name:"George", id: 2, email: '', salary: 1000};

console.log(employee);

// matter definition example
// a class can implement this method
// the export keyword allows it to be used outside of this file
export interface Login {
    login(): User;
}


// array structuring of the User interface
let users: User[] = [
    {name: "Paul", id: 5, email: 'paul@mail.com'},
    {name: "Bob", id: 6, email: 'bob@mail.com'},
    {name: "Joe", id: 7, email: 'joe@mail.com'}
]

console.log(users[2]);

let [user1, user2, ...restUsers]: User[] = [
    {name: "Paul", id: 5, email: 'paul@mail.com'},
    {name: "Bob", id: 6, email: 'bob@mail.com'},
    {name: "Joe", id: 7, email: 'joe@mail.com'}
]

console.log(user2);
console.log(restUsers);  // this will return an array of the restUsers

let result = restUsers.filter(user => user.id > 6);

console.log(result);