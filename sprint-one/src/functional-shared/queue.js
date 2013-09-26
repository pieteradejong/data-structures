var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  var storage = {};

  var highestKey = 0;
  var lowestKey = 0;
  
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {
  "enqueue" : function(value){
    highestKey++;
    return instance[highestKey] = value;
  },
  "dequeue" : function(){
    if (lowestKey === highestKey) { return undefined; }

    var ret = instance[lowestKey + 1];
    delete instance[lowestKey + 1];
    lowestKey++;
    return ret;
  },
  "size" : function(){
    return highestKey - lowestKey;
  }
};

