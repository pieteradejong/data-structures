var makeStack = function() {
  var instance = {};
  instance._storage = {};
  instance._sizeVal = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {

  push : function(value){
    this._storage[this._sizeVal] = value;
    this._sizeVal++;
  },

  pop : function(){
    if (this._sizeVal) {
      var temp = this._storage[this._sizeVal - 1];
      delete this._storage[this._sizeVal - 1];
      this._sizeVal--;
      return temp;
    }
  },

  size : function(){
    return this._sizeVal;
  }
};

