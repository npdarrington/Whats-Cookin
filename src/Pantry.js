class Pantry {
  constructor(userPantry = []) { //userPantry which is an array?
    this.userPantry = userPantry;
  }
  getPantryItems(user) {
    return user.pantry;
  }
  getRecipeIngredientsInStock(user, recipeData) {
    const userPantry = this.getPantryItems(user)
    const stockedIngredients = recipeData.reduce((ingredientsInStock, ingredient) => {
      userPantry.forEach(item => {
        if (!ingredientsInStock.includes(ingredient) && item.ingredient === ingredient.id) {
          ingredientsInStock.push(ingredient)
        }
      })
      return ingredientsInStock;
    }, [])
    return stockedIngredients;
  }

  getMissingIngredients(user, recipeData) {
    const stockedItems = this.getRecipeIngredientsInStock(user, recipeData);
    const missingIngredients = recipeData.reduce((missingIngred, ingredient) => {
      let ingredientNotFound = stockedItems.find(item => {
        return item.id === ingredient.id;
      })
      if (!ingredientNotFound) {
        missingIngred.push(ingredient)
      }
      return missingIngred
    }, [])
    console.log(missingIngredients)
    return missingIngredients
  }

  // findPantryInfo() {
  //   user.pantry.forEach(item => {
  //     let itemInfo = ingredientsData.find(ingredient => {
  //       return ingredient.id === item.ingredient;
  //     });
  //     let originalIngredient = pantryInfo.find(ingredient => {
  //       if (itemInfo) {
  //         return ingredient.name === itemInfo.name;
  //       }
  //     });
  //     if (itemInfo && originalIngredient) {
  //       originalIngredient.count += item.amount;
  //     } else if (itemInfo) {
  //       pantryInfo.push({name: itemInfo.name, count: item.amount});
  //     }
  //   });
  //   displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
  // }
}


module.exports = Pantry;
