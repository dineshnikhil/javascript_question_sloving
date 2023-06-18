function fetchData(url) {
	return new Promise(function (reslove, reject) {
		console.log('Started the download from', url);
		setTimeout(function processDownloading() {
			let data = 'Dummy Data';
			console.log('Downloading completed from', url);
			reslove(data);
		}, 10000);
	});
}

function writeFile(data) {
	return new Promise(function (reslove, reject) {
		console.log('writting the data to the file');
		setTimeout(function processWritting() {
			let fileName = 'data.txt';
			console.log('successfully written the', data, 'to the file', fileName);
			reslove(fileName);
		}, 3000);
	});
}

function uploadFile(file, url) {
	return new Promise(function (reslove, reject) {
		console.log('uploading the file started...');
		setTimeout(function processUpload() {
			var status = 'success';
			console.log('uploaded the file with the name', file, 'to the url', url);
			reslove(status);
		}, 5000);
	});
}

async function process() {
	var downloadingData = await fetchData('dineshnikhil.com');
	var file = await writeFile(downloadingData);
	var uploadedStatus = await uploadFile(file, 'dineshnikhil.com');
	console.log('process status is: ', uploadedStatus);
}

process();
