function fun() {
	console.log('this is fun function!');
}

function gun(fu) {
	console.log('inside of the gun function!');
	fu();
	console.log('gun function over here!');
}

gun(fun);

gun(function () {
	console.log('this is anonomus function!');
});
