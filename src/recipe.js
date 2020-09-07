class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions
    this.ingredients = recipe.ingredients;
  }
  calculateIngredientsCost(ingredientData){
    let recipeIngredients = this.ingredients.map(id => {
      return ingredientData.find(ingredient => ingredient.id === id.id);
    });
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
    console.log(this.instructions)
    return this.instructions
  }
}

module.exports = Recipe;
