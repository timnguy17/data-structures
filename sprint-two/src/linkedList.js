var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tailNode = Node(value);

    if (list.head === null && list.tail !== null) {
      list.head = list.tail;
    }
    list.tail = tailNode;

  };

  list.removeHead = function() {
    var temp = list.head;
    if (list.head !== null) {
      temp = list.head.value;
    }

    if ( list.head === null) {
      var temp = list.tail.value;
      list.tail = null;
      return temp;
    }

    list.head = list.tail;
    list.tail = null;
    return temp;
  };

  list.contains = function(target) {
    if ((list.head !== null && list.head.value === target) || (list.tail !== null && list.tail.value === target)) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
