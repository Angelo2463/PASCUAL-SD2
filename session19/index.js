// console.log("Hello World!");

// [SECTION] Functions with Parameters

/*
SYNTAX:

function functionName(params1, params2, ...){
    // code block
}
    */

function greeting(){
    let userInput = prompt("Please enter your name: ");
    console.log("Hello " + userInput + "!");
}


// greeting(); -> sample function calling using basic function

// Function with parameters
// name -> is the paramater
// parameters acts as a variable or storage for a specific function.
function sayHello(name){
    console.log("Hello from function with parameter, " + name + "!");
}

// sayHello(argument) -> is to be passed in the function parameter
sayHello("Pascual"); // -> sample function calling using function with parameter

// Multiple parameters
function completeName(firstName, MiddleName, lastName){
    console.log(`Hello, ${firstName} ${MiddleName} ${lastName}!`);
}

completeName("John", "Michael", "Doe"); // -> sample function calling using function with multiple parameters
completeName("John", "Michael", "Doe", "Smith"); // -> extra argument will be ignored
completeName("John", "Michael"); // -> missing argument will be undefined

// function and return statement
// Return -> will hold a value to be passed outside the function. It is used to return a value from a function to the caller.

function print(){
    console.log("Hello World!"); // -> this will be printed in the console
    return "Hello World!";
}

print(); // -> this will print "Hello World!" in the console

let sum = function(a, b){
    let total = a + b;
    console.log("TOTAL: " + total); // -> this will print the sum of a and b in the console
    return total;
}

let result = sum(50, 30); // -> this will print "TOTAL: 80" in the console and return 80
console.log(result); // -> this will print 80 in the console

// sum(50, 30); // -> this will print "TOTAL: 50" in the console and return 50

/*if (sum(30, 20) >= 40){
    console.log("passed!"); // -> this will print "The sum is greater than 40." in the console
}else{
    console.log("failed!"); // -> this will print "The sum is less than or equal to 40." in the console
}*/

function checkRemarks(score){
    if(score >= 75){
        console.log("Congratulations! You passed the exam."); // -> this will print "Congratulations! You passed the exam." in the console
    }else{
        console.log("Better luck next time!"); // -> this will print "Better luck next time!" in the console
    }
}

checkRemarks(result); // -> this will print "Congratulations! You passed the exam." in the console since the result is 80 which is greater than 75

let registration = function(name, age){
    if(age >= 18){
        console.log(`Welcome ${name}! You are eligible to register.`); // -> this will print "Welcome [name]! You are eligible to register." in the console
    }else{
        console.log(`Sorry ${name}! You are not eligible to register.`); // -> this will print "Sorry [name]! You are not eligible to register." in the console
        return age; // -> this will return the age of the user if they are not eligible to register
    }
}

registration("John Doe", 20); // -> this will print "Welcome John Doe! You are eligible to register." in the console
registration("Jane Smith", 16); // -> this will print "Sorry Jane Smith! You are not eligible to register." in the console

let value = registration("Jane Smith", 16); // -> this will print "Sorry Jane Smith! You are not eligible to register." in the console and return 16
console.log(`AGE: ${value}`); // -> this will print "AGE: 16" in the console 

function checkAge(age){
    if(age <= 17){
        console.log("You cannot apply for basic account."); // -> this will return true if the age is less than or equal to 17
    }else if(age >= 18){
        console
    }else{
        console.log("Invalid age!"); // -> this will return false if the age is less than 0 or greater than 120
    }
}

checkAge(value);