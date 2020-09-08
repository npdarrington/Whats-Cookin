class Pantry {
  constructor(userPantry = []) { //userPantry which is an array?
    this.userPantry = userPantry;
  }
  getPantryItems(user) {
    user.consolidatePantry()
    return user.pantry;
  }
  getRecipeIngredientsInStock(user, recipeIngredients) {
    const userPantry = this.getPantryItems(user)
    const stockedIngredients = recipeIngredients.reduce((ingredientsInStock, ingredient) => {
      userPantry.forEach(item => {
        console.log(item.amount, ingredient.quantity.amount)
        if (!ingredientsInStock.includes(ingredient) && +item.ingredient === ingredient.id && item.amount >= ingredient.quantity.amount) {
          ingredient.quantity.amount - item.amount
          ingredientsInStock.push(ingredient)
        }
      })
      return ingredientsInStock;
    }, [])
    console.log('stocked', stockedIngredients, stockedIngredients.length)
    // console.log('user pantry', userPantry)
    return stockedIngredients;

   // check if user.pantry amount is less than amount in recipeIngredients ingredient 
   // 
  }

  getMissingIngredients(user, recipeIngredients) {
    const stockedItems = this.getRecipeIngredientsInStock(user, recipeIngredients);
    const missingIngredients = recipeIngredients.reduce((missingIngred, ingredient) => {
      let ingredientNotFound = stockedItems.find(item => {
        return item.id === ingredient.id;
      })
      if (!ingredientNotFound) {
        missingIngred.push(ingredient)
      }
      // console.log('HERE', missingIngred)
      return missingIngred
    }, [])
    // console.log('missing', missingIngredients)
    return missingIngredients
  }

    // recipe ingredient amount - pantry ingredient amount (more looping fun oh joy)
  
}


module.exports = Pantry;
