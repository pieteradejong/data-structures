var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(val){
  if(typeof val === 'string') { this[val] = true; }
};

setPrototype.contains = function(val){
  return !!this[val];
};

setPrototype.remove = function(val){
  delete this[val];
};
