describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // ADDED TESTS
  
  it('ADDED TEST: its children should be instances of Tree', function() {
    tree.addChild(5);
    tree.addChild(6);
    expect(tree.children[0].constructor.name).to.equal('Tree');
    expect(tree.children[1].constructor.name).to.equal('Tree');
  });

  it('ADDED TEST: should have correct parents and should remove its parents properly', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(5);
    tree.addChild(1);
    expect(tree.children[0].parent).to.equal(tree);
    tree.children[0].addChild(2);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children.length).to.equal(0);
  });

  it('ADDED TEST: should run callback on all values when using traverse()', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(7);
    tree.children[0].addChild(8);
    tree.traverse(func);
    expect(array).to.eql([2, 8, 3, 7]);
  });

});
