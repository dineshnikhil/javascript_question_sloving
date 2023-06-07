// Write a function that takes a string as input and returns the reverse of that string.

function reverse_string(msg) {
	var msg_arr = msg.split('');
	var reverse_msg = '';
	for (let i = msg_arr.length - 1; i >= 0; i--) {
		reverse_msg += msg_arr[i];
	}

	console.log(reverse_msg);
}

reverse_string('say');
