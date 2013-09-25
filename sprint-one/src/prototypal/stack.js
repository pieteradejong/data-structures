var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  // Use an object with numeric keys to store values
  var instance = Object.create(stackMethods);
  instance.sizeVal = 0;
  // Implement the methods below
  return instance;
};

var stackMethods = {

  push : function(value){
    this[this.sizeVal] = value;
    this.sizeVal++;
  },

  pop : function(){
    if (this.sizeVal) {
      var temp = this[this.sizeVal - 1];
      delete this[this.sizeVal - 1];
      this.sizeVal--;
      return temp;
    }
  },

  size : function(){
    return this.sizeVal;
  }

};