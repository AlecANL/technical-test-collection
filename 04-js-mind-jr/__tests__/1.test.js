import { test, expect} from 'vitest'
import { maxInstructions } from '../01/1';

test('maxInstructions', () => {
	expect(maxInstructions(['R', 'R', 'U', 'U'])).toBe(4);
	expect(maxInstructions(['R', 'R', 'U', 'L'])).toBe(3);
	expect(maxInstructions(['L', 'L', 'L', 'L', 'L'])).toBe(5);
	expect(maxInstructions(['R', 'U', 'L', 'D'])).toBe(2);
})