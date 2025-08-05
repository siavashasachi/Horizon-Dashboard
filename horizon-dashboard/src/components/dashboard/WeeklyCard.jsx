import MainHeader from "../global/MainHeader"
import WeeklyChart from "./WeeklyChart"
function WeeklyCard(){
    return(
        <div className="bg-white flex flex-col justify-between max-h-[530px] h-full p-4 rounded-secondary">
            <MainHeader text={"Weekly revenue"}/>
            <WeeklyChart/>
        </div>
    )
}
export default WeeklyCard