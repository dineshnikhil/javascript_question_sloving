// 7 6 5 4 3 2 1
// 6 5 4 3 2 1
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

function print_pattern(num) {
	for (let i = 0; i < num; i++) {
		var empty_str = '';
		for (let j = num - i; j > 0; j--) {
			empty_str += j.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
