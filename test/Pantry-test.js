import { expect } from 'chai';

import users from '../src/data/users-data.js'
import recipeData from '../src/data/recipe-data.js'
import User from '../src/user.js';
import Pantry from '../src/Pantry.js';
import ingredientsData from '../src/data/ingredient-data.js';

describe('Pantry', () => {
  let pantry;
  let user;

  beforeEach(() => {
    pantry = new Pantry();
    user = new User(users[0]);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should show the ingredients in a user\'s pantry', () => {
  expect(pantry.getPantryItems(user)).to.deep.equal(user.pantry);
  });

  it('should show a user missing ingredients to cook a meal', () => {
    expect(pantry.getRecipeIngredientsInStock(user, recipeData[0])).to.deep.equal([
      { id: 1123, name: 'egg', quantityNeeded: 74 },
      { id: 1012047, name: 'sea salt', quantityNeeded: 24 },
      { id: 10019903, name: 'semisweet chocolate chips', quantityNeeded: 2 }
    ]);
  })

  it('should show a user how many of each missing ingredients are needed for a given recipe', () => {
    expect(pantry.getRecipeIngredientsInStock(user, recipeData[0])[0].quantityNeeded).to.equal(74);
  })

  it('should show how much it costs to buy the missing ingredients needed for a given recipe', () => {
    const missingIngredients = pantry.getRecipeIngredientsInStock(user, recipeData[0]);
    expect(pantry.getMissingIngredientsPrice(missingIngredients, ingredientsData)[0].missingQuantityPrice).to.equal(349.28);
  });
});
