// Calculate the sum of even numbers greater than 10 and less than 30

function sum_of_even() {
	sum = 0;
	for (let i = 10; i < 30; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}

	console.log(sum);
}

sum_of_even();
