import { ExternalStore } from '@/shared/utils/class';

interface State {
  refs: (HTMLElement | null)[];
}

const initialState: State = {
  refs: [],
};

export class MissionControlStateManager extends ExternalStore<State> {
  constructor() {
    super(initialState);
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
