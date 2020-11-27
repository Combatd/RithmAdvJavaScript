let person;

beforeEach(function(){
    person = new Person("Miko", "Sakura", "pink", 18);
})

describe("Person", function(){
    it("has a firstName property", function(){
      expect(person.hasOwnProperty("firstName")).toEqual(true);
    });
    it("has a lastName property", function(){
      expect(person.hasOwnProperty("lastName")).toEqual(true);
    });
    it("has a favoriteColor property", function(){
      expect(person.hasOwnProperty("favoriteColor")).toEqual(true);
    });
    it("has a favoriteNumber property", function(){
      expect(person.hasOwnProperty("favoriteNumber")).toEqual(true);
    });
    it("has a favoriteFoods property", function(){
      expect(person.hasOwnProperty("favoriteFoods")).toEqual(true);
      expect(person.favoriteFoods).toEqual([]);
    });
  });

  describe('#fullName', () => {
    it('returns firstName concatenated with the lastName', () => {
        expect(person.fullName()).toEqual('Miko Sakura');
    });
  });

  describe('family', () => {
    let p1, p2;
    beforeEach(() => {
        p1 = new Person();
        p2 = new Person();
    });

    it('is initialized as an empty array on the Person object', () => {
        expect(p1.family).toBeDefined();
        expect(Array.isArray(p1.family)).toEqual(true);
        expect(p1.family.length).toEqual(0);
    });
  });

  describe('#addToFamily', () => {
    var p1, p2;
    beforeEach(() => {
      p1 = new Person()
      p2 = new Person()
    });

    it("is not shared amongst all objects created from the Person constructor", () => {
      p1.addToFamily(p1);
      expect(p2.family.length).toEqual(0);
    });

    it("adds a new person to the family array ONCE", () => {
      person.addToFamily(p1);
      person.addToFamily(p1);
      person.addToFamily(p1);
      expect(person.family.length).toEqual(1);
    });

    it("only adds objects created from the Person constructor to the array", () => {
      person.addToFamily(p1);
      person.addToFamily("test");
      person.addToFamily({});
      person.addToFamily([]);
      person.addToFamily(false);
      expect(person.family.length).toEqual(1);
    });
  });

  describe("#toString", () => {
    var p1 = new Person("Marine", "Honshou", "Red", 17);

    it("is shared amongst all objects created from the Person constructor", () => {
      expect(p1.hasOwnProperty('toString')).toEqual(false);
      expect(Person.prototype.toString).toBeDefined();
    });
  
    it("returns all the info about the Person", () => {
      expect(p1.toString()).toEqual("Marine Honshou, Favorite Color: Red, Favorite Number: 17");
    });
  
  });
  
describe("Array.prototype.myMap", function(){
  var arr = [1,2,3,4]
  it("returns a new array of values with a callback run on each value", function(){
    expect(arr.myMap(v => v*2)).toEqual([2,4,6,8])
  });
  it("allows access to the index as a second parameter", function(){
    expect(arr.myMap((v,i) => i*2)).toEqual([0,2,4,6])
  });
  it("allows access to the array as the third parameter", function(){
    expect(arr.myMap((v,i,a) => a.length)).toEqual([4,4,4,4])
  });
});

describe("Array.prototype.myReduce", function(){
  var arr = [1,2,3,4]
  it("adds numbers without an initial value", function(){
    expect(arr.myReduce((acc,v) => acc+v)).to.equal(10)
  });
  it("adds numbers with an initial value", function() {
    expect(arr.myReduce((acc,v) => acc+v, 10)).to.equal(20)
  })
  it("has an index as the 3rd parameter", function() {
    expect(arr.myReduce((acc,v, i) => i === 3 ? "blah": null, 10)).to.equal("blah")
  })
  it("has an index array as the 4th parameter", function() {
    expect(arr.myReduce((acc,v, i, arr) => arr.length, 10)).to.equal(4)
  })
  it("can return any type of data", function() {
    var init = {name: "Tim", age: "33", numbers: []};
    var res = arr.myReduce((acc,v, i, arr) => {
      acc.numbers.push(v);
      return acc;
    }, init);
    expect(res).toEqual(init)
    expect(res.numbers).toBe("array");
    expect(res.numbers).toEqual(init.numbers);
    expect(res.numbers.length).toEqual(4);
    expect(res.numbers).toEqual(arr);
  })

});