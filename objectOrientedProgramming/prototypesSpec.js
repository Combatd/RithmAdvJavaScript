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
        expect(Array.isArray(p1.family).toEqual(true));
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
  