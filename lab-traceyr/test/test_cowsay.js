const expect = require('chai').expect;
const cowsays = require('../lib/cowsay').Animal;

describe('cows repeating a string', function() {
  it('should be an string', function(){
    expect(cowsays.cowsay()).to.be.a('string');
  });
});
