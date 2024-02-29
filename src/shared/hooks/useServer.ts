'use client';

import { useEffect, useState } from 'react';

export const useServer = () => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return isServer;
};
