/*  Activity 1: For Loops */

// Task 1: Print 1-10 number
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// Task 2 : Print Table of %
for (let i = 1; i <= 10; i++) {
  console.log("5 x ", i, " = ", 5 * i);
}

/* Activity 2: While Loop */

// Task 3: Print sum of 1-10 numbers
let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log("Sum of 1-10 numbers  is ", sum);

// task 4: Print 10 - 1 number using while loop
let num2 = 10;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}

/* Activity 3: Do While Loop */

// Task 5: Print 1-5 number using do while loop
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 5);

// Task 6: Print Factorial of a number

let fact = 1;
let num3 = 20;
do {
  fact = BigInt(fact) * BigInt(num3); //5 *4 *3 * 2*1
  num3--;
} while (num3 != 1);

console.log(fact, "Factorial of number");


/* Activity 4: Nested Loops */

// Task 7: Print Patterns
for (let i = 0; i <= 5; i++) {
  //5 rows
  let str = "* ";
  console.log(str.repeat(i));
}

/* Activity 5: Loop Control Statements */

// Task 8: "Continue Statement"
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue; // skip this value and print all numbers
  console.log(i);
}

// Task 9: "Break Statement"

for (let i = 1; i <= 10; i++) {
  if (i == 7) break; //break out of the loop when condition met
  console.log(i);
}
