let greeting;
let hour = 19 ;


if (hour < 18 && hour > 0) {
    greeting = "Good day";
  }
  else if(hour < 0)
  {
    greeting = "Not a valid time";
  }
  else if (hour > 24)
  {
    greeting = "A day has only 24 hours";
  }
  else{
    greeting = "Good evening";
  }
  console.log(greeting)
