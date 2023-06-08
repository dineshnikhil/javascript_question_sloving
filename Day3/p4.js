// Write a function that takes an array as input and returns a new array with the elements reversed.

function reverse_arr(nums) {
	var new_reverse_array = [];
	for (let i = nums.length - 1; i >= 0; i--) {
		new_reverse_array.push(nums[i]);
	}

	console.log(new_reverse_array);
}

reverse_arr([1, 2, 3, 4]);
