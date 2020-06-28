import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolver';
import typeDefs from './typeDefs';

const main = (app: any) => {
	const server = new ApolloServer({
		context: ({ req, res }) => ({ req, res }),
		introspection: true,
		playground: true,
		typeDefs,
		resolvers,
	});
	server.applyMiddleware({
		app,
		cors: true,
		path: '/',
	});
	return app;
};

export default main;
