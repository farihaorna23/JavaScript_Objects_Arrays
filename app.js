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

console.log(arraySum2([1, 2, 3, 4]));
console.log(arraySum2([2, 22, 12, 17, 18, 39, 129]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
