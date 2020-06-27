import { db } from "./config";

const resolvers = {
	Query: {
		searchHistory: () => async (_: any, context: any) => {
			const { userId } = context;
			try {
				const firebaseSearches = await db
					.collection("searches")
					.where("userId", "==", userId)
					.orderBy("createdAt", "desc")
					.get();

				return firebaseSearches.docs.map((res) => ({
					id: res.id,
					...res.data(),
				}));
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};

export default resolvers;
