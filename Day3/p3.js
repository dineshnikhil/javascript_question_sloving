// Write a function that takes a string as input and capitalizes the first letter of each word, while making all other letters lowercase.

function capitalize_string(msg) {
	var new_string = '';
	var msg_arr = msg.split(' ');

	msg_arr.forEach((element) => {
		var first_letter = element.charAt(0).toUpperCase();
		var last_letters = element.substring(1, element.length);
		var new_word = first_letter + last_letters;
		new_string += new_word + ' ';
	});

	console.log(new_string);
}

capitalize_string('dinesh kumar pokkula');
