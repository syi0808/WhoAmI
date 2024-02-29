import { ExternalStore } from '@/shared/utils/class';

interface State {
  activeIndex: number;
  refs: (HTMLElement | null)[];
}

const initialState: State = {
  activeIndex: 0,
  refs: [],
};

export class MissionControlStateManager extends ExternalStore<State> {
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

  setRef(index: number) {
    this.state.refs = this.state.refs.slice(0, index + 1);

    return <T extends HTMLElement | null>(element: T) => {
      this.state.refs[index] = element;
    };
  }

  getServerSnapshot() {
    return initialState;
  }
}
