import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	// if (false) {
	// 	error(404, 'Not Found');
	// }
	// return { user: event.locals.user };
	return { title: 'Placeholder Farms', description: '', bannerImg: '/images/barn.jpg' };
};
