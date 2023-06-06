// Create a function that will return a Boolean specifying if a number is prime

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

var nums = [];
for (let i = 0; i <= 100; i++) {
	nums.push(i);
}

var prime_nums = [];
for (let i = 0; i < nums.length; i++) {
	if (is_prime(nums[i])) {
		prime_nums.push(nums[i]);
	}
}

console.log(prime_nums);
