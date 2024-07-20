/*  Activity 1: Object Creation and Access  */

// Task 1: Create a Book Object with properties
const book = new Object();
book.title = "Think and Grow Rich";
book["author"] = "Nelson Mandela";
book.year = "2011";
console.log(book);

// Task 2: Access the title and author

console.log(book.title, "Title");
console.log(book.author, "Author");

/*  Activity 2: Object Methods  */
// Task 3: Add  method to return title and author
book.bookInfo = function () {
  return this.title + " " + this.author;
};
console.log(book.bookInfo(), "Book Info");
// Task 4: Add method to Object to update Year
book.updateYear = function (year) {
  this.year = year;
};
console.log(book.year, "Before updating Year");

book.updateYear("2009");
console.log(book.year, "After updating Year");

/*  Activity 1: Nested Objects */
// Task 5: Add Nested Object Library to book object
book.library = {
  name: "Library1",
  books: [
    {
      title: "peer e kamil",
      author: "Umera Ahmned",
      year: "2012",
    },
    {
      title: "Unconcious mind",
      author: "neil Amend",
      year: "2018",
    },
    {
      title: "pshychology of mind",
      author: "joseph",
      year: "2013",
    },
    {
      title: "Rich dad poor dad",
      author: "john doe",
      year: "2015",
    },
  ],
};

console.log(book.library, "Book Library");

// Task 6: access library name and books title

console.log(book.library.name, " Library Name");

// get Values from book object and then iterate to return title of book in nested object
const books = Object.values(book.library.books);

for (const bookTitle of books) {
  console.log(bookTitle.title);
}

/*  Activity 4: `this` Keyword  */
// task 7: use `this` Keyword
book.bookData = function () {
  return this.title + " " + this.year;
};

console.log(book.bookData());

/*  Activity 5: Object Iteration */
console.log("for in method to iterate over Object ");
// Task 8: log each property and its value 
for (const property in book) {
  console.log(`${property}: ${book[property]}`);
}


//   Task 9:  Object.keys
console.log("Task 9, Object.keys and Object.values");

Object.keys(book).forEach((key) => console.log(key));

// Object.vslues
Object.values(book).forEach((value) => console.log(value));
