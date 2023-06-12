// 1
// 2 3
// 4 5 6
// 7 8 9 10

function print_pattren(num) {
	num_to_print = 1;
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let j = 0; j < i; j++) {
			empty_str += num_to_print.toString() + ' ';
			num_to_print++;
		}
		console.log(empty_str);
	}
}

print_pattren(7);
