// describe("onlyStrings", function () {
//     it("returns an array", function () {
//         expect(onlyStrings([1, 2, 3])).toEqual(jasmine.any(Array));
//     });
//     it("does not change arrays of strings", function () {
//         expect(onlyStrings(["a", "b", "c"])).toEqual(["a", "b", "c"]);
//     });
//     it("removes non-string primitives from an array", function () {
//         expect(onlyStrings([1, "hi", null, "cool", undefined, "woah", false, "ok"])).toEqual(["hi", "cool", "woah", "ok"]);
//     });
//     it("removes reference types from an array", function () {
//         expect(onlyStrings([{}, "a", [], "b", function () { }, "c"])).toEqual(["a", "b", "c"]);
//     });
// });

/*
Write a function called replaceWith that takes in a string, 
a character to replace and a character to replace it with 
and returns the string with the replacements. 
Write tests to make sure this is case sensitive
*/


describe('#replaceWith', () => {
    
    it('returns a string with the replacements', () => {
        expect(replaceWith("awesome", "e", "z")).toEqual("awzsomz");
    });

    it('returns a string without changing capitalization (case sensitive)', () => {
        expect(replaceWith('Foo', 'F', 'B')).toEqual('Boo');
    });
});

describe('#expand', () => {

    it('returns a copy of the array with as many numbers as specified', () => {
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(['foo', 'test'],1)).toEqual(['foo', 'test']);
    });
});