// Write a function that takes a string as input and counts the number of characters

function count_chars(msg) {
	var msg_arr = msg.split(' ');
	var count = 0;
	msg_arr.forEach((element) => {
		count += element.length;
	});

	console.log(count);
}

count_chars('dinesh kumar');
