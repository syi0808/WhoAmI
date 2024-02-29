import { ExternalStore } from '@/shared/utils/class';
import { headers } from 'next/headers';

interface State {
  activeIndex: number;
}

const initialState: State = {
  activeIndex: 0,
};

class MissionControlStateManager extends ExternalStore<State> {
  constructor() {
    super(initialState);
  }

  changeActiveIndex(index: number) {
    this.state = {
      ...this.state,
      activeIndex: index,
    };

    this.emitChange();
  }

  getServerSnapshot() {
    return initialState;
  }
}

export const missionControlStateManager = new MissionControlStateManager();
