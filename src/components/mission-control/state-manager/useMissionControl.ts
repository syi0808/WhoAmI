'use client';

import { useSyncExternalStore } from 'react';
import { MissionControlStateManager } from './MissionControlStateManager';

const singleton = new MissionControlStateManager();

export const useMissionControl = () => {
  const { refs } = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  const getBoundingClientRect = (index: number) => {
    return refs.at(index)?.getBoundingClientRect();
  };

  return { setRef: singleton.setRef.bind(singleton), getBoundingClientRect };
};
