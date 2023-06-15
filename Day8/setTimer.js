var id1 = setTimeout(function execute1() {
	console.log('task one completed!');
}, 5000);

var id2 = setTimeout(function execute2() {
	console.log('task two completed!');
	clearTimeout(id1);
}, 2000);

console.log(typeof id1);
