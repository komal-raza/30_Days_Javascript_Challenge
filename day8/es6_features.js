/* Activity 1: Template Literals*/

// Task 1: use of template literals to includes variables

const personName = "Peter";
let age = 23;

const person = `${personName} is ${age} years old. Manny Manny happey returns of the day.`;
console.log(person);
// Task 2: use of template literals to create multi-line string

const message = `Happy
Birthday

${personName},
May 
you 
have 
many 
More!
`;
console.log(message);
/* Activity 2: Destructuring  */

// Task 3: Array Destructuring
let array = [
  "hello",
  "world",
  "without",
  "israel",
  "and ",
  "zionists",
  "!",
  "Free",
  "Palestine",
];

const [x, y, ...rest] = array;
console.log(x, "First element");
console.log(y, "second element");
console.log(rest);  //all remaining elements of array

// Task 4:  Object Destructuring

const book = {
  title: "Rich Dad and poor dad",
  author: "Hogeien dkruye",
  year: 2009,
};

const { title, author } = book;

console.log("Book Title: " + title);
console.log("Book Author: " + author);

/* Activity 3: Spread and Rest Operators */

// Task 5: Spread Operator
const array2 = [...array, "Bycott", "Zionist ", "Help", "Palestine"];

console.log(array2, "Array 2");

//  Task 6:  rest Operator
function addNumbers(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(addNumbers(3, 5, 6, 7));

/*  Activity 4: Default Parameters */

// Task 7:
function productOfNumbers(a, b = 5) {
  return a * b;
}

console.log(productOfNumbers(2, 7));
console.log(productOfNumbers(4));

/* Enhanced Object Literals */

// Task 8: Create a new object with methods and properties using Object literals
const myObject={};

myObject.name="Komal";
myObject.age=23;
myObject.getName=function(){
    return this.name;
}


console.log(myObject,"Object Literal");

// Task 9:   create dynamic Property names based on variables
// https://medium.com/@mehmetbulutengineer/computed-property-names-in-javascript-1e79d08c742e#:~:text=%F0%9F%8D%AD%20One%20of%20these%20features,object%20based%20on%20variable%20values.


const newKey="isAdmin";


myObject[newKey] = true;

console.log(myObject,"Object");
