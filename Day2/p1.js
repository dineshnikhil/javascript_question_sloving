// Write a function that takes an array of numbers as input and returns the maximum number in the array.

function max_from_arr(nums) {
	var max = nums[0];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
		}
	}

	return max;
}

const result = max_from_arr([1, 2, 3, 23343, 2, 3, 33, 442, 834]);
console.log(result);
