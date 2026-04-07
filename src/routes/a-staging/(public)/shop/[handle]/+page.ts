import type { PageLoad } from './$types';
import { products } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const product = products.find((p) => p.handle === params.handle);
	if (!product) error(404, 'Product not found');
	return { product };
};
