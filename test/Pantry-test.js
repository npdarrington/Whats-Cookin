import { expect } from 'chai';

import users from '../src/data/users-data.js'
import recipeData from '../src/data/recipe-data.js'
import User from '../src/user.js';
import Pantry from '../src/Pantry.js';
import Recipe from '../src/recipe.js';

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
    const recipe = recipeData[0].ingredients;
    expect(pantry.getMissingIngredients(user, recipe)).to.deep.equal([recipe[2], recipe[7], recipe[8]]);
  })

  it('should show a user how many of each missing ingredients are needed for a given recipe', () => {
    const recipe = recipeData[0].ingredients;
    const missingQuantity = pantry.getMissingQuantity(user, recipe)
    expect(missingQuantity[0].quantity.amount).to.equal(74);
  })
});
