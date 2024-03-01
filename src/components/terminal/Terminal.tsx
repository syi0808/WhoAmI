import TabHeader from './TabHeader';
import { containerStyle } from './styles';
import TerminalPrompt from './TerminalPrompt';
import { withTabContainer } from '../mac-tab-container';
import dayjs from 'dayjs';

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
