console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//the sum of an array with reduce method

const arraySum = array1 => {
  const sum = array1.reduce((prev, current) => prev + current, 0);
  console.log(sum);
};

//arraySum([1, 2, 3, 4]);

//the sum of an array with forEach method
const arraySum2 = array1 => {
  let sum = 0;
  const result = array1.forEach(current => (sum = sum + current));

  return sum;
};

// console.log(arraySum2([1, 2, 3, 4]));
// console.log(arraySum2([2, 22, 12, 17, 18, 39, 129]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
  author: "Nicholas Sparks"
};

book.title = "A Walk to Remember";
book.pages = 238;
book.readCount = 3;

book.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());

//Exercise 3: Reverse a String
const reverseString = sentence => {
  const arr = sentence.split(" ");
  console.log(arr.length);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr[i]
        .split("")
        .reverse()
        .join("")
    );
  }
  return result.join(" ");
};

// console.log(reverseString("The quick brown fox jumps over the lazy dog"));

//Exercise 4
//Parse a CSV

const parseCSV = str => {
  let arrRow = str.split("\n");
  console.log(arrRow);
  let result = [];
  for (let i = 1; i < arrRow.length; i++) {
    let row = arrRow[i].split(",");
    // console.log(row);
    let obj = {};
    obj.name = row[0];
    obj.age = row[1];
    // console.log(obj);
    result.push(obj);
  }

  console.log(result);
};

parseCSV("name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26");
