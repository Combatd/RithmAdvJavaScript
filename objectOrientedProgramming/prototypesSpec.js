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