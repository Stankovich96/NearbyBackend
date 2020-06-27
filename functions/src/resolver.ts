import { Query, Resolver, ObjectType, Field, ID } from "type-graphql";
import { db } from "./config";
import "reflect-metadata";

// @ObjectType({ description: "Hospital nearby Types" })
// class Hospital {
// 	@Field(() => ID)
// 	place_id: string;
// 	@Field()
// 	name: string;
// 	@Field()
// 	vicinity: string;
// 	@Field()
// 	rating: number;
// 	@Field()
// 	icon: string;
// }

@ObjectType({ description: "Search History Types" })
class RecentSearch {
	@Field(() => ID)
	id: string;
	@Field((type) => String)
	searchTerm: string;
	@Field((type) => String)
	createdAt: string;
	@Field((type) => Number)
	latitude: number;
	@Field((type) => Number)
	longitude: number;
	@Field((type) => String)
	radius: string;
}

@Resolver(() => RecentSearch)
export default class {
	@Query(() => [RecentSearch])
	async FetchRecentSearch(): Promise<RecentSearch[]> {
		const searches = await db.collection("searches").get();
		const data: any = searches.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return data;
	}
}
