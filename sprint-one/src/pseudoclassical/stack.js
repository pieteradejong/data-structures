var Stack = function() {
  this._sizeVal = 0;
  this._storage = {};
};

Stack.prototype.push = function(value){
  this._storage[this._sizeVal] = value;
  this._sizeVal++;
};

Stack.prototype.pop = function(){
  if (this._sizeVal) {
    var temp = this._storage[this._sizeVal - 1];
    delete this._storage[this._sizeVal - 1];
    this._sizeVal--;
    return temp;
  }
};

Stack.prototype.size = function(){
  return this._sizeVal;
};

var makeStack = new Stack();