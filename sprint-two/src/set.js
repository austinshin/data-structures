var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      storage.splice(i, 1);
    }
  } 
};

/*
  
  Complexity: What is the time complexity of the above functions?
  add() = O(n) -- (best case its constant)
  contains() = O(n) -- (best case its constant)
  remove() = O(n) -- (best case its constant)
 
*/