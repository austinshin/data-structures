var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  var lowestCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    size++;
  };

  someInstance.dequeue = function() {
    var holder;
    if (size !== 0) {
      holder = storage[lowestCount];
      delete storage[lowestCount];
      lowestCount++;
      size--;
    }
    return holder;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
