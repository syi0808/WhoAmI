import { withTabContainer } from '../mac-tab-container';
import TabHeader from './TabHeader';
import { containerStyle, pageContainerStyle } from './styles';

function Chrome() {
  return (
    <div {...containerStyle}>
      <TabHeader />
      <div {...pageContainerStyle}>sdkfjv dkfjnv</div>
    </div>
  );
}

export default withTabContainer(Chrome);
