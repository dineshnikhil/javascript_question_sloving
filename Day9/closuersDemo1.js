function makeAdder(num) {
	return function add(num2) {
		console.log(num + num2);
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add5(5);
add10(5);
