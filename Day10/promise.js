function fetchCoustem(url) {
	var output;
	console.log('fetching the data started..!');
	setTimeout(function fetch() {
		console.log('completed the fetching..!');
		output = 'dummy data';
	}, 3000);

	return output;
}

var result = fetchCoustem('something');
