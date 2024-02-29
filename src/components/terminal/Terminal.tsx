'use client';

import TabHeader from './TabHeader';
import { containerStyle } from './styles';
import { TerminalPrompt } from './TerminalPrompt';
import dayjs from 'dayjs';
import { withTabContainer } from '../mac-tab-container/TabContainer';

function Terminal() {
  const formattedDate = dayjs().format('ddd MMM D HH:mm:ss');

  return (
    <div {...containerStyle}>
      <TabHeader />
      <TerminalPrompt formattedDate={formattedDate} />
    </div>
  );
}

export default withTabContainer(Terminal);
