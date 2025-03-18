/* eslint-disable 
variable hoisting
*/
let age;
console.log(age);
age = 10;

/* What does this file do? first
  I can run a function  before it exists
  util functions
  or in modules
*/
sayHi();

/* How does this file do it? Next 🌭 is made */
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}
