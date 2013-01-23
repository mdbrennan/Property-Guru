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
 
 
function fizzbuzzbazz(range) {
    var conseq = 0;
    var output = [];
    for(var i=0; i < range.length; i++) {
        var number  = range[i];
        var printed = false;
        if(number%3 == 0) {
            output.push("Fizz");
            printed = true;
            conseq++;
        }
        if(number%5 == 0) {
            output.push("Buzz");
            printed = true;
            conseq++;
        }
        if(!printed) {
            if(conseq == 2) {
                output.push("Bazz");
            } else {
                output.push(number);
            }
            conseq = 0;
        }
    }
    output = output.join(" ");
    console.log(output);
    return output;
}

assertEquals("4 Buzz Fizz Bazz 8 Fizz Buzz Bazz", fizzbuzzbazz([4, 5, 6, 7, 8, 9, 10, 11]));