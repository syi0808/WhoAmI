'use client';

import { ReactNode, createContext } from 'react';

const context = createContext({});

export function MissionControlProvider({ children }: { children: ReactNode }) {
  return <context.Provider value={{}}>{children}</context.Provider>;
}
