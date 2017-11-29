var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeTracker = 0;
  this.count = 0;
  this.lowestCount = 0;
};



Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  this.sizeTracker++;
};

Queue.prototype.dequeue = function() {
  var holder;
  if (this.sizeTracker !== 0) {
    holder = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    this.sizeTracker--;
  }
  return holder;
};

Queue.prototype.size = function() {
  return this.sizeTracker;
};