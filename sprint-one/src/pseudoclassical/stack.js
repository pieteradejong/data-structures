var Stack = function() {
  this.sizeVal = 0;
};

Stack.prototype.push = function(value){
  this[this.sizeVal] = value;
  this.sizeVal++;
};

Stack.prototype.pop = function(){
  if (this.sizeVal) {
    var temp = this[this.sizeVal - 1];
    delete this[this.sizeVal - 1];
    this.sizeVal--;
    return temp;
  }
};

Stack.prototype.size = function(){
  return this.sizeVal;
};

var makeStack = new Stack();