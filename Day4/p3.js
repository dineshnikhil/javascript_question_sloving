// Write a function that takes a number as input and generates the Fibonacci series up to that number.

function print_fibinacci(num) {
	var num1 = 0;
	var num2 = 1;
	for (let i = 0; i <= num; i++) {
		if (i === 0 || i === 1) {
			console.log(i);
		} else {
			var new_int = num1 + num2;
			console.log(new_int);
			num1 = num2;
			num2 = new_int;
		}
	}
}

print_fibinacci(10);
