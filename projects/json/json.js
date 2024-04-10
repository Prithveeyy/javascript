const fs = require('fs');


const person = {
  name: "Prithvee",
  age: 30,
  city: "New York"
};


const personJSON = JSON.stringify(person);


fs.writeFileSync('content.json', personJSON);

console.log('JSON object has been written to data.json');
