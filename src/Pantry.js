class Pantry {
  constructor(userPantry = []) { //userPantry which is an array?
    this.userPantry = userPantry;
  }
  getPantryItems(user) {
    user.consolidatePantry()
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
}

module.exports = Pantry;
