/* Activity 1: */
console.log("Activity 1");
const a = 10;
const b = 5;
// Task 1:  Add Two Numbers
let sum = a + b;
console.log(sum, "Task1: Add two numbers");
// Task 2:  Subtract Two Numbers

let minus = a - b;
console.log(minus, "Task2: subtract two numbers");
// Task 3:  Multiply Two Numbers

let multiply = a * b;
console.log(multiply, "Task3: multiply two numbers");
// Task 4:  devide Two Numbers

let division = a / b;
console.log(division, "Task4: divide two numbers");
// Task 5:  remainder by dividing one Number to another Number

let remainder = a % b;
console.log(remainder, "Task5: remainder");

/* Activity 2  */
let num1 = 4; 
let num2 = 7;
console.log("Activity 2");
//  Task 6:  Use += Operator
let result=0;
 result += num1;
 console.log("Task6: Use += ",result);
//  Task 7   Use -= Operator
result -= num2;
console.log("Task7: Use -= ",result);

/* Activity 3 */
console.log("Activity 3");

let n1 =6;
let n2 = 3;
//  Task 8: compare Operator > and < operator

if(n1 > n2){
    console.log("Number " ,n1 , "is greater than " ,n2);
}else{
    console.log("Number " ,n1 , "is less than " ,n2);
}


//  Task 9: compare Operator >= and <= operator
let num3 =2, num4= 9;
if(num3 >= num4){
    console.log("Number " ,num3 , "is greater than equal to " ,num4);
}else{
    console.log("Number " ,num3 , "is less than equal to " ,num4);
}
//   Task 10 compare == and  ===
 
let number1 = 2;
let number2 = "2";


if(number1 == number2){
    console.log(number1, " is equal to ", number2);
}else{
    console.log(number1, " is not equal to ", number2);
}

if(number1 === number2){
    console.log(number1, " is equal to ", number2);
}else{
    console.log(number1, " is not equal to ", number2);
}
/* Activity 4 */

//  Task 11: Use of && operator
if(number1 == 5 && number2 =="2"){
    console.log("Both condition are true");
}else{
    console.log("Both condition are false");
}


// Task 12 Use of || operator
if(number1 == 5 || number2 =="2"){
    console.log("one condition is true");
}else{
    console.log("Both condition are false");
}
// Task 13 Use of ! operator

if(number1 !==2){
    console.log("Number is not ", number1);
}else{
    console.log("Number is ", number1);
}

/* Activity 5 */

// Task 14: check number is positive or negative using ternary operator

let number3 = -3;

console.log(number3 < 0 ? "Number is negative" : "Number is positive");
