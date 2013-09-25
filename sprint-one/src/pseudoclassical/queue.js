var Queue = function() {
  this.last = 0;
  this.look = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function(){
  if (this.last - this.look) {
    var temp = this[this.look];
    delete this[this.look];
    this.look++;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this.last - this.look;
};

var makeQueue = new Queue();