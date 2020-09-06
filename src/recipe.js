class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }
  calculateIngredientsCost() {
    //find each ingredient in the ingredient-data.js file
    //for each ingredient, add that multiply the amount required by its
    //unit cost set that to a variable subtotal
    //for each subtotal, add it to the accumulator.

     this.ingredients.map(id => {
      ingredientData.find(ingredient => ingredient.id === id)
      ;
    ;
  }
  retrieveCookingInstructions() {

  }
}

module.exports = Recipe;
