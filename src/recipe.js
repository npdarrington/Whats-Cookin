class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
  }

  calculateIngredientsCost(ingredientData) {
    let totalIngredientCost = this.ingredients.reduce((totalCost, ingredient) => {
      ingredientData.forEach(data => {
        if (ingredient.id === data.id) {
          totalCost += ingredient.quantity.amount * data.estimatedCostInCents;
        }
      })
      return totalCost;
    }, 0);
    return +(`${totalIngredientCost / 100}`);
  }

  retrieveCookingInstructions() {
    return this.instructions
  }

  findRecipeByTag(recipeData, selectedTag) {
    return recipeData.reduce((foundRecipes, recipe) => {
      if (recipe.tags.includes(selectedTag)) {
        foundRecipes.push(recipe);
      }
      return foundRecipes;
    }, [])
  }

  findRecipeByIngredients(recipeData, selectedIngredient) {
    return recipeData.reduce((foundRecipes, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.name.includes(selectedIngredient)) {
          foundRecipes.push(recipe);
        }
      })
      return foundRecipes;
    }, [])
  }
}
module.exports = Recipe;
