// MyName with type string stores Ben (me!)
let myName: string = `Ben`;

// NumStates constant with type number, stores 50
const numStates: number = 50;

// Sum with type number, adds 5 & 4 to store 9
let sum: number = 5 + 4;

// Creates sayHello function to alert when called
function sayHello() {
  // Alert displays `Hello World!` when function called
  alert(`Hello World!`);
}

// Calls the sayHello function to run
sayHello();

// Creates an interface of Patron object
interface Patron {
  name: string;
  age: number;
}

// Creates function that takes person:Patron console.logs
function checkAge(person: Patron) {
  if (person.age < 21) {
    console.log(`Sorry ${person.name}, you are not old enough to drink..`);
  } else {
    console.log(`Party on, ${person.name}!`);
  }
}

// Array of patrons as objects with name and age properties
let patrons = [
  { name: `Ben`, age: 22 },
  { name: `Andrew`, age: 23 },
  { name: `Will`, age: 16 },
  { name: `Abigail`, age: 20 }
];

// Array function that runs checkAge on each value in array
patrons.forEach(per => {
  checkAge(per);
});

let veggies = [
  { rank: 1, type: "Celery" },
  { rank: 2, type: "Broccoli" },
  { rank: 3, type: "Cauliflower" },
  { rank: 4, type: "Zucchini" },
  { rank: 5, type: "Asparagus" }
];

console.log(`Favorite Veggies:`);

// Array function that console.logs each value in array
veggies.forEach(veggie => {
  console.log(`${veggie.rank}: ${veggie.type}`);
});

// Function that takes a string and returns length
function getLength(word: string) {
  return word.length;
}

// Declares variable wLength that stores length of Hello World
let wLength = getLength(`Hello World`);

// Conditional statement that console.logs based on even or odd wLength
if (wLength % 2) {
  console.log(`The world is nice and even!`);
} else {
  console.log(`The world is an odd place!`);
}
