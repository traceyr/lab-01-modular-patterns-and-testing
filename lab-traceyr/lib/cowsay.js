var Animal = function(){};

Animal.prototype.cowsay = function(string) {
  return 'The cow says "' + string + '"';
};

exports.Animal = new Animal();
