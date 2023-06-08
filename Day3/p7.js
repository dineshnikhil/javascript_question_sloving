// Write a function that takes a string as input and returns the longest word in the string.

function find_long_word(msg) {
	var msg_arr = msg.split(' ');
	var max = msg_arr[0].length;
	var index_ele = 0;
	msg_arr.forEach((element) => {
		if (element.length > max) {
			max = element.length;
			index_ele = msg_arr.indexOf(element);
		}
	});

	console.log(msg_arr[index_ele]);
}

find_long_word('i am a good coderProMax and the programmer.');
