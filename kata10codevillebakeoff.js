const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  bakeA = ingredientCheck(bakeryA, recipes) 
  bakeB = ingredientCheck(bakeryB, recipes) 
  //console.log(bakeA);
  //console.log(bakeB);
for (let a=0; a<bakeA.length; a++) {
    for(let b=0; b<bakeB.length; b++) {
        for(let c=0; c<recipes.length; c++) {
            if((bakeA[a] === recipes[c].ingredients[0] || bakeA[a] === recipes[c].ingredients[1])  && (bakeB[b] === recipes[c].ingredients[0] || bakeB[b] === recipes[c].ingredients[1])) {
                //console.log(bakeA[a]);
                //console.log(recipes[c].name);
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
                if(bakery[i] === recipes[x].ingredients[0] || bakery[i] === recipes[x].ingredients[1])  {
                  //console.log(recipes[0]["ingredients"]);
                 // console.log(true);
                  //console.log(recipes[1].ingredients[0]);
                  match.push(bakery[i])
                 // console.log(match);
                 //return match
                } //return match
                }//return match
                //console.log(match);
       // console.log(recipes[x]["ingredients"])
      //console.log(bakeryA[i]);
      //if(bakeryA[i] === )
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
//console.log(ingredientCheck(bakeryA, recipes));
//console.log(ingredientCheck(bakeryB, recipes));


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
//console.log(ingredientCheck(bakeryA, recipes));
//console.log(ingredientCheck(bakeryB, recipes));