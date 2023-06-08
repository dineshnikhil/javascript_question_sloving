// Write a function that takes an array as input and returns a new array with all duplicate elements removed.

// one variasion using include()
function remove_duplicates(nums) {
	var with_out_duplicates = [];
	for (let i = 0; i < nums.length; i++) {
		if (!with_out_duplicates.includes(nums[i])) {
			with_out_duplicates.push(nums[i]);
		}
	}
	console.log(with_out_duplicates);
}

// two vaiation using indexOf()
function remove_duplicates_1(nums) {
	var with_out_duplicates = [];
	nums.forEach((element) => {
		if (with_out_duplicates.indexOf(element) === -1) {
			with_out_duplicates.push(element);
		}
	});
	console.log(with_out_duplicates);
}

// remove_duplicates([1, 2, 2, 3, 4, 5, 3]);

remove_duplicates_1([1, 2, 2, 3, 4, 5, 3]);
