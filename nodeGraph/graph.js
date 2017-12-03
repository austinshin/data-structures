

// Instantiate a new graph
var Graph = function() {
  this.nodes = []; //these are GraphNode objects that hold values
  this.edges = []; //these are pairings of arrays
};
module.exports = Graph;
var GraphNode = function(value) {
  this.value = value;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);  
    }
  }
  
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === node || this.edges[i][1] === node) {
      this.edges.splice(i, 1);
    }
  }

  /* 
  pseudocode for potentially different solution for edges
  create new array
  search for elements in this.edges 
  if it matches the node value, don't add it. 
  if it doesn't match the node value, add it to new array.
  set edges to new array.
  return new array.
  */
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edge1 = JSON.stringify([fromNode, toNode]);
  var edge2 = JSON.stringify([toNode, fromNode]);
  
  for (var i = 0; i < this.edges.length; i++) {
    if (JSON.stringify(this.edges[i]) === edge1 || JSON.stringify(this.edges[i]) === edge2) {
      return true;  
    } 
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode) && this.contains(fromNode) && this.contains(toNode)) {
    var edge1 = [fromNode, toNode];
    this.edges.push(edge1);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edge1 = JSON.stringify([fromNode, toNode]);
  var edge2 = JSON.stringify([toNode, fromNode]);
  for (var i = 0; i < this.edges.length; i++) {
    if (JSON.stringify(this.edges[i]) === edge1 || JSON.stringify(this.edges[i]) === edge2) {
      this.edges.splice(i, 1);  
    }
  } 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value); 
  }
};

/*
 * Complexity: What is the time complexity of the above functions?


hasEdge() = O(n)          can improve it to O(1) if we used a map/object data structure
addEdge() = O(n)          can improve it to O(1) if we used a map/object data structure
removeEdge() = O(n)       can improve it to O(1) if we used a map/object data structure   
forEachNode() = O(n)
*/

