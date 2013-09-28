var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
<<<<<<< HEAD
  
  var size = 0; // Hint: set an initial value here
  // Implement the methods below

  instance.push = function(value){
    instance[ size ] = value;
=======
  var size = 0; // Hint: set an initial value here
  var temp;

  // Implement the methods below

  instance.push = function(value){
    storage[size] = value;
>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459
    size++;
  };

  instance.pop = function(){
<<<<<<< HEAD
    if (size === 0) { return undefined; }
    var ret = instance[size - 1];
    size--;
    return ret;
=======
    if (size) {
      temp = storage[size - 1];
      delete storage[size - 1];
      size--;
      return temp;
    }
>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
