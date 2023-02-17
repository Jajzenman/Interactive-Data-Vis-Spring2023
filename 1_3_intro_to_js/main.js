console.log('hello world');
/** 
 * JS TYPES 
 * */
const string = "string!";
const number = 0;
const boolean = true;
const array = ['first', 'second', 'third']
const object = {
  key: 'value',
  otherKey: 'otherValue'
}


/** 
 * LET VS CONST 
 * */
let changeableGlobal = true;
const constantGlobal = true;
function changeEmUp() {
  // this will work
  changeableGlobal = false;
  console.log('changeableGlobal :>> ', changeableGlobal);
  // this won't work, and will throw an error in your console and stop the script
  // constantGlobal = false;
}
changeEmUp();


/** 
 * SCOPE 
 * */
const globalScope = 'I am global';
function scopers() {
  // this will work
  const localScope = 'I am local'
  console.log('globalScope :>> ', globalScope);
  console.log('localScope :>> ', localScope);
}
scopers();
console.log('globalScope :>> ', globalScope);
// this won't work, and will throw an error in your console and stop the script
// console.log('localScope :>> ', localScope);


/**
 * FUNCTIONS
 */
function traditionalFunction() {
  console.log("I am a traditional function")
}
const arrowFunction = () => {
  console.log("I am an arrow function")
}
// can you explain why these don't show up in your console?


/**
 * ARRAY + OBJECT METHODS
 */
array.map((d, i) => console.log(`map is at data ${d} with index ${i}`))
const entries = Object.entries(object)
console.log(entries) // looks like the object is now an array... 
// which means we can do any array methods on the object data, including .map!
// you can also get the Object.keys() or Object.values().


/** 
 * DOM MANIPULATION 
 * */
const label = document.getElementById("counter-label")
const input = document.getElementById("counter-input")
const button = document.getElementById("counter-submit")

// code review by Katie Donia 2/16/2023
let counter = 0

function updateCounter() {
  // update the name using the value of the input element
  counter = counter + 1
  button.innerText = "Increment Counter"
  document.getElementById("counter-label").innerHTML = counter


}

