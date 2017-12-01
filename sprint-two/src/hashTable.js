
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  
};
/*
 Implementation of a hashtable with arrays.
 storage = []. Storage is a limited array that has 'undefined', which will be replaced with nested arrays that hold [key, value] pairings.
      storage = [ ['John', '510-123-3432'] , ['Austin', '512-321-3333'] ] (key = name, value = phone number) ]
 insert: 
1. grab storage array.
2. iterate through storage array to make sure there are no duplicates.
    a. if the index is undefined, create an array and do storage[index] = [k,v]
    a. if there are duplicates => do nothing.
    b. if there are no duplicates and there is a hash table collision do storage[index].push([k,v])

retrieve:
1. grab storage array.
2. iterate through each array (and it's nested array if it exists) until you find target.

remove:
1. retrieve the array.
2. remove the array.
  a. if the index becomes [] set the index to undefined.
  b. else do nothing.
*/
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var storageArr = this._storage.get(index);
  
  if (storageArr === undefined) {
    var emptyArr = [];
    var newArr = [k, v];
    emptyArr.push(newArr);    
    this._storage.set(index, emptyArr);
    return;
  }
  
  for (var i = 0; i < storageArr.length; i++) {
    var stringifiedKey = JSON.stringify(storageArr[i][0]);
    if (stringifiedKey === JSON.stringify(k)) {
      storageArr[i][1] = v;
      return;
    }
  }
  
  storageArr.push([k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);

  if (storageArr !== undefined) {
    for (var i = 0; i < storageArr.length; i++) {
      var stringifiedKey = JSON.stringify(storageArr[i][0]);
      if (stringifiedKey === JSON.stringify(k)) {
        return storageArr[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  if (storageArr === undefined) {
    return;
  }
  for (var i = 0; i < storageArr.length; i++) {
    var stringifiedKey = JSON.stringify(storageArr[i][0]);
    if (stringifiedKey === JSON.stringify(k)) {
      storageArr.splice(i, 1);          
    }
  }
  
  if (storageArr.length === 0) {
    this._storage.set(index, undefined);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(n)
retrieve() = O(n)
remove() = O(n)
 */




// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);  
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
  
//   var retrieve = this._storage.get(index);
//   if (retrieve === undefined) {
//     var newObj = {};
//     newObj[k] = v;
//     this._storage.set(index, newObj);
//   } else {
//     retrieve[k] = v;
//   }
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage.get(index) === undefined) {
//     return undefined;  
//   }
      
  
//   return this._storage.get(index)[k];
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var retrieve = this._storage.get(index);
//   if (retrieve !== undefined) {
//     delete retrieve[k];
//     if (Object.keys(retrieve).length === 0 && retrieve.constructor === Object) {
//       this._storage.set(index, undefined);
//     } 
//   }
// };



/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(1)
retrieve() = O(1)
remove() = O(1)
 */




