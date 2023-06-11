// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function print_pattern(num) {
	// first half
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let j = 1; j < i + 1; j++) {
			empty_str += j.toString() + ' ';
		}
		console.log(empty_str);
	}
	// second half
	for (let j = num - 1; j > 0; j--) {
		var empty_str = '';
		for (let i = 1; i < j + 1; i++) {
			empty_str += i.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(5);
