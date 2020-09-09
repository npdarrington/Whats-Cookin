import { expect } from 'chai';

import User from '../src/user';
import data from '../src/data/users-data';

describe('User', () => {
  let user;
  let userInfo;
  let recipe;
  let recipe2;

  beforeEach(() => {
    userInfo = data.filter(user => user.id === 1);
    user = new User(userInfo[0]);

    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner'], ingredients: ['dry breadcrumbs', 'boneless skinless chicken breasts', 'parmesan cheese', 'marinara sauce']};
    recipe2 = { name: 'Buffalo Wings', type: ['american', 'lunch'], ingredients: ['chicken wing', 'red chili powder', 'tabasco sauce'] };
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should initialize with an id', () => {
    expect(user.id).to.equal(1);
  });

  it('should initialize with a name', () => {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should initialize with a pantry', () => {
    expect(user.pantry[0].ingredient).to.equal(11477);
  });

  it('should initialize with an empty favoriteRecipes array', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should initialize with an empty recipesToCook array', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user.saveRecipe(recipe);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it('should be able to decide to cook a recipe', () => {
    user.decideToCook(recipe);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it('should be able to filter recipes by type in favorites', () => {
    user.saveRecipe(recipe);
    user.saveRecipe(recipe2);
    expect(user.filterRecipes('favoriteRecipes', 'italian')).to.deep.equal([recipe]);
  });

  it('should be able to filter recipes by type in recipes to cook', () => {
    user.decideToCook(recipe2);
    expect(user.filterRecipes('recipesToCook', 'american')).to.deep.equal([recipe2]);
  });

  it('should be able to search recipes by name in favorites', () => {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('favoriteRecipes', 'Chicken Parm')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by ingredient in favorites', () => {
    user.saveRecipe(recipe2);
    expect(user.searchForRecipe('favoriteRecipes', 'chicken wing')).to.deep.equal([recipe2]);
  });

  it('should be able to search recipes by name in recipes to cook', () => {
    user.decideToCook(recipe);
    expect(user.searchForRecipe('recipesToCook', 'Chicken Parm')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by ingredient in recipes to cook', () => {
    user.decideToCook(recipe2);
    expect(user.searchForRecipe('recipesToCook', 'chicken wing')).to.deep.equal([recipe2]);
  });

  it('should be able to remove recipe from favorites', () => {
    user.saveRecipe(recipe);
    user.saveRecipe(recipe2);
    expect(user.removeRecipe('favoriteRecipes', recipe)).to.deep.equal(user.favoriteRecipes[recipe2]);
  });

  it('should be able to remove recipe from recipes to cook', () => {
    user.decideToCook(recipe);
    user.decideToCook(recipe2);
    expect(user.removeRecipe('recipesToCook', recipe2)).to.deep.equal(user.recipesToCook[recipe]);
  });

  it('should use the powers of Marie Kondo to organize a pantry', () => {
    expect(user.marieKondoMyPantry()[1001]).to.equal(18)
  })

  it('should be able to consolidate ingredients with the same id in pantry', () => {
    user.consolidatePantry()
    expect(user.pantry[0]).to.deep.equal({ ingredient: '1001', amount: 18 })
  })
});
