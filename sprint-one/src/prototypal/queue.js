var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.sizeTracker = 0;
  queueInstance.count = 0;
  queueInstance.lowestCount = 0;

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  this.sizeTracker++;
};

queueMethods.dequeue = function() {
  var holder;
  if (this.sizeTracker !== 0) {
    holder = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    this.sizeTracker--;
  }
  return holder;
};

queueMethods.size = function() {
  return this.sizeTracker;
};