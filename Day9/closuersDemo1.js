function makeAdder(num) {
	return function add(num2) {
		console.log(num + num2);
	};
}

var add10 = makeAdder(10);

add10(5);
