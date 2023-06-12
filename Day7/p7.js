// 1234567
//  234567
//   34567
//    4567
//     567
//      67
//       7
//      67
//     567
//    4567
//   34567
//  234567
// 1234567

function print_first_half(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let space = 0; space < i - 1; space++) {
			empty_str += '  ';
		}
		for (let nums = i; nums <= num; nums++) {
			empty_str += nums.toString() + ' ';
		}
		console.log(empty_str);
	}
}

function second_half(num) {
	for (let i = num - 1; i > 0; i--) {
		var empty_str = '';
		for (let space = 0; space < i - 1; space++) {
			empty_str += '  ';
		}
		for (let nums = i; nums <= num; nums++) {
			empty_str += nums.toString() + ' ';
		}
		console.log(empty_str);
	}
}

function print_pattern(num) {
	print_first_half(num);
	second_half(num);
}

print_pattern(7);
