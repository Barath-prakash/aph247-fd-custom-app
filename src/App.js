import React, { useState, useEffect } from 'react';
import Content from './components/Content';

const App = ({ apolloClient }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [appClient, setClient] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', () => setLoading(true));
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (loading) {
      window?.app
        ?.initialized()
        .then(client => {
          window.client = client;
          client.events.on('app.activated', setClient(client));
        })
        .catch(err => {
          setError(`App initialize error: ${err}`);
        });
    }
  }, [loading]);

  return error ? (
    <div className="text-center p-3 text-danger">{error}</div>
  ) : (
    <Content
      appClient={appClient}
      apolloClient={apolloClient}
      loading={loading}
      error={error}
      setLoading={setLoading}
      setError={setError}
    />
  );
};

export default App;
