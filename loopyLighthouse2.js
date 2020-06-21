const loopyLighthouse = function (range, multiples, words) {
  for (let r = range[0]; r <= range[1]; r++) {
    if (r % multiples[0] === 0 && r % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }
    else if (r % multiples[1] === 0) {
      console.log(words[1]);
    }
    else if (r % multiples[0] === 0) {
      console.log(words[0]);
    } else {
      console.log(r);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);