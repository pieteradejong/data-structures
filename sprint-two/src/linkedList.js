// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null) { return list.head = makeNode(value); }
    currentNode = list.head;
    nodeNumber = 0;
    while(currentNode.next) {
      var currentNode = currentNode.next;
      nodeNumber++;
    }
    var newNode = makeNode(value);
    currentNode.next = list[nodeNumber];
  };

  list.removeHead = function(){
    if(list.head === null) { return undefined; }
    var head = list.head;
    delete list[]; // ???
    return head;
  };

  list.contains = function(value){
    if(list.head === null) { return false; }
    currentNode = list.head;
    while(currentNode.next) {
      if (currentNode.value === value) {return true; }
      var currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
