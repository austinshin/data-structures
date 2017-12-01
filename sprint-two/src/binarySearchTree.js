var BinarySearchTree = function(value) {

  var BST = Object.create(BinarySearchTreeMethods);

  BST.value = value;
  BST.left = null;
  BST.right = null;

  return BST;
};
 
var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(val) {
  if (this.value > val) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

BinarySearchTreeMethods.contains = function(val) {
  if (this.value === val) {
    return true;  
  } 
  if (this.value > val && this.left !== null) {
    return this.left.contains(val);
  } else if (this.value < val && this.right != null) {
    return this.right.contains(val);
  }
  return false;
  
};

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  
  if (this.left !== null) {
    this.left.depthFirstLog(callback);  
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(log(n))
contains() = O(log(n))
depthFirstLog() = O(log(n))

 */
