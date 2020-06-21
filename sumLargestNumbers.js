const sumLargestNumbers = function(data) {
  if(data.length > 2) {
    data.sort(function(a, b){return b - a});
    sum = data[0] + data [1];
    return sum
  } else if(data.length === 2){
    sum = data[0] + data [1];
    return sum
  } else if(data.length === 1){
    sum = data[0];
    return sum + " <-- There is only one number in this array!"
  } else {
    return "There are no numbers in this array!"
  }
  }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
