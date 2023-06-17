function is_even(val) {
	return new Promise(function (reslove, reject) {
		console.log('start');
		setTimeout(() => {
			console.log('completed the timer..!');
			if (val % 2 === 0) {
				reslove('even');
			} else {
				reject('odd');
			}
		}, 10000);
		console.log('end');
	});
}

var res = is_even(12);
