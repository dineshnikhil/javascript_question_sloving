// Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

function out_the_evens(nums) {
	var new_arr = [];
	nums.forEach((element) => {
		if (element % 2 !== 0) {
			new_arr.push(element);
		}
	});

	console.log(new_arr);
}

out_the_evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
