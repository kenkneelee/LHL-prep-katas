// Declare helper function to check whether bakery has a needed ingredient for the recipe
const ingredientCheck = function (bakery, ingredients) {
  // Iterate through all ingredients in the recipe given
  for (let needed of ingredients) {
    // If the bakery has the needed ingredient, return true
    if (bakery.includes(needed)) {
      return true;
    }
    // Check other ingredients
  }
  // If bakery contains none of the needed ingredients return false and move on
  return false;
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Iterate through every recipe provided
  for (let recipe of recipes) {
    if (
      ingredientCheck(bakeryA, recipe.ingredients) &&
      ingredientCheck(bakeryB, recipe.ingredients)
    ) {
      // Return a value when a recipe is found that both bakeries have an ingredient for
      return recipe.name;
    }
  }
  return false;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
