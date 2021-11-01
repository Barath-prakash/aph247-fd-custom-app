import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache(),
});

describe('App component test', () => {
  const component = render(
    <MockedProvider client={client}>
      <App apolloClient={client} />
    </MockedProvider>,
  );

  test('With loader', () => {
    act(() => {
      <MockedProvider client={client}>
        <App apolloClient={client} />
      </MockedProvider>;
      component.rerender();
    });
  });
});
