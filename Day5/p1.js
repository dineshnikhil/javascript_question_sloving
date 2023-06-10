// Write a function that takes a string as input and capitalizes all the vowels (a, e, i, o, u) in that string.

function capitalize_vowels(msg) {
	var vowels_arr = ['a', 'e', 'i', 'o', 'u'];
	var new_msg = msg.split('');
	var new_msg_arr = [];

	new_msg.forEach((element) => {
		if (vowels_arr.includes(element)) {
			new_msg_arr.push(element.toUpperCase());
		} else {
			new_msg_arr.push(element);
		}
	});

	console.log(new_msg_arr.join(''));
}

capitalize_vowels('dinesh kumar pokkula');
