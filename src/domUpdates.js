const domUpdates = {
  ingredientsData: null,
  user: null,
  pantryInfo: [],
  recipeData: null,

  assignUser(data) {
    this.user = data
  },

  assignIngredientsData(data) {
    this.ingredientsData = data
  },

  assignRecipeData(data) {
    this.recipeData = data
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
  },

  createCards() {
    this.recipeData.forEach(recipe => {
      let shortRecipeName = recipe.name;
      if (recipe.name.length > 40) {
        shortRecipeName = recipe.name.substring(0, 40) + "...";
      }
      this.displayRecipeDetails(recipe, shortRecipeName)
    });
  },

  displayRecipeDetails(recipeInfo, shortRecipeName) {
    let main = document.querySelector("main");
    let cardHtml = `
      <section class="recipe-card" id=${recipeInfo.id}>
        <h3 maxlength="40">${shortRecipeName}</h3>
        <article class="card-photo-container">
          <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
          <article class="text">
            <label>Click for Instructions</label>
          </article>
        </article>
        <h4>${recipeInfo.tags[0]}</h4>
        <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon" role="button" aria-describedby="Click on this icon to favorite the ${shortRecipeName} recipe." aria-pressed="false" tabindex="0">
        <button id=cook-recipe-btn>Cook recipe</button>
      </section>`

    main.insertAdjacentHTML("beforeend", cardHtml);
  },

  openRecipeInfo(event) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    fullRecipeInfo.style.display = "inline";
    let recipeId = event.target.closest('.recipe-card').id
    console.log(recipeId)
    let recipe = this.recipeData.find(recipe => recipe.id === Number(recipeId));
    console.log(recipe)
    this.generateRecipeTitle(recipe, this.generateIngredients(recipe));
    this.addRecipeImage(recipe);
    this.generateInstructions(recipe);
    fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></section>");

  },

  generateRecipeTitle(recipe, ingredients) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    let recipeTitle = `
      <button id="exit-recipe-btn">X</button>
      <h3 id="recipe-title">${recipe.name}</h3>
      <h4>Ingredients</h4>
      <p>${ingredients}</p>`
    fullRecipeInfo.insertAdjacentHTML("beforeend", recipeTitle);
  },

  addRecipeImage(recipe) {
    document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  generateIngredients(recipe) {
    const mappedRecipe = recipe.ingredients.map(recipeIngredient => {
      this.ingredientsData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          recipeIngredient.name = ingredient.name
        }
      })
      return recipeIngredient
    })
    return recipe && mappedRecipe.map(i => {
      return `${this.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
    }).join(", ");
  },

  generateInstructions(recipe) {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    let instructionsList = "";
    let instructions = recipe.instructions.map(i => {
      return i.instruction
    });
    instructions.forEach(i => {
      instructionsList += `<li>${i}</li>`
    });
    fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
    fullRecipeInfo.insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
  },

  exitRecipe() {
    let fullRecipeInfo = document.querySelector(".recipe-instructions");
    while (fullRecipeInfo.firstChild &&
      fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
    fullRecipeInfo.style.display = "none";
    document.getElementById("overlay").remove();
  },

  findTags() {
    let tags = [];
    this.recipeData.forEach(recipe => {
      recipe.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    tags.sort();
    this.listTags(tags);
  },

  listTags(allTags) {
    let tagList = document.querySelector(".tag-list");
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${domUpdates.capitalize(tag)}</label></li>`;
      tagList.insertAdjacentHTML("beforeend", tagHtml);
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
