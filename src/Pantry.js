class Pantry {
  constructor() {}

  getPantryItems(user) {
    user.consolidatePantry();
    return user.pantry;
  }
//consider renaming to reflect what method is actually returning
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

  addIngredientsToCook(ingredientsMissing, user){
    ingredientsMissing.map(ingredient => {
      user.pantry.forEach(pantryItem => {
        console.log(ingredient.id === pantryItem.id)
        if(ingredient.id === pantryItem.id){
        // pantryItem.amount += ingredient.quantityNeeded
        console.log("this is what we have", pantryItem)
      } else if (!user.pantry.includes(ingredient)){
          console.log("this is what we need", ingredient)
      }
        })
      // user.pantry.push(ingredient)
    })
  }
    //we need to add the ingredients that are missing from the user's pantry
    //if we are missing an ingredient or an ingredient quantity is insufficient, push it into the array of objects




    //for a given recipe, iterate over the required ingredients and compare what is needed to what is in stock
    //if what is needed is more than what is in stock, add that number to the returned value
    //return an array of objects, keys ingredient no., value number needed

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

  saveUserPantry() {
    //Whenever the user buys ingredients, we want to add to the the ingredient count,
    //whenever the user cooks a recipe, we want to take away from the ingredient count
    //to remove ingredients, we want to post the updated count to the server so that it
    //will persist onload; same with when we want to add ingredients.
    //whenever there is a change, run this function.
    //when we run find necessary ingredients, we want to transfer the count to this function, then POST
    //
  }
}

module.exports = Pantry;
