import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts.service.ts';

export function useCatFact() {
	const [fact, setFact] = useState<string>('');

	function refreshRandomFact() {
		getRandomFact().then(setFact);
	}

	// To get a random fact about cats
	useEffect(refreshRandomFact, []);

	return {
		fact,
		refreshRandomFact,
	}
}