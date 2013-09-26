var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var highestKey = 0;
  var lowestKey = 0;
  // Implement the methods below

  instance.enqueue = function(value){
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
  };

  return instance;
};
