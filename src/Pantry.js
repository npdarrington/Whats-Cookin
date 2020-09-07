class Pantry {
  constructor(userPantry = []) { //userPantry which is an array?
    this.userPantry = userPantry;
  }
  getPantryItems(user) {
    return user.pantry;
  }
  
  findPantryInfo() {
    user.pantry.forEach(item => {
      let itemInfo = ingredientsData.find(ingredient => {
        return ingredient.id === item.ingredient;
      });
      let originalIngredient = pantryInfo.find(ingredient => {
        if (itemInfo) {
          return ingredient.name === itemInfo.name;
        }
      });
      if (itemInfo && originalIngredient) {
        originalIngredient.count += item.amount;
      } else if (itemInfo) {
        pantryInfo.push({name: itemInfo.name, count: item.amount});
      }
    });
    displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
  }
}


module.exports = Pantry;
