// console.log("Hello World!");

//[SECTION] JS Functions
// Performs specific tasks and eliminate repeatitive codes

//SYNTAX: function functionName(parameters) {// code block}

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");



function greet() {
    console.log("Hello, San Fernando City, Pampanga!");
}

// Invocation/Imvoke or Function Calling

greet();

function greetName() {
    console.log("Hello, User!");
}

function startCalculator() {
    let userInput1 = parseInt(prompt("Please select an action: \n[1]. Input Numbers \n[2]. Sum \n[3]. Difference \n[4]. Product \n[5]. Quotient \n[6]. Reset"));

    switch (userInput1) {
        case 1:
            enterNumbers();
            break;
        case 2:
            sum();
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
    }
}

function enterNumbers() {
    let inputNum1 = parseInt(prompt("Enter the first number: "));
    let inputNum2 = parseInt(prompt("Enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
}

function sum() {
    let inputNum1 = parseInt(prompt("Enter the first number: "));
    let inputNum2 = parseInt(prompt("Enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (num1 == 0 || num2 == 0) {
        alert("Please enter num1 and num2.");
        return;
    }else {
    let sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
    // alert(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
    }
}

function difference() {
    let inputNum1 = parseInt(prompt("Enter the first number: "));
    let inputNum2 = parseInt(prompt("Enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (num1 == 0 || num2 == 0) {
        alert("Please enter num1 and num2.");
        return;
    }else {
    let difference = num1 - num2;
    alert(`The difference of ${num1} and ${num2} is ${difference}.`);
    // alert(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
}   
}

function product() {
    let inputNum1 = parseInt(prompt("Enter the first number: "));
    let inputNum2 = parseInt(prompt("Enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (num1 == 0 || num2 == 0) {
        alert("Please enter num1 and num2.");
        return;
    }else {
    let product = num1 * num2;
    alert(`The product of ${num1} and ${num2} is ${product}.`);
}
}

function quotient() {
    let inputNum1 = parseInt(prompt("Enter the first number: "));
    let inputNum2 = parseInt(prompt("Enter the second number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (num1 == 0 || num2 == 0) {
        alert("Please enter num1 and num2.");
        return;
    }else {
    let quotient = num1 / num2;
    alert(`The quotient of ${num1} and ${num2} is ${quotient}.`);
}
}

function reset() {
    num1 = 0;
    num2 = 0;
    alert("Numbers have been reset.");
}
startCalculator();