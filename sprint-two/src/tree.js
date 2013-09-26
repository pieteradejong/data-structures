var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  if (this.value === value) {
    return true;
  } else if (this.children.length === 0) {
    return false;
  } else {
    var result = false;
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(value);
    }
    return result;
  }
};
