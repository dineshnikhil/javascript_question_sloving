// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// 1 2 3 4 5 6 5 4 3 2 1
// 1 2 3 4 5 6 7 6 5 4 3 2 1

function print_spec_line(num) {
	var empty_str = '';
	for (let i = 1; i <= num; i++) {
		empty_str += i.toString() + ' ';
	}
	for (let j = num - 1; j > 0; j--) {
		empty_str += j.toString() + ' ';
	}

	console.log(empty_str);
}

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		print_spec_line(i);
	}
}

print_pattern(7);
