//functional
//functional-shared
//prototypal
//pseudoclassical

// var stackArr = [];
// var queueArr = [];

/*
FUNCTIONAL PATTERN
For each stack we create in functional pattern, we will create 3 instances of methods.
If we create a 1000 instantiations, we create 3000 functions.
*/

/*
  Use code below for FUNCTIONAL PATTERN, FUNCTIONAL-SHARED, PROTOTYPAL
*/

for (var i = 0; i < 1000; i++) {
  var stack = new Stack();
  // stackArr.push(stack);
  stack.push(1);
  stack.size();
  stack.pop();
  var queue = new Queue();
  // queueArr.push(queue);
  queue.enqueue(1);
  queue.size();
  queue.dequeue();
}

/*
  Use code below for PSEUDOCLASSICAL
*/

// for (var i = 0; i < 1000; i++) {
  
//   var stack = new Stack();
//   stackArr.push(stack);
//   stack.push(1);
//   stack.size();
//   stack.pop();
//   var queue = new Queue();
//   queueArr.push(queue);
//   queue.enqueue(1);
//   queue.size();
//   queue.dequeue();

// }