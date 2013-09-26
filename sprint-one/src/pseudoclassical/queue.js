var Queue = function() {
  this._storage = {};
  this._last = 0;
  this._look = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._last] = value;
  this._last++;
};

Queue.prototype.dequeue = function(){
  if (this._last - this._look) {
    var temp = this._storage[this._look];
    delete this._storage[this._look];
    this._look++;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this._last - this._look;
};

var makeQueue = new Queue();