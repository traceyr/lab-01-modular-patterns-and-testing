const expect = require('chai').expect;
const cowsays = require('../lib/cowsay').Animal;

describe('cows repeating a string', function() {
  it('should match between the two strings', function(){
    expect(cowsays.cowsay('hello!')).to.eql('The cow says "hello!"');
  });
});
