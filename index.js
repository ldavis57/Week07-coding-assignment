console.log(`✅ 1. Create an array called ages that contains the following values: 
    3, 9, 23, 64, 2, 8, 28, 93.`);
// Create the initial ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* 1. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        • Do not use numbers to reference the last element, find it programmatically.
        • ages[7] - ages[0] is not allowed!*/
let difference = ages.at(-1) - ages[0];
console.log(`Initial difference (last - first): ${difference}`);


// 2. Add a new age to make it dynamic
// let newAge = prompt("Specify new age.");
// ages.push(newAge); // dynamically adds a new value

ages.push(5); // dynamically adds a new value
console.log("Updated ages array:", ages);

// Recalculate difference with new length
let newDifference = ages.at(-1) - ages[0];
console.log(`New difference after adding age: ${newDifference}`);

// 3. Use a loop to iterate through the array and calculate the average age.
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);



console.log(`✅2. Create an array called names that contains the following values: 
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'`);
// Create the names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Names:", names);

// 1. Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let avgLetters = totalLetters / names.length;
console.log("Average number of letters per name:", avgLetters);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
let allNames = "";
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}
console.log("All names:", allNames.trim());



console.log("✅ 3. How do you access the last element of any array?");
// Access the last element of any array
console.log(`Last name in array: ${names.at(-1)}`);



console.log("✅ 4. How do you access the first element of any array?");
// Access the first element of any array
console.log(`First name in array: ${names[0]}`);



console.log(`✅ 5. Create a new array called nameLengths. Write a loop to iterate over the previously
    created names array and add the length of each name to the nameLengths array.`);
// Create nameLengths array based on names
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Name lengths:", nameLengths);



console.log(`✅ 6. Write a loop to iterate over the nameLengths array and calculate the 
    sum of all the elements in the array.`);
let totalLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    totalLength += nameLengths[i];
}
console.log("Sum of name lengths:", totalLength);



console.log(`✅ 7. Write a function that takes two parameters, word and n, as arguments and returns
     the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect 
     the function to return 'HelloHelloHello').`);
function repeatWord(word, n) {
    return word.repeat(n); 
     
}
// or use a loop to print the word b times
    let concatWords = (a,b) => {
        let result = "";
        for (let i = 0; i < b; i++) {
            result += a;
        }
        return result;  
   }

console.log(repeatWord("Hello", 8)); // Output: HelloHelloHelloHelloHelloHelloHelloHello
console.log(concatWords("Hello", 3)); // Output: HelloHelloHello


console.log(`✅ 8. Write a function that takes two parameters, firstName and lastName, and returns 
    a full name. The full name should be the first and the last name separated by a space.`)

// Function expression using arrow function syntax
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`; // implicit return

console.log(getFullName("Mad", "Max")); // Output: Mad Max 



console.log(`✅ 9. Write a function that takes an array of numbers and returns true if 
    the sum of all the numbers in the array is greater than 100. Otherwise, it returns false.`);

const isSumGreaterThan100 = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num; // adds each number to the sum
    }
    return sum > 100; // returns true or false based on whether sum is greater than 100
};

console.log(isSumGreaterThan100([20, 30, 40, 15])); // true
console.log(isSumGreaterThan100([20, 30, 40, 1])); // false



console.log(`✅ 10. Write a function that takes an array of numbers and returns the average of 
    all the elements in the array.`);

const averageArray = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
};
console.log(averageArray([10, 20, 30])); // 20
console.log(averageArray([10, 50, 30])); // 30



console.log(`✅ 11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
    in the first array is greater than the average of the elements in the second array.`);
function isFirstAverageGreater(arr1, arr2) {
    let avg1 = averageArray(arr1);
    let avg2 = averageArray(arr2);
    return avg1 > avg2;
}

console.log(isFirstAverageGreater([10, 20, 30], [5, 10, 15])); // true
console.log(isFirstAverageGreater([10, 20, 30], [20, 30, 40])); // false



console.log(`✅ 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
    moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;

console.log(willBuyDrink(true, 15)); // true
console.log(willBuyDrink(false, 15)); // false
console.log(willBuyDrink(true, 5)); // false



console.log(`✅ 13. Create a function of your own that solves a problem. 
    In comments, write what the function does and why you created it.`);

// This function checks if every number in an array is even.
// It’s a common task in validating number sets — useful in games, data filters, or form validations.
const areAllEven = (numbers) => numbers.every(num => num % 2 === 0);
console.log(`All even? ${areAllEven([2, 4, 6, 8])}`); // true
console.log(`All even? ${areAllEven([2, 3, 6, 8])}`); // false

