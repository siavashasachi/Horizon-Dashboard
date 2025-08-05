import BasicLineChart from "@components/dashboard/BasicLineChart";
import StatusCard from "@components/dashboard/StatusCard";
import TotalSpentCard from "../../components/dashboard/TotalSpentCard";
import WeeklyCard from "../../components/dashboard/WeeklyCard";

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
    </div>
  );
}

export default DashboardHome;
