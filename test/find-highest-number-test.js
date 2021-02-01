var assert = require("chai").assert;
var expect = require("chai").expect;

// Put your CUT here
class SortList 
{
    findHighestNumber( numberArray )
    {
        //if (numberArray.length = 1)
            //var result = numberArray[0];

      // if (numberArray.length > 1){
        numberArray.sort(function(a, b){return b - a});
            var result = numberArray[0];
      // }
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
    it(`return highest value in two-element array, higher value first element`, function() {
        //arrange
        var cut = new SortList();
        var expectedResult = 13;
        var higherFirst = [13,4];

        //act
        var actualResult = cut.findHighestNumber(higherFirst);

        //assert
        expect(actualResult, "first element being the high value doesn't return").to.equal(expectedResult);
   
    });
    it(`return highest value in two-element array, lower value first element`, function() {
        //arrange
        var cut = new SortList();
        var expectedResult = 13;
        var lowerFirst = [7,13];

        //act
        var actualResult = cut.findHighestNumber(lowerFirst);

        //assert
        expect(actualResult, "second element being the high value doesn't return").to.equal(expectedResult);
    
    });
    it(`Return highest element of larger list`, function() {
        //arrange
        var cut = new SortList();
        var expectedResult = 11;
        var largeArray = [4, 5, -8, 3, 11, -21, 6];

        //act
        var actualResult = cut.findHighestNumber(largeArray);

        //assert
        expect(actualResult, "Highest number not returned").to.equal(expectedResult);
    
    });
});