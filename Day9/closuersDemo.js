function fun(name) {
	return function greet(msg) {
		console.log(msg, name);
	};
}

var greet = fun('dinesh');
greet('hii..!');
