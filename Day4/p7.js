// Create a function that will receive an array of numbers as argument and will return a
// new array with distinct elements

function common_arr(arr1, arr2) {
	var new_arr = [];
	arr1.forEach((element1) => {
		arr2.forEach((element2) => {
			if (element1 === element2) {
				new_arr.push(element1);
			}
		});
	});
	console.log(new_arr);
}

common_arr([1, 2, 3, 4], [3, 4, 5, 6, 7, 2]);
