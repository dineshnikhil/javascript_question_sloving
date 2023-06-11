// 1 2 3 4 5 6 7
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function print_pattern(num) {
	for (let i = num; i > 0; i--) {
		var empty_str = '';
		for (let j = 1; j < i + 1; j++) {
			empty_str += j.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
