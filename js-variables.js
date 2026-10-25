console.log('JS #1. Homework. JavaScript Basics: Working with Variables and Data Types');

const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
  first: 'First Name',
  last: 'Last Name',
};
const decimal2 = myNum.toFixed(2);
let myBigInt = 123n;
myBigInt += 1n;
console.log(myNum, myStr, myBool, myArr, myObj);
console.log(decimal2);
console.log(myBigInt);
