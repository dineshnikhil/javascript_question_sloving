// Write a function that takes a sentence as input and returns a new sentence with the words reversed.

function reverse_word(msg) {
	var msg_arr = msg.split('');
	var new_arr = [];
	for (let i = msg_arr.length - 1; i >= 0; i--) {
		new_arr.push(msg_arr[i]);
	}

	return new_arr.join('');
}

function reverse_msg(msg) {
	var msg_arr = msg.split(' ');
	var new_arr = [];
	msg_arr.forEach((element) => {
		new_arr.push(reverse_word(element));
		new_arr.push(' ');
	});

	console.log(new_arr.join(''));
}

reverse_msg('i am good');
