class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
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
    return this.instructions
  }
  findRecipeByTag(tag){
    const result = ingredientData.filter(recipe => {
    })
  }
  findRecipeByIngredients(recipeData, x){
    const result = []
    recipeData.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          if(ingredient.name === x){
            result.push(recipe)
          }
      })
    })
    console.log(result)
    return result
  }
}


module.exports = Recipe;
