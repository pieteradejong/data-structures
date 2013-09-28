var makeBinarySearchTree = function(val){
  var tree = {};
  tree.parent = null;
  tree.left = null;
  tree.right=null;
  tree.value = val || null;
  for (var prop in binarySearchTreeProperties) {
    tree[prop] = binarySearchTreeProperties[prop];
  }
  return tree;
};

var binarySearchTreeProperties = {};

binarySearchTreeProperties.insert = function(val) {

  // In the case where the root node is empty
  if (this.value === null) { this.value = val; }

  // After initializing the root node
  else if (val < this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(val);
      this.left.parent = this;
    } else { this.left.insert(val); }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = makeBinarySearchTree(val);
      this.right.parent = this;
    } else { this.right.insert(val); }
  }
};

binarySearchTreeProperties.contains = function(target) {
  if (this.value === target){ return true; }
  else if (target < this.value) {
    if (this.left !== null) { return this.left.contains(target); }
  } else {
    if (this.right !== null) { return this.right.contains(target); }
  }
  return false;
};

binarySearchTreeProperties.depthFirstLog = function(callback) {
  this.left !== null && this.left.depthFirstLog(callback);
  callback(this.value);
  this.right !== null && this.right.depthFirstLog(callback);
};

binarySearchTreeProperties.breadthFirstLog = function(callback) {
  var q = newQueue();
  q.enqueue(this);

  while(q.size()) {
    var item = q.dequeue();
    callback(item.value);
    item.left && q.enqueue(item.left);
    item.right && q.enqueue(item.right);
  }

};





