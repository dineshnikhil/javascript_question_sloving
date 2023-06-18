console.log('start of the file');

setTimeout(() => {
	console.log('timer one done');
}, 0);

for (let i = 0; i < 1000000; i++) {
	// do nothing.
}

var x = Promise.resolve('Dinesh promise');
x.then((value) => {
	console.log('whose promise ?', value);
});

setTimeout(() => {
	console.log('timer two done');
}, 0);

console.log('end of the file');
