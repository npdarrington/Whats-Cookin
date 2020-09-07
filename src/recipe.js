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
  findRecipeByTag(recipeData, selectedTag){
    return recipeData.reduce((foundRecipes, recipe) => {
      if(recipe.tags.includes(selectedTag)){
        foundRecipes.push(recipe)
      }
      return foundRecipes
    }, [])
  }
  findRecipeByIngredients(recipeData, selectedIngredient){
    return recipeData.reduce((foundRecipes, recipe) => {
      recipe.ingredients.forEach(ingredient => {
      if(ingredient.name === selectedIngredient){
        foundRecipes.push(recipe)
      }
      })
      return foundRecipes
    }, [])
  }
}


module.exports = Recipe;
