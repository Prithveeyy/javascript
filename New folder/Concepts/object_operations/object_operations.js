// Define an object using dot notation
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Access object properties using dot notation
console.log(person.name); // Output: John

// Access object properties using bracket notation
console.log(person["age"]); // Output: 30

// Store object property in a variable
let propertyName = "city";
console.log(person[propertyName]); // Output: New York

// Update object property using dot notation
person.age = 31;

// Update object property using bracket notation
person["city"] = "San Francisco";

// Add new property to object using dot notation
person.job = "Engineer";

// Add new property to object using bracket notation
person["hobby"] = "Reading";

// Delete property from object using dot notation
delete person.job;

// Delete property from object using bracket notation
delete person["hobby"];

// Objects for Lookups
let lookup = {
  "a": "Apple",
  "b": "Banana",
  "c": "Cherry"
};

let userInput = "b";
console.log(lookup[userInput]); // Output: Banana