// using Node.js File System (fs) module to read and write file content. You have to create and export a default function called 'readFile' that reads the contents of a text file named 'file.txt'. Additionally, you should create a second function named 'writeFile' to write 'Hello from Node.js File System' to a new file called 'newFile.txt'.

/**
 * TODOS:
 * Export the 'readFile' function using default export
 * Create a named function 'writeFile' in the 'index.js' file
 * Export the 'writeFile' function using named export
 */

const fs = require('fs');

function readFile() {
	fs.readFile('./file.txt', 'utf8', (err, data) => {
		if (err) {
			console.log(log);
		} else {
			console.log(data);
		}
	});
}

function writeFile() {
	fs.writeFile('./newFile.txt', 'Hello from Node.js File System', (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('written to the file successfully.!');
		}
	});
}

readFile();
