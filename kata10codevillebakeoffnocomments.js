const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  bakeA = ingredientCheck(bakeryA, recipes) 
  bakeB = ingredientCheck(bakeryB, recipes) 
for (let a=0; a<bakeA.length; a++) {
    for(let b=0; b<bakeB.length; b++) {
        for(let c=0; c<recipes.length; c++) {
            if((bakeA[a] === recipes[c].ingredients[0] || bakeA[a] === recipes[c].ingredients[1])  && (bakeB[b] === recipes[c].ingredients[0] || bakeB[b] === recipes[c].ingredients[1])) {
                return recipes[c].name
        }
        }
    }
}
}
function ingredientCheck(bakery, recipes) {
  let match = [];
  for (let i = 0; i<bakery.length; i++) {
    for(let x = 0; x<recipes.length; x++) {
      if(bakery[i] === recipes[x].ingredients[0] || bakery[i] === recipes[x].ingredients[1]) {
        match.push(bakery[i])
      } 
    }
  }return match
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));