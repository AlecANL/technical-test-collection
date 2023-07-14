import { test, expect} from 'vitest'
import { maxTaskDuration } from '../03/3';

test('maxTaskDuration', () => {
	expect(maxTaskDuration([[3,2,1]])).toEqual([4]);
})