function constainsDuplicates(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i === j) {
				continue;
			} else {
				if (nums[i] === nums[j]) {
					return true;
				}
			}
		}
	}

	return false;
}

let result = constainsDuplicates([1, 2, 3]);
console.log(result);
