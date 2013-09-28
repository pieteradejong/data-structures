var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var look = 0;
  var temp;

  var highestKey = 0;
  var lowestKey = 0;
  // Implement the methods below

  instance.enqueue = function(value){
<<<<<<< HEAD
    highestKey++;
    return instance[highestKey] = value;
  };

  instance.dequeue = function(){
    if (lowestKey === highestKey) { return undefined; }

    var ret = instance[lowestKey + 1];
    delete instance[lowestKey + 1];
    lowestKey++;
    return ret;
  };

  instance.size = function(){
    return highestKey - lowestKey;
=======
    storage[last] = value;
    last++;
  };

  instance.dequeue = function(){
    if (last - look) {
      temp = storage[look];
      delete storage[look];
      look++;
      return temp;
    }
  };

  instance.size = function(){
    return last - look;
>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459
  };

  return instance;
};
