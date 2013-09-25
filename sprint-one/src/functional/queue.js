var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var look = 0;
  var temp;

  // Implement the methods below

  instance.enqueue = function(value){
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
  };

  return instance;
};
