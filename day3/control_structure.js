/* Activity 1 If/Else */

const num = 4;
if (num > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is Negative");
}

let age = 22;
if (age >= 18) {
  console.log("Person is eligible to Vote");
} else {
  console.log("Person is not eligible to Vote");
}

/*  Activity 2 Nested if Else */
let num1 = 6,
  num2 = 8,
  num3 = 2;

if (num1 > num2 && num1 > num3) {
  //check if num1 is greater than num2 and num3
  console.log(num1, " is greater than ", num2, " and ", num3);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, " is greater than ", num1, " and ", num3);
} else {
  console.log(num3, " is greater than ", num1, " and ", num2);
}

/*  Activity 3 Switch Case */

let day = 4;
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Today is Sunday");
    break;
}

const score = 20;
switch (true) {
  case score >= 90:
    console.log("Your Grade is A ");
    break;
  case score >= 80:
    console.log("Your Grade is B+ ");
    break;
  case score >= 70:
    console.log("Your Grade is C+ ");
    break;
  case score >= 60:
    console.log("Your Grade is D+ ");
    break;
  case score >= 50:
    console.log("Your Grade is D ");
    break;
  default:
    console.log("You are failed");
    break;
}

/* Activity 4: Conditional Operator */

const number1 = 44;

console.log(number1 % 2 == 0 ? "Number is Even" : "Number is Odd");

/* Activity 5: Combinig Conditions*/

// If a year is divisible by 400, it is a leap year.
// If a year is divisible by 100 but not by 400, it is not a leap year.
// If a year is divisible by 4 but not by 100, it is a leap year.
// If a year is not divisible by 4, it is not a leap year.
year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year: " + year);
    return true; // It's a leap year
} else {
    console.log("Not Leap Year: " + year);
    return false; // It's not a leap year
}



