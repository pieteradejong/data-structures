describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });
  it("should contain a value that is added", function() {
    set.add('hi');
    expect(set.contains('hi')).toEqual(true);
  });

  it("should not contain a value that is added and then removed", function() {
    set.add('hi');
    set.remove('hi');
    expect(set.contains('hi')).toEqual(false);
  });

  it("", function() {
    expect().toEqual();
  });
});