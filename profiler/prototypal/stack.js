var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackInstance = Object.create(stackMethods);
  stackInstance.sizeTracker = 0;
  stackInstance.storage = {};

  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.sizeTracker++;
  this.storage[this.sizeTracker] = value;
  
};

stackMethods.pop = function() {
  var holder;
  if (this.sizeTracker !== 0) {
    var holder = this.storage[this.sizeTracker];
    delete this.storage[this.sizeTracker];
    this.sizeTracker--;
  }
  return holder;
};

stackMethods.size = function() {
  return this.sizeTracker;
};