var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeTracker = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.sizeTracker++;
  this.storage[this.sizeTracker] = value;
  
};

Stack.prototype.pop = function() {
  var holder;
  if (this.sizeTracker !== 0) {
    var holder = this.storage[this.sizeTracker];
    delete this.storage[this.sizeTracker];
    this.sizeTracker--;
  }
  return holder;
};

Stack.prototype.size = function() {
  return this.sizeTracker;
};