// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
// 7 7 7 7 7 7 7

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let j = 1; j < i + 1; j++) {
			empty_str += i.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
