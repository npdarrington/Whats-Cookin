class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    let recipeIndex = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(recipeIndex, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterRecipes(recipeLocation, type) {
    return this[recipeLocation].filter(recipe => recipe.type.includes(type));
  }

  searchForRecipe(recipeLocation, keyword) {
    return this[recipeLocation].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.includes(keyword));
  }

  marieKondoMyPantry() {
    const marieKondoPantry = this.pantry.reduce((konmariPantry, item) => {
      if(!konmariPantry[item.ingredient]) {
        konmariPantry[item.ingredient] = item.amount
      } else {
        konmariPantry[item.ingredient] += item.amount
      }
      return konmariPantry
    }, {})
    return marieKondoPantry
  }

  consolidatePantry() {
    const marieKondoPantry = this.marieKondoMyPantry()
    const pantry = Object.entries(marieKondoPantry).map(ingredient => {
      return { ingredient: +ingredient[0], amount: +ingredient[1] }
    })

    // const pantry = Object.keys(marieKondoPantry).map(ingredient => {
    //   return { ingredient: ingredient, amount: marieKondoPantry[ingredient] }
    // })
    this.pantry = pantry
  }

}

module.exports = User;
