// Write a function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizz_buzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else {
			console.log(i);
		}
	}
}

fizz_buzz();
