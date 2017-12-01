describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add different instances of the same array to a set', function() {
    var arr = [1, 2, 3];
    var arr2 = [1, 2, 3];
    set.add(arr);
    set.add(arr2);
    expect(set.contains(arr2)).to.equal(true);
  });

  it('should add different instances of the same object to a set', function() {
    var obj1 = {x: 1};
    var obj2 = {x: 1};
    set.add(obj1);
    set.add(obj2);
    expect(set.contains(obj2)).to.equal(true);
  });
  
});
