import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/link-error';
import { APOLLO_247_AUTH_TOKEN, APOLLO_247_ENDPOINT } from './config';

let apolloClient;
const getClient = () => {
  const errorLink = onError(error => {
    const { graphQLErrors, operation, forward } = error;
    if (graphQLErrors) {
      const unauthenticatedError = graphQLErrors.some(
        gqlError => gqlError.extensions && gqlError.extensions.code === 'UNAUTHENTICATED'
      );
      if (unauthenticatedError) {
        console.log('unauthenticatedError', unauthenticatedError);
      }
    }
    return forward(operation);
  });
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: APOLLO_247_AUTH_TOKEN,
    },
  }));

  const httpLink = createHttpLink({
    uri: APOLLO_247_ENDPOINT,
  });

  const link = errorLink.concat(authLink).concat(httpLink);
  const cache = apolloClient ? apolloClient.cache : new InMemoryCache();
  return new ApolloClient({ link, cache });
};

export const client = getClient();
