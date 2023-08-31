// let lName = 'John';
// lName = 10;   // this throws an error because lName was declared to be a string
// demonstrating declaring variables in typescript
// string
var lName;
lName = "Jancura";
var newName = lName.toUpperCase();
console.log(newName);
// number
var age;
age = 33;
age = 33.4; // this is also valid with number datatype
var dob = "25";
var result = parseInt(dob);
console.log(result);
// boolean
// there is no default value for booleans in TS
var isValid = true;
console.log(isValid);
// array
var empList; // this is a string array
var depList; // this does the same thing as above
empList = ["Paul", "George", "Joe"];
var numList;
numList = [1, 2, 3, 4, 5];
var result2 = numList.filter(function (num) { return num > 2; });
console.log(result2);
var result3 = empList.find(function (emp) { return emp === "George"; });
console.log(result3);
var sum = numList.reduce(function (accumulator, number) { return accumulator + number; });
console.log(sum);
var c = 2 /* Color.Blue */;
// tuples
// 
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
