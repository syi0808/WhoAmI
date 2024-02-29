'use client';

import { useSyncExternalStore } from 'react';
import { missionControlStateManager } from './MissionControlStateManager';

const singleton = missionControlStateManager;

// window.stateManager = singleton;

export const useMissionControl = () => {
  const { activeIndex } = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  return {
    changeActiveIndex: singleton.changeActiveIndex.bind(singleton),
    activeIndex,
  };
};
