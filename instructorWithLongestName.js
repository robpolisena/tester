const instructorWithLongestName = function(instructors) {
let max = 0;
let person = 0;
for(let i = 0; i < instructors.length; i++) {
  if (instructors[i]["name"].length > max) {
  max = instructors[i]["name"].length;
  person = i
}
} return ("{name: \""+instructors[person].name + "\", course: \"" + instructors[person].course + "\"}");
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); 