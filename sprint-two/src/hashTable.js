
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
  var bucket = this._storage.get(index);
  
  if (bucket === undefined) {
    var emptyArr = [];
    var newArr = [k, v];
    emptyArr.push(newArr);    
    this._storage.set(index, emptyArr);
    if (this.isAboveSeventyFive()) {
      this.resize(true);
    }
  //if we're above 75% we call resize, above
    return;
  }
  
  for (var i = 0; i < bucket.length; i++) {
    var stringifiedKey = JSON.stringify(bucket[i][0]);
    if (stringifiedKey === JSON.stringify(k)) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var stringifiedKey = JSON.stringify(bucket[i][0]);
      if (stringifiedKey === JSON.stringify(k)) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    var stringifiedKey = JSON.stringify(bucket[i][0]);
    if (stringifiedKey === JSON.stringify(k)) {
      bucket.splice(i, 1);          
    }
  }
  
  if (bucket.length === 0) {
    this._storage.set(index, undefined);
  }
  
  // if we're below 25% resize
  if (this._limit > 8) {
    if (this.isBelowTwentyFive()) {
      this.resize(false);
    }
  }

};

HashTable.prototype.isAboveSeventyFive = function() {
  var count = 0;
 
  this._storage.each(function(bucket, i, storage) {
    if (bucket === undefined) {
    } else {
      for (var j = 0; j < bucket.length; j++) {
        count++;
      }
    }
  });
  if (count >= (this._limit * 3 / 4)) {
    return true;
  }
  return false;
};

HashTable.prototype.isBelowTwentyFive = function() {
  var count = 0;
  this._storage.each(function(bucket, i, storage) {
    if (bucket !== undefined) {
      count++;
    }
  });
  if (count <= (this._limit * 1 / 4)) {
    return true;
  }
  return false;
};



HashTable.prototype.resize = function(above) {
  var tempLimit;
  if (above) {
    tempLimit = this._limit * 2;
  } else {
    tempLimit = this._limit / 2;
  }
  var resizedLimitedArr = LimitedArray(tempLimit); // new limited arr
  var tempPointer = this._storage;                 // old limited arr
  this._storage = resizedLimitedArr;               // set storage to new limited arr
  this._limit = tempLimit;
  tempPointer.each(function(bucket, i, storage) {   // add old buckets to new storage
    if (bucket === undefined) {
    } else {
      for (var j = 0; j < bucket.length; j++) {
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }.bind(this));
  
  // reassign new limit to old limit
  // 1. create a new limited Array of this new limit.
  // 2. use the hashtablehelpers.foreach to iterate
  // 3. call insert on each one ON THE NEW LIMITED ARRAY
  // 4. reassign storage to NEW LIMITED ARRAY
};

/*
 * Complexity: What is the time complexity of the above functions?
insert() = O(n)
retrieve() = O(n)
remove() = O(n)
 */




