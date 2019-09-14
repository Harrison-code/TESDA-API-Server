import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenvConfig from 'dotenv';
import { schema } from './src/schema'
import { resolvers } from './src/resolver'
import { testConnection } from './src/config/db'

dotenvConfig.config();

testConnection()

const port = 9000

console.log(port)

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});


server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port }, () => {
    console.log('Apollo Server on http://localhost:9000/graphql');
});