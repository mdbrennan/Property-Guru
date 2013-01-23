/*********************************

Matthew Brennan
Front End Engineering Javascript Test


*********************************/



/**
* Example Unit Testing
* - Expected result passed through and matched against actual result.
* - pass or fail
*/

function assertEquals(expected, input) {
    if(expected != input) {
        throw "Test failed - expected: " + expected + ", got: " + input;
    } else {
        console.log("Test passed!");
    }
}


/**
 * Assumptions:
 * - range could be in any order, not necessarily sorted ascending
 * - series can be [0..n], not just including values provided as input
 */
 
function fizzbuzz(range) {
    var output = [];
    range.forEach(function(number) {
        if(number%3 == 0 && number%5 == 0) {
            output.push("FizzBuzz");
        } else if(number%3 == 0) {
            output.push("Fizz");
        } else if(number%5 == 0) {
            output.push("Buzz");
        } else {
            output.push(number); 
        }
    });
    output = output.join(" ");
    console.log(output);
    return output;
}


assertEquals("Fizz 13 14 FizzBuzz 16", fizzbuzz([12, 13, 14, 15, 16]));
