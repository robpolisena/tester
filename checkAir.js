const checkAir = function (samples, threshold) {
  let total = 0
  tolerance = samples.length * threshold 
  for( let i = 0; i < samples.length; i++) {
    let count = samples[i]
    if(count === 'dirty') {
      total ++
    }
  }
  if (total < tolerance) {
    return "Clean"
  } else {
    return 'Polluted'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))