// 7 7 7 7 7 7 7
// 6 6 6 6 6 6
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

function print_pattern(num) {
	for (let i = num; i > 0; i--) {
		var empty_str = '';
		for (let j = 1; j < i + 1; j++) {
			empty_str += i.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
