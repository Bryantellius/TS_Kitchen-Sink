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

