import ChromeTab from './ChromeTab';
import { buttonStyle, buttonWrapperStyle, headerStyle } from './styles';

export default function TabHeader() {
  return (
    <div {...headerStyle}>
      <div {...buttonWrapperStyle}>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
      </div>
      <ChromeTab label="New Tab" />
    </div>
  );
}
