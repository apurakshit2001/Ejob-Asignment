const reloadPage = () => {
    window.location.reload();
};


// Vowel or Consonant Checker 
const checkVowelConsonant = () => {
    const input = document.getElementById("vowelConsonantInput").value.toLowerCase();
    const result = document.getElementById("VCresult");

    if (input.length === 1) {
        if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
            result.innerText = "Vowel";
        } else if ((input >= 'a' && input <= 'z')) {
            result.innerText = "Consonant";
        } else {
            result.innerText = "Please enter a single alphabet character.";
        }
    } else {
        result.innerText = "Please enter a single alphabet character.";
    }
};

// Divisibility Checker
const checkDivisibility = () => {
    const input = document.getElementById("divisibilityInput").value;
    const number = Number(input);
    const result = document.getElementById("DivisibilityResult");

    if (input.trim() === '') {
        result.innerText = "Please enter a valid number.";
    } else if (isNaN(number)) {
        result.innerText = "Please enter a valid number.";
    } else if (number % 5 === 0 && number % 11 === 0) {
        result.innerText = `${number} is divisible by both 5 and 11.`;
    } else if (number % 5 === 0) {
        result.innerText = `${number} is divisible by 5.`;
    } else if (number % 11 === 0) {
        result.innerText = `${number} is divisible by 11.`;
    } else {
        result.innerText = `${number} is not divisible by either 5 or 11.`;
    }
};

// Multiple of 3 or 7 Checker
const isMultipleOf3Or7 = () => {
    const input = document.getElementById('multipleInput').value;
    const number = Number(input);
    const resultElement = document.getElementById('isMultipleOf3Or7Result');

    if (input.trim() === '') {
        resultElement.textContent = 'Please enter a number.';
    } else if (isNaN(number)) {
        resultElement.textContent = 'Please enter a valid number.';
    } else if (number % 3 === 0) {
        resultElement.textContent = `${number} is a multiple of 3.`;
    } else if (number % 7 === 0) {
        resultElement.textContent = `${number} is a multiple of 7.`;
    } else {
        resultElement.textContent = `${number} is not a multiple of 3 or 7.`;
    }
};

// Range Checker
const checkRange = () => {
    const input = document.getElementById('rangeInput').value;
    const number = Number(input);
    const resultElement = document.getElementById('rangeResult');

    if (input.trim() === '') {
        resultElement.textContent = 'Please enter a number.';
    } else if (isNaN(number)) {
        resultElement.textContent = 'Please enter a valid number.';
    } else if (number >= 1 && number <= 100) {
        resultElement.textContent = `${number} is in the range of 1 to 100.`;
    } else {
        resultElement.textContent = `${number} is not in the range of 1 to 100.`;
    }
};
// Range Checker


// Grade Checker
const checkGrade = () => {
    const input = document.getElementById('gradeInput').value;
    const marks = Number(input);
    const resultElement = document.getElementById('gradeResult');

    if (input.trim() === '') {
        resultElement.textContent = 'Please enter marks.';
    } else if (isNaN(marks)) {
        resultElement.textContent = 'Please enter valid marks.';
    } else {
        let grade;
        switch (true) {
            case (marks >= 90):
                grade = 'A';
                break;
            case (marks >= 80):
                grade = 'B';
                break;
            case (marks >= 70):
                grade = 'C';
                break;
            case (marks >= 60):
                grade = 'D';
                break;
            case (marks >= 50):
                grade = 'E';
                break;
            default:
                grade = 'F';
        }
        resultElement.textContent = `Your grade is ${grade}.`;
    }
};
// Grade Checker

// Print 1 to 10 using for loop
const printNumbers = () => {
    const result = document.getElementById("numbersResult");
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
        numbers = numbers + i + ",";
    }
    result.innerHTML = numbers;
};
// Print 1 to 10 using for loop


// Print even numbers 1 to 20 using for loop
const printEvenNumbers = () => {
    const result = document.getElementById("evenNumbersResult");
    let evenNumbers = '';
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + ",";
        }
    }
    result.innerHTML = evenNumbers;
};
// Print even numbers 1 to 20 using for loop


// Print the multiplication table of given number
const printMultiplicationTable = () => {
    const number = document.getElementById("numberInput").value;
    const result = document.getElementById("multiplicationTableResult");
    let table = '';


    if (isNaN(number) || number.trim() === '') {
        result.textContent = 'Please enter a valid number.';
    } else {
        for (let i = 1; i <= 10; i++) {
            table = table + `${number} × ${i} = ${number * i},`;
        }
        result.innerHTML = table;
    }
};
// Print the multiplication table of given number

// Sum of Numbers from 1 to 100
const calculateSum = () => {
    const result = document.getElementById("sumResult");
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    result.innerHTML = `The sum of numbers from 1 to 100 is: ${sum}`;
};
// Sum of Numbers from 1 to 100


// First 10 Fibonacci Numbers
const printFibonacci = () => {
    const result = document.getElementById("fibonacciResult");
    let fibonacciNumbers = '';
    let num1 = 0, num2 = 1, addValue = '';

    for (let i = 1; i <= 10; i++) {
        fibonacciNumbers = fibonacciNumbers + num1 + ",";
        addValue = num1 + num2;
        num1 = num2;
        num2 = addValue;
    }
    result.innerHTML = fibonacciNumbers;
};
// First 10 Fibonacci Numbers


// check leapyear
const checkLeapYear = () => {
    const year = document.getElementById("yearInput").value;
    const result = document.getElementById("leapYearResult");

    if (year.trim() === '' || isNaN(year)) {
        result.textContent = 'Please enter a valid year.';
    } else {
        const yearNumber = parseInt(year);
        if ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) || yearNumber % 400 === 0) {
            result.textContent = `${yearNumber} is a leap year.`;
        } else {
            result.textContent = `${yearNumber} is not a leap year.`;
        }
    }
};
// check leapyear

// Largest of Three Numbers
const findLargest = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const result = document.getElementById("largestNumberResult");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.textContent = 'Please enter valid numbers for all three inputs.';
    } else {
        const largest = Math.max(num1, num2, num3);
        result.textContent = `The largest number is: ${largest}`;
    }
};
// Largest of Three Numbers