var Tree = function(value) {
  var newTree = {};

  // Added this line for the added test to check if the instance was created with this function due to functional pattern.
  newTree.constructor = Tree;
  newTree.value = value;
  newTree.children = [];  
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var contains = false;
  var contain = function(tree, target) {
    if (tree.value === target) {
      contains = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        contain(tree.children[i], target);
      }
    }
  };
  contain(this, target);
  return contains;  
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  if (parent === null) {
    return;
  }
  for (var i = 0; i < parent.children.length; i++) {
    if (this === parent.children[i]) {
      parent.children.splice(i, 1);
      parent = null;
      return;
    }
  }
};

treeMethods.traverse = function(callback) {
  if (this.value === undefined && this.children.length === 0) {
    return;
  }
  if (this.value !== undefined) {
    callback(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.traverse.call(this.children[i], callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild() = O(1)
contains() = O(n) -- (best case O(1) find it in the parent tree) 
removeFromParent() = O(n)
traverse() = O(n)
*/
