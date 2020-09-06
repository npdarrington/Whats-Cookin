import { expect } from 'chai';

import User from '../src/user';
import data from '../src/data/users-data';

describe('User', function() {
  let user;
  let userInfo;
  let recipe;
  let recipe2;

  beforeEach(function() {
    userInfo = data.filter(user => user.id === 1);
    user = new User(userInfo[0])

    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner']};
    recipe2 = { name: 'Buffalo Wings', type: ['american', 'lunch'] };
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should initialize with an id', function() {
    expect(user.id).to.equal(1);
  });

  it('should initialize with a name', function() {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should initialize with a pantry', function() {
    expect(user.pantry[0].ingredient).to.equal(11477);
  });

  it('should initialize with an empty favoriteRecipes array', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should initialize with an empty recipesToCook array', function() {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', function() {
    user.saveRecipe(recipe);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it('should be able to decide to cook a recipe', function() {
    user.decideToCook(recipe);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it('should be able to filter recipes by type', function() {
    user.saveRecipe(recipe);
    user.saveRecipe(recipe2);
    expect(user.filterRecipes('italian')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', function() {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  });
});
