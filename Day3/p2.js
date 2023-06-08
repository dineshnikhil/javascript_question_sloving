// Write a function that takes a positive integer as input and checks if it is a prime number.

function is_prime(num) {
	if (num === 0 || num === 1) {
		return false;
	}

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

result = is_prime(14);
console.log(result);
