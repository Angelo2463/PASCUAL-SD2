// console.log("Hello, World!");

// [SECTION] Repeatition Control Structures

// while
//  loop

/* 
SYNTAX: 

while (condition) {
    // code block
    // iteration
}
*/



let count = 0;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}

/*

>>1st iteration

let count = 0;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}


RESULT -> DO LOOP: 0

>>2nd iteration
let count = 1;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}

RESULT -> DO LOOP: 1

>>3rd iteration
let count = 2;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}

    
>>4th iteration
let count = 3;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}
RESULT -> DO LOOP: 3
>>5th iteration
let count = 4;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}
RESULT -> DO LOOP: 4

>>6th iteration
let count = 5;
while (count < 5) {
    console.log("WHILE LOOP" + count);
    count++;
}
RESULT -> DO LOOP: 5


*/

// 2. do-while loop

/*
SYNTAX:
do {
    // code block
    // iteration
} while (condition);
*/

let SCORE = 0;
do {
    console.log("DO-WHILE LOOP" + SCORE);
    SCORE++;
} while (SCORE < 5);

/*
>>1st iteration
let count2 = 0;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 0

>>2nd iteration
let count2 = 1;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 1

>>3rd iteration
let count2 = 2;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 2

>>4th iteration
let count2 = 3;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 3

>>5th iteration
let count2 = 4;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 4

>>6th iteration
let count2 = 5;
do {
    console.log("DO-WHILE LOOP" + count2);
    count2++;
} while (count2 < 5);
RESULT -> DO-WHILE LOOP: 5

*/

// 3. for loop

/*
SYNTAX:

for (initialization; condition; iteration) {
    // code block
}
*/  

for (let i = 0; i < 5; i++) {
    console.log("FOR LOOP :" + i);
}

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
    console.log("COUNT :" + i + " is divisible by 3");
    }else {
    console.log("COUNT :" + i + " is not divisible by 3");
    }
}

// continue - break

for (let count = 0; count < 20; count++) {
    if (count == 15) {
        console.log("Hello it is me: " + count);
        continue;
    }
    console.log("COUNT: " + count);
}

let isRunning = true;
let accountLocked = 0;
let password = "hello123";
let isLoggedIn = false;

while (isRunning) {
    if (accountLocked != 3) {    
    let input = prompt("Enter password: ");
    if (input != password) {
        accountLocked++;
        console.log("Incorrect password. Chance:", 3 - accountLocked);
        }else {
        isLoggedIn = true;
        console.log("Welcome, User!");
        break;
        }
    }else{
    alert("Account locked. Please contact support.");
    isRunning = false;
    }
}

let input = parseInt(prompt("Enter a number: "));

for(let i = 0; i <= input; i++) {
    console.log(i);
}
