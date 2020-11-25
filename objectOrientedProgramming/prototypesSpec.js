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
        expect(p1.family).toExist();
        expect(Array.isArray(p1.family).toEqual(true));
        expect(p1.family.length).toEqual(0);
    });
  });