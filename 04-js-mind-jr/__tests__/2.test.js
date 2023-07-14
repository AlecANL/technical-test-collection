import { test, expect} from 'vitest'
import { willMakeIt } from '../02/2';


const x = {
	'D': 'deadline',
	'T': 'totalFunctions',
	'F': 'functionsPerDay',
	'R': 'functionsDeleted',
}

test('willMakeIt', () => {
	// expect(willMakeIt(10, 5, 5, 100)).toBe(true);
	expect(willMakeIt(10, 0, 1, 10)).toBe(true);
})