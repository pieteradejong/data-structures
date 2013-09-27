// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail) {
      list.tail.next = makeNode(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    } else {
      list.tail = makeNode(value);
      list.head = list.tail;
    }
  };

  list.addToHead = function(value){
    if (list.head) {
      list.head.previous = makeNode(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    } else {
      list.head = makeNode(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      var temp = list.head.value;
      if (list.head === list.tail) {list.tail = null; } // in the case where there is only one node in the list
      list.head = list.head.next;
      if (list.head !== list.tail) { list.head.previous = null; }
      return temp;
    } else {
      return null;
    }
  };

  list.removeTail = function(){
    if (list.tail) {
      var temp = list.tail.value;
      if (list.head === list.tail) { list.head = null; } // in the case where there is only one node in the list
      list.tail = list.tail.previous;
      if (list.head !== list.tail) { list.tail.next = null; }
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
  node.previous = null;

  return node;
};
