var makeStack = function() {
  var instance = {};
  var storage = {};
  
  var size = 0;

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
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

  "size" : function(){
    return size;
  }
};