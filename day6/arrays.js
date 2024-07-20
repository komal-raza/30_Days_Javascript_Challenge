const array1 = new Array(5, 4, 3, 2, 1);
console.log(array1);

console.log(array1[0], "First element");
console.log(array1[array1.length - 1], "last element");

/* Activity 2 Array Methods */

/* 
 Activity Array Methods (Basic) 
Push  
Pop
Shift
unShift
*/

// Task 3: Use Push method

array1.push(6);

console.log(array1, "Push a new number");
// Task 4: Use Pop method
array1.pop();
console.log(array1, "Pop a number");

// Task 5 shift
array1.shift(6);
console.log(array1, "Remove first Number");

// Task 6: unshift
array1.unshift(6);
console.log(array1, "Add a new number to the begining of the array");

/* 
 Activity 3: Array methods: (Intermediate) 
map    
filter
reduce
*/

// Task 7:Map method
let newArray = array1.map(function (elm) {
  return elm * elm;
});
console.log(newArray, "Map method: New Array Created...");

// Task 8: Filter method
let filterArray = array1.filter(function (elm) {
  return elm != 3;
});
console.log(filterArray, "Filter method: Filtered array ...");
// Task 9: reduce method
const initialValue = 3;
let reduceArray = array1.reduce(function (accumulator, currValue) {
  return accumulator + currValue;
}, initialValue);
console.log(reduceArray, "Reduce method: Reduced array into one value...");
/* Array Iteration */

// Task10: Use for loop

for (let arr in array1) {
  console.log(array1[arr], " index :", arr);
}

for (let arr of array1) {
  console.log(arr);
}
// Task 11: forEach

array1.forEach(function (elm) {
  console.log(elm * 2);
});
/* Activity 5: Multi - Dimensional Arrays */

let l1 = [1, 2, 3];
let l2 = [4, 5, 6];
let array2 = new Array(l1, l2);

console.log(array2);
// This loop is for outer array
for (let i = 0, l1 = array2.length; i < l1; i++) {
  // This loop is for inner-arrays
  for (let j = 0, l2 = array2[i].length; j < l2; j++) {
    // Accessing each elements of inner-array
    console.log(array2[i][j]);
  }
}



console.log(array2[0][2], "Specific Element from 2D array");