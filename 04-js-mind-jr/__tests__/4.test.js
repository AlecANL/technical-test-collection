import { test, expect} from 'vitest'
import { calculateDaysToPayDebts } from '../04/4';

test('calculateDaysToPayDebts', () => {
	expect(calculateDaysToPayDebts([1, 10])).toStrictEqual([1, 4])
	expect(calculateDaysToPayDebts([2])).toStrictEqual([2])
	expect(calculateDaysToPayDebts([3])).toStrictEqual([2])

})