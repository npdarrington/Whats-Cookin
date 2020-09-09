import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipeData from '../src/data/recipe-data';
import ingredientData from '../src/data/ingredient-data'

describe('Recipe', function() {
  let recipe;

  beforeEach(function() {
    recipe = new Recipe(recipeData[0]);
  })

  it('is a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', () => {
    expect(recipe.id).to.equal(595736);
  });

  it('should initialize with an name', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with an array of ingredients', () => {
    const ingredient = {
      "id": 20081,
      "name": "all purpose flour",
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }
    expect(recipe.ingredients[0]).to.deep.equal(ingredient);
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost(ingredientData)).to.equal(522.32);
  });
  it('should provide the user with all the instructions to make the recipe', () => {
    expect(recipe.retrieveCookingInstructions()).to.deep.equal(recipe.instructions)
  });
  it('should provide a list of recipes which contain a specified ingredient', () => {
    expect(recipe.findRecipeByIngredients(recipeData, 'egg')[0]).to.deep.equal(recipe)
  });
  it('should provide a list of recipes which contain a specified tag', () => {
    expect(recipe.findRecipeByTag(recipeData, "snack")[0]).to.deep.equal(recipe)
  });
});
