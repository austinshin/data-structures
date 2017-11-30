var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
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
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
