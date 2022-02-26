var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tailNode = new Node(value); // {'value': 4, 'next': null}
    list.tail = tailNode;
    if (list.head === null) {
      list.head = tailNode;
    }
  };

  list.removeHead = function() {
    let deletedVal = list.head.value;
    list.head.value = list.tail.value;
    list.tail.value = null;
    return deletedVal;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      return false;
    }
  };

  console.log(list);
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node; // {'value': 4, 'next': null}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
