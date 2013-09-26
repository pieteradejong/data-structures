var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  // Use an object with numeric keys to store values
  var instance = {};
  instance._storage = {};
  //var size = 0; // Hint: set an initial value here
  instance.sizeVal = 0;

  _.extend(instance, stackMethods);
  // Implement the methods below
  return instance;
};

var stackMethods = {

  push : function(value){
    this._storage[this.sizeVal] = value;
    this.sizeVal++;
  },

  pop : function(){
    if (this.sizeVal) {
      var temp = this._storage[this.sizeVal - 1];
      delete this._storage[this.sizeVal - 1];
      this.sizeVal--;
      return temp;
    }
  },

  size : function(){
    return this.sizeVal;
  }
};

