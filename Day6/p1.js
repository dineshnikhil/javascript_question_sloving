// Write a function that takes a number n as input and prints a right triangle pattern consisting of n rows. For example, if n is 5, the pattern should be:

// *
// **
// ***
// ****
// *****

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let j = 1; j < i + 1; j++) {
			empty_str += '* ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
