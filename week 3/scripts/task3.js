/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2) {
    return number1 + number2;
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers 
// that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);
    document.querySelector('#sum').value = result;

}


// Step 4: Assign the return value to an HTML form element with an ID of sum



// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that 
// calls the addNumbers function

buttonElement = document.querySelector("#addNumbers"); 
buttonElement.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions 
// named subtract and subtractNumbers and HTML form controls with IDs of minuend, 
// subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let subResult = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = subResult;

}



buttonElement2 = document.querySelector("#subtractNumbers"); 
buttonElement2.addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions 
// named multiply and mulitplyNumbers and HTML form controls with IDs of 
// factor1, factor2, product and multiplyNumbers
const multiply = (factor1, factor2) => factor1 * factor2; 

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let multResult = multiply(factor1, factor2);
    document.querySelector('#product').value = multResult;
}



buttonElement3 = document.querySelector("#multiplyNumbers");
buttonElement3.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, 
// repeat Steps 1-5 with new functions named divide and divideNumbers and 
// HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (dividend, divisor) => dividend / divisor; 

const divideNumbers = () => {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let divResult = divide(dividend, divisor);
    document.querySelector('#quotient').value = divResult;
}



buttonElement4 = document.querySelector("#divideNumbers");
buttonElement4.addEventListener("click", divideNumbers);


// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
console.log(date)
// Step 2: Declare a variable to hold the current year
let year = "";


// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function 
// and assign it to the variable declared in Step 2

currentYear = date.getFullYear()
console.log(year)

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector('#year').innerHTML = currentYear; // could also use "testContent instead of innerHTML"


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
console.log(myArray)
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector('#array').textContent = myArray
// Step 3: Use the filter array method to find all of the odd numbers of the array variable 
// and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

let oddArray = myArray.filter( (number) => number%2);
console.log(oddArray)

document.querySelector("#odds").textContent = oddArray;

// Step 4: Use the filter array method to find all of the even numbers of the array variable
//  and assign the result to the HTML element with an ID of "evens"

let evenArray = myArray.filter( (number) => number%2 == 0);
console.log(evenArray);

document.querySelector("#evens").textContent = evenArray

// Step 5: Use the reduce array method to sum the array variable elements and assign the result 
// to the HTML element with an ID of "sumOfArray"

let reducer = (previousValue, currentValue) => previousValue + currentValue;
let sumArray = myArray.reduce(reducer);
console.log(sumArray);

document.querySelector("#sumOfArray").textContent = sumArray;
//teacher solution - document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);


// Step 6: Use the map array method to multiple each element in the array variable by 2 
// and assign the result to the HTML element with an ID of "multiplied"

document.querySelector('#multiplied').textContent = myArray.map((number) => number * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after 
// multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let myArrayDoubled = myArray.map((number) => number * 2);

document.querySelector('#sumOfMultiplied').textContent = myArrayDoubled.reduce(reducer);

//teacher solution - document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);
