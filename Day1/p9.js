// Calculate the average of the numbers in an array of numbers

function avg_of_array(nums) {
	sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += i;
	}

	console.log(sum / nums.length);
}

avg_of_array([1, 2, 3, 4]);
