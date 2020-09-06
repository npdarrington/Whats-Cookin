import { expect } from 'chai';
import Pantry from '../src/Pantry.js';

describe.only('Pantry', () => {
  let pantry;
  let user;

  beforeEach(() => {
    pantry = new Pantry();
    user = new User(user);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });
});
