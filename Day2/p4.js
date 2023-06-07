// Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) in that string.

function count_vowels(msg) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var count = 0;
	var msg_arr = msg.split('');

	for (let i = 0; i < vowels.length; i++) {
		for (let j = 0; j < msg_arr.length; j++) {
			if (vowels[i] === msg_arr[j]) {
				count++;
			}
		}
	}

	console.log(count);
}

count_vowels('dinesh kumar pokkula');
