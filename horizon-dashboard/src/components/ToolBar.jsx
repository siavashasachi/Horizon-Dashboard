import SearchInput from "./SearchInput";
import StockBox from "./StockBox";
import NotificationIcon from './NotificationIcon';
import DarkModeIcon from "./DarkModeIcon";
import InfoIcon from "./Infoicon";
import ProfileIcon from './ProfileIcon';
function ToolBar() {
  return (
    <div className="flex items-center p-2 rounded-4xl bg-white gap-2 text-secondary-gray">
      <SearchInput/>
      <StockBox/>
      <NotificationIcon/>
      <DarkModeIcon/>
      <InfoIcon/>
      <ProfileIcon/>
    </div>
  );
}

export default ToolBar;
