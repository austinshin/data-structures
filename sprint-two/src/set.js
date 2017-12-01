var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add() = O(1)
  contains() = O(1)
  remove() = O(1)
 */


// implementation with arrays
/*
Set() = a data structure that holds unique values, but can hold potentially different types of values.
storage = [] // an array that keeps track of unique values.
Set.add() = //iterate through storage
            //(exists) => don't add to storage.
            //(!exists) => push to storage.
Set.contains() = //iterate through storage
                 //(exists) => output true.
                 //(!exists) => output false.
Set.remove() = //iterate through storage.
               //(exists) => remove it and splice storage accordingly.
               //(!exists) => do nothing.

The difference of creating a set via arrays will result in the functions all being O(n) (linear time).
*/