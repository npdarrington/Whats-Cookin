import './css/styles.scss';
import './index.js';
import fetches from './fetch';
import domUpdates from './domUpdates';
import User from './user';
import Pantry from './Pantry';
import Recipe from './recipe';

let allRecipesBtn = document.querySelector(".show-all-btn");
let filterBtn = document.querySelector(".filter-btn");
let main = document.querySelector("main");
let menuOpen = false;
let pantryBtn = document.querySelector(".my-pantry-btn");
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".search-btn");
let searchForm = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");

window.addEventListener('load', function () {
  getIngredientsData()
  getUserData()
  getRecipeData();
})

allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

let user;
let ingredientsData;
let recipeData;
let recipe;
let recipes = []
let users;

function getIngredientsData() {
  return fetches.getIngredientsData()
    .then(data => {
      ingredientsData = data
    })
    .then(() => domUpdates.assignIngredientsData(ingredientsData))
    .catch(err => console.log(err.message))
}

function getUserData() {
  return fetches.getUserData()
    .then(data => {
      users = data
      user = new User(users[Math.floor(Math.random() * users.length)])
    })
    .then(() => domUpdates.assignUser(user))
    .then(() => domUpdates.generateUser())
    .catch(err => console.log(err.message))
}

function getRecipeData() {
  return fetches.getRecipeData()
    .then(data => {
      recipeData = data
      recipeData = recipeData.map(recipe => {
        let recipeInfo = new Recipe(recipe)
        return recipeInfo
      })
    })
    .then(() => domUpdates.assignRecipeData(recipeData))
    .then(() => domUpdates.createCards())
    .then(() => domUpdates.findTags())
    .catch(err => console.log(err.message))
}

// function postUserData(userData) {
//   return fetch(pantry.removeCookedIngredients(user, recipe))//users/wcUsersData`,{
//   method: 'POST',
//   body: JSON.stringify(userData),
//   headers: {
//     'content-type': 'application/json',
//   }
//   .then(response => ))
// }

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = domUpdates.recipeData.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = domUpdates.recipeData.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes(event) {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      event.target.setAttribute('aria-pressed', true);
      user.saveRecipe(cardId);
      console.log(user.favoriteRecipes)
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      event.target.setAttribute('aria-pressed', false);
      user.removeRecipe(cardId);
      console.log(user.favoriteRecipes)
      showSavedRecipes()
    }
  }else if (event.target.id === "cook-recipe-btn"){
    cookRecipe(event);
  }else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    domUpdates.openRecipeInfo(event);
  }
}
function cookRecipe(event) {
  const recipeId = (+event.target.closest('.recipe-card').id)
  console.log(recipeId)
    const pantry = new Pantry()
    const matchRecipeId = domUpdates.recipeData.find(recipe => {
      return (recipeId === recipe.id)
    })
    console.log(matchRecipeId)
    console.log("before", domUpdates.user.pantry)
  let ingredientsMissing = pantry.getRecipeIngredientsInStock(domUpdates.user, matchRecipeId)
    pantry.addIngredientsToCook(ingredientsMissing, domUpdates.user)
    pantry.removeCookedIngredients(domUpdates.user, matchRecipeId)
    console.log("after", domUpdates.user.pantry)
}

//if target.id does not work because button doesn't generate onload, consider PARENTNODE
// this will be an event targeting handler type function
// when a user clicks the open recipe button, it will add an event target to the cook recipe button
// when the user clicks the cook recipe button, two things will happen:
// the pantry will add ingredients that are missing to the pantry--will this require a fetch call?
// the pantry will remove all ingredients necessary to cook the recipe
// the user will then post the updated pantry information to the server

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = domUpdates.recipeData.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  showMyRecipesBanner();
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

function showWelcomeBanner() {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

//can only search by pieces of recipe name -- not tag or ingredient yet
function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = domUpdates.recipeData.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = domUpdates.recipeData.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new Recipe(recipe));
  return recipes
}

function toggleMenu() {
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
    pantryBtn.setAttribute('aria-expanded', true);
  } else {
    menuDropdown.style.display = "none";
    pantryBtn.setAttribute('aria-expanded', false);
  }
}

function showAllRecipes() {
  domUpdates.recipeData.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  showWelcomeBanner();
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.find(v => arr.includes(v));
  let ingredientIds = selected.map(item => {
    return +item.id;
  })
  domUpdates.recipeData.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.id);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientIds)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
