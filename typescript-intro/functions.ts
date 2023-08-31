function add(num1: number, num2: number, num3?: number): number {
    return num3? num1 + num2 + num3 : num1 + num2;  // this shows how to use an option parameter
}

console.log(add(2,3));

const sub = ((num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3);  // shows a require parameter of num3

console.log(sub(5, 3));
console.log(sub(5, 3, 5));

const mult = function(num1: number, num2: number): number{
    return num1 * num2;
}

console.log(mult(2,3));

// rest parameters  (the "rest" of the parameters)
// ...num3: number[] allows you to pass an array of data
function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers: Array<number> = [1,2,3,4,5];
console.log(add2(3,4, ...numbers));

// generics functions
// <Type> defines a generic type to specified later
// this way this same function can be used with a string or number later on
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(["a","b","c","d","e"]);

console.log(concatResult, concatString);