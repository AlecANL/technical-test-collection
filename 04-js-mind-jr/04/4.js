
export function calculateDaysToPayDebts(debts) {
	return debts.map(debt => {
		let payment = 1;
		let days = 0;
		let pending = debt;

		while (pending > 0) {
			days++;
			pending -= payment;
			payment *= 2;
		}

		return days;
	});

}

//1 -> 1
// 2 -> 2
// 3 -> 4
// 4 -> 8