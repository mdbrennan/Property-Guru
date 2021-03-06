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


/**
 * Assumptions:
 * - same as above
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