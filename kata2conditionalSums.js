const conditionalSum = function(values, condition) {
  if(values.length <= 0) {
    return 0
  }
  if(condition === "even") {
    let sum = []
    for(let i = 0; i<values.length; i++) {
      if(values[i] % 2 === 0) {
        sum.push(values[i])
      } 
    } //console.log(sum);
    const total = sum.reduce(function(a,b){return a + b}, 0);
    //console.log(total);
    return total
  }if(condition === "odd") {
    let sum = []
    for(let i = 0; i<values.length; i++) {
      if(values[i] % 2 != 0) {
        sum.push(values[i])
      } 
    } //console.log(sum);
    const total = sum.reduce(function(a,b){return a + b}, 0);
    //console.log(total);
    return total
  } 
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

