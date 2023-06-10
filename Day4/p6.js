// Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array
// or second array but not in both

function common_arr(arr1, arr2) {
	var new_arr = [];
	arr1.forEach((element1) => {
		arr2.forEach((element2) => {
			if (element1 === element2) {
				new_arr.push(element1);
			}
		});
	});
	return new_arr;
}

function uncommon_arr(arr1, arr2) {
	var common_arrs = common_arr(arr1, arr2);
	var new_arr = [];

	arr1.forEach((element) => {
		if (!common_arrs.includes(element)) {
			new_arr.push(element);
		}
	});

	arr2.forEach((element) => {
		if (!common_arrs.includes(element)) {
			new_arr.push(element);
		}
	});

	console.log(new_arr);
}

uncommon_arr([1, 2, 3, 4], [2, 3, 4, 5, 6, 7, 8]);
