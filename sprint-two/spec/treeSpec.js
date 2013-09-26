describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should contain an added value", function() {
    tree.addChild(5);
    expect(tree.contains(5)).toEqual(true);
  });


  it("should be able to create a nested tree", function() {
    tree.addChild(5);
    tree.addChild(10);
    tree.addChild(15);
    tree.children[0].addChild(3);
    tree.children[0].addChild(33);
    tree.children[0].children[1].addChild(100);

    expect(tree.contains(100)).toEqual(true);
    expect(tree.children[0].contains(100)).toEqual(true);
    expect(tree.children[0].children[1].contains(100)).toEqual(true);
    expect(tree.children[0].children[1].children[0].contains(100)).toEqual(true);

    expect(tree.children[2].contains(100)).toEqual(false);
    expect(tree.children[0].children[0].contains(100)).toEqual(false);
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

  it("", function() {
    expect(tree.addChild()).toEqual();
  });

});