import { expect } from 'chai';
import Pantry from '../src/Pantry.js';

describe.only('Pantry', function() {
  let pantry;

  beforeEach(function() {
    pantry = new Pantry();
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });
});
