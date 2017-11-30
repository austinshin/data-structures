var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var holder;
    var headNode = list.head;
    if (headNode === null) {
      return null;
    } else if (headNode === list.tail) {
      holder = headNode.value;
      headNode = null;
      list.tail = null;
      return holder;
    } else {
      holder = headNode.value;
      list.head = headNode.next;
      return holder;
    }
  };

  list.contains = function(target) {
    var contain = function(node, target) {
      if (node === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
        return contain(node.next, target);
      }
    };
    return contain(list.head, target);
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
