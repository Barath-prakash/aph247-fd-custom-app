import React from 'react';
import { render, act } from '@testing-library/react';
import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Content from '../Content';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache(),
});

test('renders with empty data', () => {
  render(
    <Content
      appClient={jest.fn}
      apolloClient={client}
      loading={false}
      error="Error occured"
      setLoading={jest.fn}
      setError={jest.fn}
    />,
  );
});

test('renders with empty data for first element', () => {
  render(() =>
    act(() => {
      <Content
        appClient={jest.fn}
        apolloClient={client}
        loading={truw}
        error=""
        setLoading={jest.fn}
        setError={jest.fn}
      />;
    }),
  );
});
