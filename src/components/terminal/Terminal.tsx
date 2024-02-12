import TabContainer from '../mac-tab-container/TabContainer';
import TabHeader from './TabHeader';
import { containerStyle } from './styles';
import { TerminalPrompt } from './TerminalPrompt';
import dayjs from 'dayjs';

export default function Terminal() {
  const formattedDate = dayjs().format('ddd MMM D HH:mm:ss');

  return (
    <TabContainer>
      <div {...containerStyle}>
        <TabHeader />
        <TerminalPrompt formattedDate={formattedDate} />
      </div>
    </TabContainer>
  );
}
