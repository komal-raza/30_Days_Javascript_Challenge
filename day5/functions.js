/* Activity 1 */

// Task 1: Fucntion to check if number is Odd or Even

function checkEvenOddNumber(number) {
  if (number % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Oddd");
  }
}

checkEvenOddNumber(5);  //Even
checkEvenOddNumber(22);  //Odd

// Task 2: Calculate square of a number
function calculateSquare(num) {
  return num * num;
}

console.log(calculateSquare(4));

/* Activity 2 function Expression */

const maximum = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maximum(4,6), "is the Maximum number");

const concatenateString = function (str1, str2) {
  return str1.concat(" ", str2);
};

console.log(concatenateString("Hello","john"));

/*Activity 3: Arrow Functions */

const addTwoNumbers = (n1, n2) => {
  return n1 + n2;
};

// const sum =addTwoNumbers(1,2);
// console.log(sum);

const findSpecificCharacter = (str, char) => {
  return str.includes(char);
};
let findChar =findSpecificCharacter("Fox jump into the ocean", "p");
console.log(findChar);

/* Activity 4: Function Parameters and Default Values */

// Task 7: product of parametes and sencond  param is default value;

function getProducts(param1, param2 = 3) {
  return param1 * param2;
}
console.log(getProducts(3));

// Task 8 Print greeting Messsage for person with name and age(default value);

const greetPerson = (name, age = 23) => {
  return "Hello " + name + " its your " + age + " Birthday today";
};

let message =greetPerson("Komal", 34);
console.log(message);

/* Activity 5: Higher Order Functions */

function repeatCallBack(callback, num) {
  //4
  while (num != 0) {
    callback(num);
    num--;
  }
}
function sum(num1, num2 = 6) {
  return num1 + num2; //10; 9;  8; 7;
}

repeatCallBack(sum,4)

/* Task 10 : Take two functions and a value, */

function apply_functions(func1, func2, value) {
  return func2(func1(value));
}
function add_one(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

const result = apply_functions(add_one, square, 5);
console.log(result, "HOF ");

