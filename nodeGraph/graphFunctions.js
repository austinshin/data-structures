var graphModule = require('./graph.js');
// this line lets you access the file system. You'll learn more about it later in the course
var fs = require('fs');

// read the `adjacency-list` file in this directory (you might have named the file differently) and 
// split it on new lines into an array
var fileLines = fs.readFileSync('./directedgraph.txt').toString().split('\n');

// you may have to do this 0 or more times, to remove blank lines from fileLines
fileLines.pop();

var graph = new graphModule();
var numOfNodes = 0;

fileLines.forEach(function(line) {
// here you have access to each line of the adjacency list
console.log(line);
});

var addNodes = function() {
  fileLines.forEach(function(line) {
    graph.addNode(line[0]);
    numOfNodes += 1;
  });
};

var getNumOfNodes = function () {
  console.log("Number of nodes in graph: " + numOfNodes);
  return numOfNodes;
};

var addEdges = function() {
  fileLines.forEach(function(line) {
    var splited = line.split(' ');
    for (var i = 1 ; i < splited.length; i++) {
      graph.addEdge(splited[0], splited[i]);
    }
  });
};

var depthFirstSearch = function() {

};

addNodes();
getNumOfNodes();
addEdges();





// console.log(graph.contains(5));
// console.log(graph.addNode(5));
// console.log(graph.contains(5));



