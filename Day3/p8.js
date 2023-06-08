// Write a function that takes a range of numbers as input and returns an array of all the prime numbers within that range.

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

function prime_arr(num) {
	var nums = [];
	for (let i = 0; i <= num; i++) {
		if (is_prime(i)) {
			nums.push(i);
		}
	}

	console.log(nums);
}

prime_arr(20);
