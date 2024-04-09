for (let i = 0; i < 3; i++) { 
    for (let j = 0; j < (2 - i); j++) {
        process.stdout.write("  "); 
    }    
   for (let k = 0; k < (2 * i + 1); k++) {
        process.stdout.write("*");
    }    
     console.log();
}
