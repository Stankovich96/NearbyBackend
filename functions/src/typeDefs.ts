import { gql } from 'apollo-server-express';

const typeDefs = gql`
	scalar Date
	type Query {
		searchHistory(userId: ID!): [SearchHistory!]!
	}
	type SearchHistory {
		id: ID!
		createdAt: Date!
		longitude: Float!
		latitude: Float!
		radius: Float!
		searchTerm: String!
	}
`;
export default typeDefs;
