class Pantry {
  constructor() {}

  getPantryItems(user) {
    user.consolidatePantry();
    return user.pantry;
  }

  getRecipeIngredientsInStock(user, recipe) {
    return recipe.ingredients.reduce((ingredientsMissing, ingredientForRecipe) => {
      let pantryInventory = this.getPantryItems(user);
      let item = pantryInventory.find(item => {
        return ingredientForRecipe.id === item.ingredient;
      });
      if (!item || ingredientForRecipe.quantity.amount > item.amount) {
        let amountInPantry = (item && item.amount) || 0;
        ingredientsMissing.push({
          id: ingredientForRecipe.id,
          name: ingredientForRecipe.name,
          quantityNeeded: ingredientForRecipe.quantity.amount - amountInPantry
        });
      }
      return ingredientsMissing;
    }, []);
  }

  getMissingIngredientsPrice(missingIngredients, ingredientsData) {
    return missingIngredients.map(missingIngredient => {
      let missingQuantityPrice = ingredientsData.reduce((totalAmount, ingredient) => {
        if (missingIngredient.id === ingredient.id) {
          totalAmount = missingIngredient.quantityNeeded * ingredient.estimatedCostInCents;
        }
        return totalAmount;
      }, 0);
      missingIngredient.missingQuantityPrice = (missingQuantityPrice / 100);
      return missingIngredient;
    });
  }
}

module.exports = Pantry;

// user pantry should now have +76 eggs into eggs, 24 sea salts, 2 choco chips