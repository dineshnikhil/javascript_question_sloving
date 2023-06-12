//              1
//            1 2
//          1 2 3
//        1 2 3 4
//      1 2 3 4 5
//    1 2 3 4 5 6
//  1 2 3 4 5 6 7

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let space = 0; space < num - i; space++) {
			empty_str += '  ';
		}
		for (let nums = 1; nums < i + 1; nums++) {
			empty_str += nums.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
