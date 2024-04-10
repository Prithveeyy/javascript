  let jsonfile ='content.json';

  const fs = require('fs');
  
  fs.readFile(jsonfile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
  
    const jsonData = JSON.parse(data);
    console.log(jsonData); // Process the JSON data here
  });