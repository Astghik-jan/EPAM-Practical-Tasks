//Create a car object, add a color property to it with the value equals 'black'

let car = {};
car.color = "black";
-------------

//Change the color property of the car object to 'green'

car.color = "green";    //or 
car['color'] = 'green';
--------------

//Add the power property to the car object, which is a function and displays the engine power to the console

let car = {};
car.color = "black";
car.power = function() {
    console.log("Engine power is 300 horsepower");
};
car.power();  // Output: "Engine power is 300 horsepower"
--------------

//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function totalFruit(pears, apples) {
    return pears + apples;
}
console.log(totalFruit(5, 10));  // Output: 15
--------------

//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)


function setName(name) {
    if(name){
        console.log("Hello " + name);
    } else {
        console.log("No name was entered.");
    }
}
setName("Astghik");  // Output: "Hello Astghik"
setName();  // Output: "No name was entered."
------------------

//Write a function for calculating the type of argument and type output to the console

function argumentType(arg) {
    console.log("Type of argument: " + typeof arg);
    return typeof arg;
}
console.log(argumentType(5));     // Output: "Type of argument: number"
console.log(argumentType("hello"));  // Output: "Type of argument: string"
console.log(argumentType(true));  // Output: "Type of argument: boolean"
------------------

//Write a function that determines whether a number is prime or not

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));    // Output: true
console.log(isPrime(10));  // Output: false
--------------



