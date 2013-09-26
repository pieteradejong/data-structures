var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance._storage = {};
  // Use an object with numeric keys to store values
  instance.last = 0;
  instance.look = 0;
  _.extend(instance, queueMethods);
  // Implement the methods below
  return instance;
};

var queueMethods = {
  enqueue : function(value){
    this._storage[this.last] = value;
    this.last++;
  },

  dequeue : function(){
    if (this.last - this.look) {
      var temp = this._storage[this.look];
      delete this._storage[this.look];
      this.look++;
      return temp;
    }
  },

  size : function(){
    return this.last - this.look;
  }
};

