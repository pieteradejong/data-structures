var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
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

};

