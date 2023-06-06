// Calculate the sum of numbers from 1 to 10

function print_sum(num) {
	var sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}

	console.log(sum);
}

print_sum(1000);
