var makeQueue = function(){
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.last = 0;
  instance.look = 0;
  // Implement the methods below
  return instance;
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

