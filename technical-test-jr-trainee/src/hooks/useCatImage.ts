import { useEffect, useState } from 'react';
import { ICatImage, IUseCatImageParams } from '../models/cat-image.interface.ts';

export function useCatImage({ fact }: IUseCatImageParams) {
	const [imageUrl, setImageUrl] = useState<string>('');

	// To get a cat image with the first word of the fact
	useEffect(() => {
		if (!fact) return;

		const firstWord = fact.split(' ')[0];
		fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
			.then(res => res.json())
			.then((data: ICatImage) => {
				const { url } = data;
				setImageUrl(url);
			});

	}, [fact]);

	return { imageUrl };
}