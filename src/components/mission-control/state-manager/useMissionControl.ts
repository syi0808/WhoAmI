'use client';

import { useSyncExternalStore } from 'react';
import { missionControlStateManager } from './MissionControlStateManager';

const singleton = missionControlStateManager;

// window.stateManager = singleton;

export const useMissionControl = () => {
  const { refs, activeIndex } = useSyncExternalStore(
    singleton.subscribe.bind(singleton),
    singleton.getSnapshot.bind(singleton),
    singleton.getServerSnapshot.bind(singleton)
  );

  const getBoundingClientRect = (index: number) => {
    return refs.at(index)?.getBoundingClientRect();
  };

  return {
    setRef: singleton.setRef.bind(singleton),
    changeActiveIndex: singleton.changeActiveIndex.bind(singleton),
    activeIndex,
    getBoundingClientRect,
  };
};
