import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import resolvers from "./resolver";

const main = (app: any) => {
	buildSchema({
		emitSchemaFile: true,
		resolvers: [resolvers],
		validate: false,
	})
		.then((schema) => {
			const server = new ApolloServer({
				context: ({ req, res }) => ({ req, res }),
				introspection: true,
				playground: true,
				schema,
				uploads: false,
			});
			server.applyMiddleware({
				app,
				cors: true,
				path: "/",
			});
			return;
		})
		.catch((err) => console.log(err));
	return app;
};

export default main;
