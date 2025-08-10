import BasicLineChart from "@components/dashboard/BasicLineChart";
import StatusCard from "@components/dashboard/StatusCard";
import TotalSpentCard from "../../components/dashboard/TotalSpentCard";
import WeeklyCard from "../../components/dashboard/WeeklyCard";
import CheckTable from "../../components/dashboard/CheckTableCard";
import DailyTrafficCard from "../../components/dashboard/DailyTrafficCard";
import MyPieCard from "../../components/dashboard/MyPieCard";
import ComplexTable from "../../components/dashboard/ComplexTable";
import TaskCard from '@components/dashboard/TaskCard';
function DashboardHome() {
  return (
    <div className="grid grid-cols-2 grid-rows-4  gap-3 p-4 ">
      <div className="col-span-2 flex items-center gap-3 row-end-1">
        <StatusCard />
      </div>
      <div className="">
        <TotalSpentCard />
      </div>
      <div className="">
        <WeeklyCard />
      </div>
      <div>
        <CheckTable />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <DailyTrafficCard />
        <MyPieCard />
      </div>
      <div>
        <ComplexTable />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <TaskCard/>
      </div>
    </div>
  );
}

export default DashboardHome;
