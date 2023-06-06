// Calculate the sum of digits of a positive integer number

function sum_of_digit(num) {
	sum = 0;
	num_df = num;
	while (num_df !== 0) {
		sum += num_df % 10;
		num_df = num_df - (num_df % 10);
		num_df = num_df / 10;
	}

	console.log(sum);
}

sum_of_digit(190302);
