// let lName = 'John';

// lName = 10;   // this throws an error because lName was declared to be a string


// demonstrating declaring variables in typescript
// string
let lName : string;

lName = "Jancura";

let newName = lName.toUpperCase();

console.log(newName);

// number
let age: number;

age = 33;
age = 33.4;  // this is also valid with number datatype

let dob: string = "25"

let result = parseInt(dob);
console.log(result);

// boolean
// there is no default value for booleans in TS
let isValid: boolean = true;
console.log(isValid);

// array
let empList: string[];  // this is a string array
let depList: Array<string>;  // this does the same thing as above

empList = ["Paul", "George", "Joe"];

let numList: Array<number>;
numList = [1,2,3,4,5];
let result2 = numList.filter((num) => num>2);
console.log(result2);
let result3 = empList.find((emp) => emp==="George");
console.log(result3);
let sum = numList.reduce((accumulator, number) => accumulator + number);
console.log(sum);

// enum
// limits the options that can be used
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;


// tuples
// 
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}


swapNumbs = swapNumbers(10,20);

console.log(swapNumbs);


// any
// allows you to use a variable to hold any type of data
// move any from any
let department: any;
department = "IT";
department = 10;

// 