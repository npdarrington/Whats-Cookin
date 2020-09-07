class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }
  calculateIngredientsCost(ingredientData) {
    //find each ingredient in the ingredient-data.js file
    //for each ingredient, add that multiply the amount required by its
    //unit cost set that to a variable subtotal
    //for each subtotal, add it to the accumulator.

    let recipeIngredients = this.ingredients.map(id => {
    return ingredientData.find(ingredient => ingredient.id === id.id);
    });
    console.log(recipeIngredients)
    console.log(this.ingredients)

  let total = 0
  recipeIngredients.reduce((price, currVal) => {
    let recipeQuantity = this.ingredients.find(ingredient => {
    return ingredient.id === currVal.id
  }).quantity.amount
   price = currVal.estimatedCostInCents * recipeQuantity
  return (total += price)
  }, 0)
  return +(total/100).toFixed(2)

    }
  retrieveCookingInstructions() {

  }
}

module.exports = Recipe;
