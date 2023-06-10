// Create a function that will merge two arrays and return the result as a new
// array

function merge_arrs(arr1, arr2) {
	var new_arr = arr1;

	arr2.forEach((element) => {
		if (!new_arr.includes(element)) {
			new_arr.push(element);
		}
	});

	console.log(new_arr);
}

merge_arrs([1, 2, 3, 4], [3, 4, 5, 6, 7]);
