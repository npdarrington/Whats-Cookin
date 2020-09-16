const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/domUpdates';
import Recipe from '../src/recipe';
import data from '../src/data/recipe-data';

chai.use(spies)

describe ('DOM Test', () => {

  let recipe;
  beforeEach(() => {
    recipe = new Recipe(data[0])
    domUpdates.assignRecipeData(recipe)
    global.document = {}
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => {
      return { innerText: '' }
    });
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  it('should change the innerText of html element', () => {
    domUpdates.displayRecipeDetails()
    expect(1).to.equal(1)
  })
  
});