import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { prisma } = require('./../generated/prisma-client')
import { default as typeDefs } from './graphql/types';
import { default as resolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4009 },
    context: async () => ({
        prisma
    }),
}).then((graphqlServer) => {
    console.log(`🚀  Server ready at: ${graphqlServer.url}`);
})

