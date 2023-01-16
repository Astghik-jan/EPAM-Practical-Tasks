//1. Perform addition of various types (string + boolean, string + number, number + boolean)
console.log("string" + true) // "stringtrue"
console.log("string" + 1) // "string1" 
console.log(1 + true) //2 

//2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("string" * true) // NaN
console.log("string" * 1) // NaN
console.log(1 * true) // 1

//3. Divide different types (string / boolean, string / number, number / Boolean)
console.log("string" / true) // NaN
console.log("string" / 1) // NaN
console.log(1 / true) 

//4. Perform explicit conversion (number, string, boolean)
let num = 123; let str = num.toString(); console.log(str); // Output: "123"
let str = "123"; let num = Number(str); console.log(num); // Output: 123
let bool = true; let num = Number(bool); console.log(num); // Output: 1
let num = 0; let bool = Boolean(num); console.log(bool); // Output: false
let str = "false"; let bool = (str === 'true'); console.log(bool); // Output: false
let bool = true; let str = bool.toString(); console.log(str); // Output: "true"

