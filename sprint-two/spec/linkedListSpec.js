describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it ("should return null when trying to remove the head of an empty list", function() {
    expect(linkedList.removeHead()).toEqual(null);
  });

  it("should have the same head and tail after adding a tail to an empty list", function() {
    linkedList.addToTail(85);
    expect(linkedList.head).toEqual(linkedList.tail);
  });

  it("should contain values that exist between the head and tail", function() {
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(30);
    expect(linkedList.contains(10)).toEqual(true);
    expect(linkedList.contains(20)).toEqual(true);
    expect(linkedList.contains(30)).toEqual(true);
  });

  it("should not contain values that were not added", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(5);
    linkedList.addToTail(1000);
    expect(linkedList.contains(4)).toEqual(false);
    expect(linkedList.contains(5)).toEqual(true);
  });

  it("should not contain values that were added and then removed", function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    linkedList.addToTail(1000);
    expect(linkedList.contains(1)).toEqual(false);
    expect(linkedList.contains(1000)).toEqual(true);
  });

  it("should be able to add and then find null values", function() {
    linkedList.addToTail(6);
    linkedList.addToTail(null);
    linkedList.addToTail(90);
    expect(linkedList.contains(null)).toEqual(true);
  });

  it("should not find null values if list doesn't contain them", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(10);
    expect(linkedList.contains(null)).toEqual(false);
  });

  it("should handle integers, strings, booleans, objects and functions", function() {
    var fnc = function () {};
    var obj = {};
    linkedList.addToTail(3);
    linkedList.addToTail("three");
    linkedList.addToTail(true);
    linkedList.addToTail(fnc);
    linkedList.addToTail(obj);
    expect(linkedList.contains(3)).toEqual(true);
    expect(linkedList.contains("three")).toEqual(true);
    expect(linkedList.contains(true)).toEqual(true);
    expect(linkedList.contains(fnc)).toEqual(true);
    expect(linkedList.contains(obj)).toEqual(true);
  });

  /*
  it("", function() {
    expect().toEqual();
  });
  */


});