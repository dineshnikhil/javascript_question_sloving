// 7
// 7 6
// 7 6 5
// 7 6 5 4
// 7 6 5 4 3
// 7 6 5 4 3 2
// 7 6 5 4 3 2 1

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let j = num; j > num - i; j--) {
			empty_str += j.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
