import ChromeTabs from './ChromeTabs';
import { buttonStyle, buttonWrapperStyle, headerStyle } from './styles';

export default function TabHeader() {
  return (
    <div {...headerStyle}>
      <div {...buttonWrapperStyle}>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
      </div>
      <ChromeTabs />
    </div>
  );
}
