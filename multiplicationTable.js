const multiplicationTable = function(maxValue) {
  let line = "";
  for(let row = 1; row <= maxValue; row++) {
    for (let col = 1; col <= maxValue; col++) {
      line += " " + (row*col)  
    } 
    line += "\n"
  } return line
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));