var assert = require("chai").assert;
var expect = require("chai").expect;

// Put your CUT here
class SortList 
{
    findHighestNumber( numberArray )
    {
        var result = numberArray[0];

        return result;
    }
}

describe('find the highest number', function() {
    it('single item in array, return that item', function() {
        // arrange...
        var cut = new SortList();
        var expectedResult = 1;
        var singleElement = [1];

        // act...
        var actualResult = cut.findHighestNumber(singleElement);

        // assert...
        expect(actualResult).to.equal(expectedResult);

    });
    it()
});