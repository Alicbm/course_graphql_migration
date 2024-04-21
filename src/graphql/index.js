// npm install @apollo/server express graphql cors
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } =  require('@graphql-tools/load-files')
const { resolvers } = require('./resolvers')

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server),
  );
}

module.exports = { useGraphql }




