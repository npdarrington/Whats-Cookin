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

  addIngredientsToCook(ingredientsMissing, user) {
    user.pantry = user.pantry.map(userPantryItem => {
      ingredientsMissing.forEach((ingredient, index) => {
        if (userPantryItem.ingredient === ingredient.id) {
          ingredientsMissing.splice(index, 1)
          userPantryItem.amount += ingredient.quantityNeeded
        }
      })
      return userPantryItem
    })
    if (ingredientsMissing.length !== 0) {
      ingredientsMissing.forEach(ingredient => {
        user.pantry.push({ingredient: ingredient.id, amount: ingredient.quantityNeeded})
      })
    }
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

  removeCookedIngredients(user, recipe) {
    user.pantry.forEach(pantryItem => {
      recipe.ingredients.forEach(ingredient => {
        if (pantryItem.ingredient === ingredient.id) {
          pantryItem.amount -= ingredient.quantity.amount;
        }
      })
    })
  }
}
module.exports = Pantry;
