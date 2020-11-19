// describe "Earth"
// it "is round"
// it "is the third planet from the sun"
// it "is the densest of all the planets"

let earth = {
    isRound: true,
    numberFromSun: 3,
    density: 5.51
};

// describe "Earth"
// it "is round"
// expect(earth.isRound).toEqual(true)
// it "is the third planet from the sun"
// expect(earth.numberFromSun).toEqual(3)
// it "is the densest of all the planets"
// expect(earth.density).toBeGreaterThan(5.51)

describe("Earth", () => {
    it("is around", () => {
        expect(earth.isRound).toEqual(true);
    });

    it("is the third planet from the sun", () => {
        expect(earth.numberFromSun).toEqual(3);
    });

    it("is the densest of all the planets", () => {
        expect(earth.density).toBeGreaterThan(5.5);
    });
});