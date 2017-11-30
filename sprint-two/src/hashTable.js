

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var retrieve = this._storage.get(index);
  if (retrieve === undefined) {
    var newObj = {};
    newObj[k] = v;
    this._storage.set(index, newObj);
  } else {
    retrieve[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;  
  }
      
  
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieve = this._storage.get(index);
  if (retrieve !== undefined) {
    delete retrieve[k];
    if (Object.keys(retrieve).length === 0 && retrieve.constructor === Object) {
      this._storage.set(index, undefined);
    } 
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(1)
retrieve() = O(1)
remove() = O(1)
 */


