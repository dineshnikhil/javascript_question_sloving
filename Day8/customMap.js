function mapper(arr, fn) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		var res = fn(arr[i], i);
		result.push(res);
	}

	return result;
}

var x = [1, 2, 3, 4, 5];
var result = mapper(x, function squr(val, i) {
	return val * val;
});

console.log(x);
console.log(result);
