// Write a function that takes a string as input and returns a new string with all duplicate characters removed.

function remove_duplicates(msg) {
	var new_msg_arr = [];
	var msg_arr = msg.split('');
	msg_arr.forEach((element) => {
		if (!new_msg_arr.includes(element)) {
			new_msg_arr.push(element);
		}
	});

	console.log(new_msg_arr.join(''));
}

remove_duplicates('pokkula good');
