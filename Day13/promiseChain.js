/**
 * Create a function named 'fetchData' that returns a Promise.
 * Make sure 'fetchData' function resolves with the string 'data fetched!' after 1 second.
 * Create a function named 'processData' that takes data as an argument and returns a new Promise.
 * Make sure 'processData' function resolves with the input data concatenated with the string ' - processed!' after 1 second.
 */

function fetchData() {
	return new Promise((reslove, reject) => {
		setTimeout(() => {
			reslove('data fetched!');
		}, 1000);
	});
}

function processData(data) {
	return new Promise((reslove, reject) => {
		var editedData = data + ' - processed!';
		reslove(editedData);
	});
}

var result = fetchData();
result.then((data) => {
	var final = processData(data);
	final.then((data) => {
		console.log(data);
	});
});
