// Print the odd numbers less than 100

function print_odd() {
	for (let i = 1; i < 100; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}

print_odd();
