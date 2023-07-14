const listOfMovements = ['R', 'R', 'U', 'L']

export function maxInstructions (movements) {
	let distance = 0, max = 0;

	movements.forEach(movement => {
		if (movement === 'R' || movement === 'U') distance++
		if (movement === 'L' || movement === 'D') distance--

		const current = Math.abs(distance)
		if (current > max) max = current
	})

	return max
}