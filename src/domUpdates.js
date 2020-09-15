const domUpdates = {
  user: null,
  ingredientsData: null,
  pantryInfo: [],

  assignUser(user) {
    this.user = user
  },
  
  assignIngredientsData(data) {
    this.ingredientsData = data
  },
  
  generateUser() {
    let firstName = this.user.name.split(" ")[0];
    let welcomeMsg = `
      <section class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </section>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
    this.findPantryInfo();
  },

  // maybe move these two out of generateUser because they rely on ingredientsData
  findPantryInfo() {
    this.user.pantry.forEach(item => {
      let itemInfo = this.ingredientsData.find(ingredient => {
        return ingredient.id === item.ingredient;
      });
      let originalIngredient = this.pantryInfo.find(ingredient => {
        if (itemInfo) {
          return ingredient.name === itemInfo.name;
        }
      });
      if (itemInfo && originalIngredient) {
        originalIngredient.count += item.amount;
      } else if (itemInfo) {
        this.pantryInfo.push({name: itemInfo.name, count: item.amount, id: itemInfo.id});
      }
    });
    this.displayPantryInfo(this.pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
  },

  displayPantryInfo(pantry) {
    //*** pantry = DOM pantry with just name and #
    pantry.forEach(ingredient => {
      let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.id}">
        <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
      document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
        ingredientHtml);
    });
  }
}

export default domUpdates;

//anything that populates DOM

//what would still be in scripts? 
//imports
//event listeners
// fetch and dom update calls hooked onto event listener
//things that rely on user interaction