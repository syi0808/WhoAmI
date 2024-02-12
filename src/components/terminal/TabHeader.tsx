import { buttonStyle, buttonWrapperStyle, headerStyle, headerTitle } from './styles';

export default function TabHeader() {
  return (
    <div {...headerStyle}>
      <div {...buttonWrapperStyle}>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
        <div {...buttonStyle}></div>
      </div>
      <div {...headerTitle}>sung-yein@Yeins-MacBook-Pro:~</div>
    </div>
  );
}
