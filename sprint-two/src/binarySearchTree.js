var BinarySearchTree = function(value) {

  var BST = Object.create(BinarySearchTreeMethods);
  
  BST.value = value;
  BST.left = null;
  BST.right = null;
  BST.depth = 1;
  

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
  BreadthFirstSearch Description:
    Create an output array
    Create a tracker Queue which holds BSTs
    If the given BST is null do nothing. 
    Add the BST.value to the output array and queue.
    Create a loop that will keep running until queue is empty.
    In the loop, dequeue the first BST of the queue.
    Check the left of the dequeued value. Add it to the queue and output if it exists
    Check the right of the dequeued value. Add it to the queue and output if it exists.
    After the loop finishes, invoke callback on the output array.
*/

BinarySearchTreeMethods.breadthFirstLog = function(callback) {
  var output = [];
  var tracker = new Queue();
  if (this.value === null) {
    // do nothing
    return;
  }

  output.push(this.value);
  tracker.enqueue(this);
  
  while (tracker.size() !== 0) {
    var popTree = tracker.dequeue();
    if (popTree.left !== null) {
      tracker.enqueue(popTree.left);
      output.push(popTree.left.value);
    }
    if (popTree.right !== null) {
      tracker.enqueue(popTree.right);
      output.push(popTree.right.value);
    }
  }
  for (var i = 0; i < output.length; i++) {
    callback(output[i]);
  }
  

};



/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(log(n))
contains() = O(log(n))
depthFirstLog() = O(log(n))
breadthFirstLog() = O(n)
 */
