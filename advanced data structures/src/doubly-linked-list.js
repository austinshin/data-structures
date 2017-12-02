var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(val) {
  var dNode = new dLNode(val);
  if (this.tail !== null) {
    dNode.prev = this.tail;
    this.tail.next = dNode;
    this.tail = dNode;
  } else {
    this.head = dNode;
    this.tail = dNode;
  }
};

DoublyLinkedList.prototype.contains = function(val) {
  var contain = function(dNode, target) {
    if (dNode === null) {
      return false;
    } else if (dNode.value === target) {
      return true;
    } else {
      return contain(dNode.next, target);
    }
  };
  return contain(this.head, val);
};

DoublyLinkedList.prototype.removeHead = function() {
  var ret = null;
  if (this.head && this.head.next) {
    ret = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
  } else if (this.head !== null) {
    ret = this.head.value;
    this.head = null;
    this.tail = null;
  }
  return ret;
};

DoublyLinkedList.prototype.addToHead = function(val) {
  var dNode = new dLNode(val);
  if (this.head) {
    dNode.next = this.head;
    this.head.prev = dNode;
    this.head = dNode;
  } else {
    this.head = dNode;
    this.tail = dNode;
  }
  
};

DoublyLinkedList.prototype.removeTail = function() {
  var ret;
  if (this.tail && this.tail.prev) {
    ret = this.tail.value;
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  } else {
    ret = this.head.value;
    this.head = null;
    this.tail = null;
  }
  return ret;
};

var dLNode = function(value) {
  this.prev = null;
  this.value = value;
  this.next = null;
};

/*
  Time complexity of functions implemented:
  addToTail() = O(1)
  contains() = O(n)
  removeHead() = O(1)
  addToHead() = O(1)
  removeTail() = O(1)
*/

//implement insert(value, index)
// would be linear (same as singly linked lists)
