const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import domUpdates from '../src/domUpdates';
// import Recipe from '../src/recipe';
import data from '../src/data/recipe-data';

chai.use(spies)

describe ('DOM Test', () => {

  
  beforeEach(() => {
    domUpdates.assignRecipeData(data)
    global.domUpdates = {}
    chai.spy.on(domUpdates, ['displayRecipeDetails'], () => {});
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  }); 

  it('should check if displayRecipeDetails is called when creating recipe cards', () => {
    domUpdates.createCards()
    expect(domUpdates.displayRecipeDetails).to.have.been.called(50)
  });
  
});