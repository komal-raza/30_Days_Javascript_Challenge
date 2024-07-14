/*   Day 1  Variables and Data Types */

// Activity 1:

var age = 20; //assign number value to a variable

console.log(age);

let name = "Komal";  //assign string

console.log(name);

// Activity 2:

const isEmployed = false;  //assign boolean value to a variable

console.log(isEmployed);

// Activity 3:


const employeName = "Anush Singh";
console.log(typeof employeName, "Emplaye Name");

let age2 = 23;  // Got Syntax error for Redeclaring a variable (age) that already exists.

console.log(typeof age2, "Age 2");

// First Object
const student1 = new Object();
console.log(typeof student1, "Student1 Object");

student1.name = "Ayush";

student1.age = 24;

// Second Object
const student2 = new Object();
student2.name = "Shalini";
student2.isEmployed = true;
student2.age = 21;
console.log(typeof student2, "Student2 Object");

// Array
const studentList = [student1, student2];

console.log(studentList, "Student List array");



// Activity 4:    Reassigning Variables

let employeUserName = "Chandler Bing";
console.log(employeUserName, "Initial Assignment Value");

employeUserName = "Ross Geller";
console.log(employeUserName, "Re-Assignment Value");

const username = "admin";
 username ="moderator"  //type error: Assignment to constant variable
console.log(username, "Re-Assignment Value to Const Data type");