var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  var storage = {};
  instance.sizeNum = 0;
  var temp;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {


  // Implement the methods below

  push : function(value){
    this[this.sizeNum] = value;
    this.sizeNum++;
  },

  pop : function(){
    if (this.sizeNum) {
      temp = this[this.sizeNum - 1];
      delete this[this.sizeNum - 1];
      this.sizeNum--;
      return temp;
    }
  },

  size : function(){
    return this.sizeNum;
  }
};

