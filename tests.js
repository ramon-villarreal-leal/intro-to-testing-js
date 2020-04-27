// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function () {
    it('it should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed',function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function (){
        expect(sayHello(false)).toBe("Hello, World!");
    });

});

describe("isFive", function() {
    it('it should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('it should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('it should return true when isFive is passed 5', function () {
        expect(isFive(5)).toBe("5");
    });
});

describe("isEven", function() {
    it('it should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
});

describe('isVowel', function() {
    it('it should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('It should return a string when called', function() {
        expect(typeof isVowel).toBe('string');
    });
});

describe('add', function() {
    it('it should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
});


// describe("isNumeric", function () {
//     it("should be a defined function", function () {
//         expect(typeof isNumeric)
//     ).toBe("function");
// });
// it("should return a boolean value when called", function () {
//     expect(typeof isNumeric()).toBe("boolean");
// });
// it("should return true when passed the number 5", function () {
//     expect(typeof isNumeric(5)).toBe("true");
// });
// it("should return false when passed the string 'Jim Henson", function () {
//     expect(isNumeric("Jim Henson")).toBe(false);
// });
// })
// ;