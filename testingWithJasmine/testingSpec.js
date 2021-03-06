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

/*
Write a function called acceptNumbersOnly which takes in any number of arguments 
and returns true if all of them are numbers. 
Watch out for NaN - it is a typeof "number"!
*/

describe('#acceptNunbersOnly', () => {
    it('takes in any number of arguments and returns true if all of them are numbers', () => {
        expect(acceptNumbersOnly(1, "foo")).toEqual(false);
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toEqual(true);
    });

    it('returns false when NaN is an argument', () => {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(false);
    });
});

describe('#mergeArrays', () => {
    it('takes in two arrays and returns one array', () => {
        expect(mergeArrays([1], [2])).toEqual([1, 2]); 
    });

    it('returns one array with the values sorted', () => {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
    });
});

/*
Write a function called mergeObjects which takes in two objects 
and return an object with the keys and values combined. 
If the second parameter has the same key - it should override first one. 
There is a built in function called Object.assign - 
research it, but do not use it, try to do this on your own!
*/

describe('#mergeObjects', () => {
    it('takes in two objects and returns a object with the keys and values combined', () => {
        expect(mergeObjects(
            {
                name: "Foo",
                num: 33
            }, 
            {
                test: "Bar"
            }
        ))
        .toEqual(
            {
                name: "Foo",
                num: 33,
                test: "Bar"
            }
        )
    });

    it('reassigns the values of keys that both objects share to the second object key value pairs', () => {
        expect(mergeObjects(
            {
                name: "Foo",
                num: 33
            },
            {
                test: "thing",
                num: 55
            }
        ))
        .toEqual(
            {
                name: "Foo",
                num: 55,
                test: "thing"
            }
        )
    });
});