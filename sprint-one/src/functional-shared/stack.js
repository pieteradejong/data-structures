var makeStack = function() {
<<<<<<< HEAD
  var instance = {};
  var storage = {};
  
  var size = 0;

  _.extend(instance, stackMethods);

=======
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  var storage = {};
  instance.sizeNum = 0;
  var temp;
  _.extend(instance, stackMethods);
>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459
  return instance;
};

var stackMethods = {
<<<<<<< HEAD
  "push" : function(value){
    instance[ size ] = value;
    size++;
  },

  "pop" : function(){
    if (size === 0) { return undefined; }
    var ret = instance[size - 1];
    size--;
    return ret;
  },
=======


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
>>>>>>> cdbdd41c040024766ca7e9403e0ddfc998545459

  "size" : function(){
    return size;
  }
};
