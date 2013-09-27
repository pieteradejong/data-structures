  var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  var temp = this._storage.get(i);
  if (!temp) { temp = []; }
  temp.push([k, v]);
  this._storage.set(i, temp);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  for (var j = 0; j < temp.length; j++) {
    if(temp[j][0] === k) { return temp[j][1]; }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  var targetFound = false;
  for (var j = 0; j < temp.length; j++) {
    if(temp[j][0] === k) {
      targetFound = true;
    }
    if (targetFound && j < temp.length - 1) {
      temp[j] = temp[j+1].slice();
    } else if (targetFound && j === temp.length - 1) {
      temp.pop();
    }
  }
  this._storage.set(i, temp);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
