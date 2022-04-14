
/* write a program that prints the numbers from 1-100. But for multiples of 3 print "Fizz" instead the number 
   and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 & 5 print "FizzBuzz"
*/

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }
        count++;
    }
}

fizzBuzz();

console.log(output)