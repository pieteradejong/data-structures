var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
<<<<<<< HEAD
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
=======
  // Use an object with numeric keys to store values
  var storage = {};
  storage.last = 0;
  storage.look = 0;

  // Implement the methods below
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {

  enqueue : function(value){
    this[this.last] = value;
    this.last++;
  },

  dequeue : function(){
    if (this.last - this.look) {
      var temp = this[this.look];
      delete this[this.look];
      this.look++;
      return temp;
    }
  },

  size : function(){
    return this.last - this.look;
  }

>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459
};

