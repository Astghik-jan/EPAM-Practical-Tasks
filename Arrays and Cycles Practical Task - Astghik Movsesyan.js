//1.Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
function movieList(movies) {
    movies.map(function(movie) {
        console.log(movie);
    });
}
movieList(["The Fifth Element", "Titanic", "The Godfather"]);

//2. Given an array of car manufacturers, convert the array to a string and back to an array
let manufacturers = ["Toyota", "Ford", "BMW", "Honda"];
let manufacturersString = manufacturers.join(",");
console.log(manufacturersString);
let manufacturersArray = manufacturersString.split(",");
console.log(manufacturersArray);

//3. Given an array of the names of your friends, add the words hello to each element of the array
let friends = ["John", "Jane", "Jacob"];
let greetedFriends = friends.map(friend => "Hello " + friend);
console.log(greetedFriends);

//4. Convert numeric array to Boolean
let numericArray = [0, 1, 2, 3, 4];
let booleanArray = numericArray.map(num => Boolean(num));
console.log(booleanArray);

//5. Sort the array [1,6,7,8,3,4,5,6] in descending order
let numbers = [1,6,7,8,3,4,5,6];
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);

//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
let numbers = [1,6,7,8,3,4,5,6];
let filteredNumbers = numbers.filter(function(num) {
    return num > 3;
});
console.log(filteredNumbers);

//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function findIndex(arr, num) {
    return arr.indexOf(num);
}
let arr = [1, 2, 3, 4, 5];
let num = 3;
console.log(findIndex(arr, num));

//8. Implement a loop that will print the number 'a' until it is less than 10
let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}

//9. Implement a loop that prints prime numbers to the console
function printPrimeNumbers(n) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
printPrimeNumbers(20);

//10. Implement a loop that prints odd numbers to the console
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}


