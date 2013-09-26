var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(str){
    this[str] = true;
};

setPrototype.contains = function(str){
  return !!this[str];
};

setPrototype.remove = function(str){
  if (this[str]) {
    delete this[str];
  }
};
