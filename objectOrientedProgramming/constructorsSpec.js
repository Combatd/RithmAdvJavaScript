beforeEach(function() {
    let sakuraMiko = new Person('Miko', 'Sakura', 'Pink', 2);
});


describe("Person", function () {
    it("has a firstName", function () {
        expect(sakuraMiko.hasOwnProperty('firstName')).toEqual(true);
    });
    it("has a lastName", function () {
        expect(sakuraMiko.hasOwnProperty('lastName')).toEqual(true);
    });
    it("has a favoriteColor", function () {
        expect(sakuraMiko.hasOwnProperty('favoriteColor')).toEqual(true);
    });
    it("has a favoriteNumber", function () {
        expect(sakuraMiko.hasOwnProperty('favoriteNumber')).toEqual(true);
    });
});