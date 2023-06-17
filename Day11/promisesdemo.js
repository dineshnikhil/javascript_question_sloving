function fun() {
	return new Promise(function (reslove, reject) {
		console.log('hiii..!');
		setTimeout(function process() {
			console.log('some task is done..');
			reslove('i am done');
		}, 10000);
		console.log('bye..!');
	});
}

var res = fun();
