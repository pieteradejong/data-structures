// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail) {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    } else {
      list.tail = makeNode(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var temp = list.head.value;
      if (list.head === list.tail) {list.tail = null;} // in the case where there is only one node in the list
      list.head = list.head.next;
      return temp;
    } else {
      return null;
    }
  };

  list.contains = function(target){
    if (list.head) {
      var current = list.head;
      do {
        if (current.value === target) {
          return true;
        }
        current = current.next;
      } while (current !== null);
      return false;
    } else { return false; }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
