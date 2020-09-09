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
        if (!ingredientsInStock.includes(ingredient) && +item.ingredient === ingredient.id && item.amount >= ingredient.quantity.amount) {
          ingredientsInStock.push(item)
        }
      })
      return ingredientsInStock;
    }, [])
    return stockedIngredients;

   // check if user.pantry amount is less than amount in recipeIngredients ingredient
   //
  }

  getMissingIngredients(user, recipeIngredients) {
    const stockedItems = this.getRecipeIngredientsInStock(user, recipeIngredients);
    const missingIngredients = recipeIngredients.reduce((missingIngred, ingredient) => {
      let ingredientNotFound = stockedItems.find(item => {
        return +item['ingredient'] === ingredient.id;
      })
      if (!ingredientNotFound) {
        missingIngred.push(ingredient)
      }
      return missingIngred
    }, [])
    return missingIngredients
  }

  getMissingQuantity(user, recipeIngredients) {
    const missingIngredients = this.getMissingIngredients(user, recipeIngredients)
    const missingQuantities = missingIngredients.map(ingredient => {
      user.pantry.forEach(item => {
        if (ingredient.id === +item.ingredient) {
          ingredient.quantity.amount -= item.amount
        }
      })
      return ingredient
    })
    console.log(missingQuantities)
    return missingQuantities
  }
  calculateMissingIngredientsCost(ingredientData, missingIngredients) {
    let totalIngredientCost = missingIngredients.reduce((totalCost, ingredient) => {
      ingredientData.forEach(data => {
        if (ingredient.id === data.id) {
          totalCost += ingredient.quantity.amount * data.estimatedCostInCents;
        }
      })
      return totalCost;
    }, 0);
    return +(`${totalIngredientCost / 100}`);
    }
    // let recipeIngredients = missingIngredients.map(id => {
    //   console.log("these are the missing Ingredients", id)
    //   return ingredientData.find(ingredient => console.log(ingredient.id))
    // })
    //
    // let total = 0;
    // recipeIngredients.reduce((price, currVal) => {
    //   let recipeQuantity = this.ingredients.find(ingredient => {
    //     return ingredient.id === currVal.id;
    //   }).quantity.amount;
    //   price = currVal.estimatedCostInCents * recipeQuantity;
    //   return (total += price);
    // }, 0)
    // return +(total / 100).toFixed(2)
  }
  // if ingredient doesn't exist in pantry (by iterating and looking for ID) => then return ingredient.amount
  // if it does match, subtract: recipe.quantity.amount - pantry item.amount  = how many more needed
  // recipe ingredient amount - pantry ingredient amount (more looping fun oh joy)

  // let insufficientQuantities = stockedItems.filter(item => {
  //   console.log(item, ingredient.quantity.amount)
  //   return (item.amount - ingredient.quantity.amount) < 0
  // })
  // console.log('xxxx', insufficientQuantities)

  // reduce((missingAmounts, item) => {
  //   if (!missingAmounts[ingredient.name] && +item.ingredient === +ingredient.id) {
  //     missingAmounts[ingredient.name] = ingredient.quantity.amount - item.amount
  //   } else if (!ingredient.id) {
  //     missingAmounts[ingredient.name] = ingredient.quantity.amount
  //   }
  //   return missingAmounts
  // }, {})



module.exports = Pantry;
