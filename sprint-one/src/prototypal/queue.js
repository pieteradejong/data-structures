var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance._storage = {};
  instance._last = 0;
  instance._look = 0;
  return instance;
};

var queueMethods = {
  enqueue : function(value){
    this._storage[this._last] = value;
    this._last++;
  },

  dequeue : function(){
    if (this._last - this._look) {
      var temp = this._storage[this._look];
      delete this._storage[this._look];
      this._look++;
      return temp;
    }
  },

  size : function(){
    return this._last - this._look;
  }
};

