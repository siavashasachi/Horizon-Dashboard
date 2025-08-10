import BasicLineChart from "@components/dashboard/BasicLineChart";
import StatusCard from "@components/dashboard/StatusCard";
import TotalSpentCard from "../../components/dashboard/TotalSpentCard";
import WeeklyCard from "../../components/dashboard/WeeklyCard";
import CheckTable from "../../components/dashboard/CheckTableCard";
import DailyTrafficCard from "../../components/dashboard/DailyTrafficCard";

function DashboardHome() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <div className="col-span-2 flex items-center gap-3">
        <StatusCard/>
      </div>
      <div className="">
        <TotalSpentCard/>
      </div>
      <div className="">
        <WeeklyCard/>
      </div>
      <div>
        <CheckTable/>
      </div>
      <div className="grid grid-cols-2">
        <DailyTrafficCard/>
      </div>
    </div>
  );
}

export default DashboardHome;
