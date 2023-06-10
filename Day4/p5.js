// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

function rotate_arr(arr, x) {
	var first_half_arr = arr.slice(0, x);
	var second_half_arr = arr.slice(x);
	var new_arr = second_half_arr.concat(first_half_arr);
	console.log(new_arr);
}

rotate_arr([1, 2, 3, 4, 5, 6, 7, 8], 3);
