var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) { this.parent.children[i] = undefined; }
  }
  this.parent = null;
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