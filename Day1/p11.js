// Find the maximum number in an array of numbers

function find_max(nums) {
	max = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
		}
	}

	console.log(max);
}

find_max([12, 3, 5, 3, 4, 78, 453, 33455, 23, 34, 234253]);
