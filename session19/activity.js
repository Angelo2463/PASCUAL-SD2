
console.log("Welcome to JavaScript Parameterized Functions!");

function getCircleArea(radius) {
    let area = radius * radius * Math.PI;
    console.log(`Calculating the area of a circle with radius: ${radius}`);
    return area;
}

getCircleArea(5);


function getAverage(num1, num2, num3, num4) {
    let average = (num1 + num2 + num3 + num4) / 4;
    return average;
}

let averageVar = getAverage(10, 50, 50, 40);
console.log(`The average is: ${averageVar}`);

function checkIfPassed (score1, score2) {
    let isPassed = (score1 + score2) / 2;
    if(isPassed >= 75){
        console.log("Congratulations! You passed the exam.");
        return true;
    }else{
        console.log("Better luck next time!");
        return false;
    }
}

checkIfPassed(85, 90);
checkIfPassed(60, 70); 

let ispassingScore = checkIfPassed(85, 90);
if(ispassingScore){
    console.log("You are eligible for the next level!");
}else{
    console.log("You need to improve your scores to be eligible for the next level.");
}

