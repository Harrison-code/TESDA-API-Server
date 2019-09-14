import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import cors from 'cors'
import dotenvConfig from 'dotenv';
import {schema} from './src/schema'
import {resolvers} from './src/resolver'
import {testConnection} from './src/config/db'


dotenvConfig.config();

testConnection()

const port = process.env.NODE_PORT

console.log(port)

const app = express();
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true
}

app.use(cors(corsOptions))

// TODO Set up JWT authentication middleware
app.use(async (req, res, next) => {
	const token = req.headers['authorization'];
	console.log({token})
	next();

})
const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
});


server.applyMiddleware({app, path: '/graphql'});
app.listen({port}, () => {
	console.log(`Apollo Server on http://localhost:${port}/graphql`);
});