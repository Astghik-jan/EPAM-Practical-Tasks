//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const regex = /a.b/g;
const inputString = 'ahb acb aeb aeeb adcb axeb';
const matches = inputString.match(regex);
console.log(matches); // Output: ["ahb", "acb", "aeb"]

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const regex = /2\s+\+\s+3/gm;
const inputString = '2 + 3 223 2223';
const matches = inputString.match(regex);
console.log(matches); // Output: ["2 + 3"]

//3. Get the day, month and year of the current date and output it to the console separately
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // getMonth() method returns 0-based index, so adding 1 to get the month number
const year = currentDate.getFullYear();
console.log('Day:', day);
console.log('Month:', month);
console.log('Year:', year);
