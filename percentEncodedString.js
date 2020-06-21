const urlEncode = function(text) {
let strLength = text.length;
let lastStr = text.length - 1;
for(let i = 0; i<strLength; i++) {
  if((text[0] === ' ') && (text[lastStr] === ' ')) {
    let sub = text.replace(/ /g, "%20" )
    let first = sub.substr(3)
    let last = first.slice(0, -3)
    return last
  } if (text[0] === ' ') {
    let sub = text.replace(/ /g, "%20" )
    let first = sub.substr(3)
    return first
  }if (text[lastStr] === ' ') {
    let sub = text.replace(/ /g, "%20" )
    let last = sub.slice(0, -3)
    return last
  }
   else {
    let sub = text.replace(/ /g, "%20" )
    return sub
  }
}
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));




 //let replaced = text.split(' ').join('%20');
  //let first = sub.replace("%20", ' ')