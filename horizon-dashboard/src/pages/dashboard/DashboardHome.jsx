import StatusCard from "../../components/dashboard/StatusCard";

function DashboardHome() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <div className="col-span-2 flex items-center gap-3">
        <StatusCard/>
      </div>
      <div className="">
        
      </div>
      <div className="">
        
      </div>
    </div>
  );
}

export default DashboardHome;
