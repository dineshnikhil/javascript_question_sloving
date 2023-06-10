// Write a function that takes two strings as input and checks if they are anagrams (contain the same characters in a different order).

function is_anagrams(msg1, msg2) {
	var anagrams_flag = true;
	if (msg1.length !== msg2.length) {
		anagrams_flag = false;
		return;
	} else {
		var msg1_arr = msg1.split('');
		msg1_arr.forEach((element) => {
			if (!msg2.includes(element)) {
				anagrams_flag = false;
				return;
			}
		});
	}

	console.log(anagrams_flag);
}

is_anagrams('dinesh', 'dinesh');
