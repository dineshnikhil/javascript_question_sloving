// Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

function positive_array(nums) {
	var positive_nums = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			positive_nums.push(nums[i]);
		}
	}

	console.log(positive_nums);
}

positive_array([1, -2, -3.4, 56, 42, -34, 232]);
