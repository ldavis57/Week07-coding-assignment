console.log(`✅ 1. Create an array called ages that contains the following values: 
    3, 9, 23, 64, 2, 8, 28, 93.`);
// Create the initial ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* 1. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        • Do not use numbers to reference the last element, find it programmatically.
        • ages[7] - ages[0] is not allowed!*/
let difference = ages.at(-1) - ages[0]; // at(-1) gets the last element of the array
console.log(`Initial difference (last - first): ${difference}`); // display the difference between the last and first element


// 2. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(5); // dynamically adds a new value
console.log("Updated ages array:", ages); // display the updated ages array

// Recalculate difference with new length
let newDifference = ages.at(-1) - ages[0]; // at(-1) gets the last element of the updated array
console.log(`New difference after adding age: ${newDifference}`); // display the new difference between the last and first element

// 3. Use a loop to iterate through the array and calculate the average age.
let totalAge = 0; // initialize a variable to hold the total age
for (let i = 0; i < ages.length; i++) { // iterate through the ages array until reaching last element
    totalAge += ages[i]; // add each age in ages to a new variable totalAge
}
let averageAge = totalAge / ages.length; // calculate the average by dividing totalAge by the number of elements in ages
console.log("Average age:", averageAge); // display the average age of all elements in ages



console.log(`✅2. Create an array called names that contains the following values: 
'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'`);
// Create the names array, then diplay it
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // initialize the names array
console.log("Names:", names); // display the names array

// 1. Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters = 0; // initialize a variable to hold the total number of letters
for (let i = 0; i < names.length; i++) { // iterate through the names array
    totalLetters += names[i].length; // add the length of each name to totalLetters
}
let avgLetters = totalLetters / names.length; // calculate the average by dividing totalLetters by the number of names
console.log("Average number of letters per name:", avgLetters); // display the average number of letters per name

// 2. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
let allNames = ""; // initialize an empty string to hold all names
for (let i = 0; i < names.length; i++) { // iterate through the names array
    allNames += names[i] + " "; // concatenate each name followed by a space
}
console.log("All names:", allNames.trim()); // display all names concatenated together, removing the trailing space with trim()



console.log("✅ 3. How do you access the last element of any array?");
// Access the last element of any array
console.log(`Last name in array: ${names.at(-1)}`); 
// or you can use names[names.length - 1] to access the last element



console.log("✅ 4. How do you access the first element of any array?");
// Access the first element of any array
console.log(`First name in array: ${names[0]}`);   
// or you can use names[0] to access the first element



console.log(`✅ 5. Create a new array called nameLengths. Write a loop to iterate over the previously
    created names array and add the length of each name to the nameLengths array.;
        For example:

        let names = ["Kelly", "Sam", "Kate"];    // starting with this array
        let nameLengths = [5, 3, 4];             // create a new array`);

// Create nameLengths array based on names
let nameLengths = []; // initialize an empty array to hold the lengths of names
for (let i = 0; i < names.length; i++) { // iterate through the names array
    nameLengths.push(names[i].length); // add the length of each name to the nameLengths array
}
console.log("Name lengths:", nameLengths); // display the nameLengths array with lengths of each name



console.log(`✅ 6. Write a loop to iterate over the nameLengths array and calculate the 
    sum of all the elements in the array.`);
let totalLength = 0; // initialize a variable to hold the total length
for (let i = 0; i < nameLengths.length; i++) { // iterate through the nameLengths array
    totalLength += nameLengths[i]; // add each length to totalLength
}
console.log("Sum of name lengths:", totalLength); // display the total length of all names in nameLengths array



console.log(`✅ 7. Write a function that takes two parameters, word and n, as arguments and returns
     the word concatenated to itself n number of times. 
     (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);
function repeatWord(word, n) { // function to repeat a word n times
    return word.repeat(n); // using the repeat method to concatenate the word n times

}
// or use a loop to print the word b times
let concatWords = (a, b) => { // function to concatenate a word b times
    let result = ""; // initialize an empty string to hold the result
    for (let i = 0; i < b; i++) { // iterate b times
        result += a; // concatenate the word a to the result
    }
    return result; // return the concatenated result
}

console.log(repeatWord("Hello", 8)); // Output: HelloHelloHelloHelloHelloHelloHelloHello
console.log(concatWords("Hello", 3)); // Output: HelloHelloHello



console.log(`✅ 8. Write a function that takes two parameters, firstName and lastName, and returns 
    a full name. The full name should be the first and the last name separated by a space.`)

// Function expression using arrow function syntax and template literal to concatenate first and last name
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`; // using implicit return

console.log(getFullName("Mad", "Max")); // Output: Mad Max 



console.log(`✅ 9. Write a function that takes an array of numbers and returns true if 
    the sum of all the numbers in the array is greater than 100. Otherwise, it returns false.`);

const isSumGreaterThan100 = (arr) => { // function to check if sum of numbers in array is greater than 100
    let sum = 0; // initialize a variable to hold the sum of numbers
    for (let num of arr) { // iterate through each number in the array
        sum += num; // adds each number to the total sum
    }
    return sum > 100; // returns true or false based on whether sum is greater than 100
};

console.log(isSumGreaterThan100([20, 30, 40, 15])); // 105 is greater than 100 so returns true
console.log(isSumGreaterThan100([20, 30, 40, 1])); // 91 is less than 100 so returns false



console.log(`✅ 10. Write a function that takes an array of numbers and returns the average of 
    all the elements in the array.`);

const averageArray = (arr) => { // function to calculate the average of numbers in an array
    let sum = 0; // initialize a variable to hold the sum of numbers
    for (let num of arr) { // iterate through each number in the array
        sum += num; // adds each number to the total sum
    }
    return sum / arr.length; // returns the average by dividing the sum by the number of elements in the array
};
console.log(averageArray([10, 20, 30])); // 60 divided by 3 = 20
console.log(averageArray([10, 50, 30])); // 90 divided by 3 = 30



console.log(`✅ 11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
    in the first array is greater than the average of the elements in the second array.`);
function isFirstAverageGreater(arr1, arr2) { // function to compare the averages of two arrays
    let avg1 = averageArray(arr1); // calculate the average of the first array
    let avg2 = averageArray(arr2); // calculate the average of the second array
    return avg1 > avg2; // returns true if the average of the first array is greater than the second, otherwise false
}

console.log(isFirstAverageGreater([10, 20, 30], [5, 10, 15])); // 60 is greater than 30 so returns true
console.log(isFirstAverageGreater([10, 20, 30], [20, 30, 40])); // 60 is less than 90 so returns false



console.log(`✅ 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
    moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);

// Arrow function to check if conditions are met for buying a drink
const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;

console.log(willBuyDrink(true, 15)); // true
console.log(willBuyDrink(false, 15)); // false
console.log(willBuyDrink(true, 5)); // false



console.log(`✅ 13. Create a function of your own that solves a problem. 
    In comments, write what the function does and why you created it.`);

// This function checks if every number in an array is even.
// It’s a common task in validating number sets — useful in games, data filters, or form validations.

// Arrow function will return true if all numbers are even, false otherwise
const areAllEven = (numbers) => numbers.every(num => num % 2 === 0);

console.log(`All even? ${areAllEven([2, 4, 6, 8])}`); // all numbers in array are even so returns true
console.log(`All even? ${areAllEven([2, 3, 6, 8])}`); // 3 is odd so returns false

