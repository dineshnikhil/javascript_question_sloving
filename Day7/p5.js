//             1
//           2 1
//         3 2 1
//       4 3 2 1
//     5 4 3 2 1
//   6 5 4 3 2 1
// 7 6 5 4 3 2 1

function print_pattern(num) {
	for (let i = 1; i <= num; i++) {
		var empty_str = '';
		for (let space = 0; space < num - i; space++) {
			empty_str += '  ';
		}
		for (let nums = i; nums > 0; nums--) {
			empty_str += nums.toString() + ' ';
		}
		console.log(empty_str);
	}
}

print_pattern(7);
