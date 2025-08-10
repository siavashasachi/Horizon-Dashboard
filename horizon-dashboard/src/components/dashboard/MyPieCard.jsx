import MainHeader from "../global/MainHeader";
import MyPieChart from "./MyPieChart";

function MyPieCard(){
    return(
        <div className=" bg-white p-4 rounded-secondary flex flex-col gap-3">
                <MainHeader text={'Your Pie Chart'}/>
                <MyPieChart/>
                <div className="flex justify-between items-center">

                </div>
        </div>
    )
}
export default MyPieCard