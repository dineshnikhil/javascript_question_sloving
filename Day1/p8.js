// Calculate the sum of numbers in an array of numbers

function sum_of_array(nums) {
	sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	console.log(sum);
}

sum_of_array([1, 2, 3, 4]);
