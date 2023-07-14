export function countUniqueNumbersSet(numbers) {
	const uniqueNumbers = new Set(numbers);
	return uniqueNumbers.size;
}

function countUniqueNumbersFor(numbers) {
	const uniqueNumbers = {};
		for (const element of numbers) {
			uniqueNumbers[element] = true;
		}

	return Object.keys(uniqueNumbers).length;
}

function countUniqueNumbersNot(numbers) {
	return numbers.reduce((uniqueNumbers, element) => {
		if (!uniqueNumbers[element]) {
			uniqueNumbers[element] = true;
		}

		return uniqueNumbers;
	}, 0);
}