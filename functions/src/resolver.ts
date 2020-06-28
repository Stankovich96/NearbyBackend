import { db } from './config';

const resolvers = {
	Query: {
		searchHistory: async (_: any, args: any) => {
			const { userId } = args;
			try {
				const firebaseSearches = await db
					.collection('searches')
					.where('userId', '==', userId)
					.orderBy('createdAt', 'desc')
					.get();

				return firebaseSearches.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};

export default resolvers;
