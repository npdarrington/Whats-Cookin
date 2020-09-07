import { expect } from 'chai';

import users from '../src/data/users-data.js'
import recipeData from '../src/data/recipe-data.js'
import User from '../src/user.js';
import Pantry from '../src/Pantry.js';
import Recipe from '../src/recipe.js';

describe.only('Pantry', () => {
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
});
