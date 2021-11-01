import React, { useState } from 'react';

function useLoader() {
  const [loading, setLoading] = useState(false);

  return { loading, setLoading };
}

export default useLoader;
