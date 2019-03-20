console.log("Hello World");
var index = function() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  // document.console.log("hello world");
};
let name = "Maneesh";
console.log(name);
/*
Primitive types:
String,Number, Boolean,Undefined, null
Refrence types:
Object, Array, Function
*/

let intrestRate = 0.3;
const intrestRate1 = 1;
console.log(intrestRate);
let age = 23;
let isApproved = false;
let selectedColour = null;
console.log(typeof isApproved);
console.log(typeof selectedColour);

let person = {
  name: "Maneesh",
  age: 23
};
//Dot notation
person.name = "Mannie";
console.log(person);
//Bracket Notation
person["age"] = 22;
console.log(person.age);
// Arrays
let selectedNames = ["Maneesh", "Mannie"];
selectedNames[2] = "Reddy";
console.log(selectedNames);
/**
 * .length
 */
// Functions
let greet = function(name) {
  console.log("Hello " + name);
};
greet("Maneesh");
let square = function(n) {
  return n * n;
};
console.log(square(2));
