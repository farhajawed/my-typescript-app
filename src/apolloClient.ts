import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { client, ApolloProvider };
