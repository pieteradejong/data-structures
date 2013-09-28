describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should contain values that were inserted", function() {
    binarySearchTree.insert(10);
    expect(binarySearchTree.contains(10)).toEqual(true);
  });

  it("should contain modified values", function() {
    var test = [];
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(12);
    expect(binarySearchTree.contains(10)).toEqual(true);
    binarySearchTree.depthFirstLog(function(i) {test.push(i);} );
    expect(test).toEqual([5,10,12]);
  });

  // it("should contain values that were inserted", function() {
  //   binarySearchTree.insert(10);
  //   expect(binarySearchTree.contains(10)).toEqual(true);
  // });
});