import MainHeader from "../global/MainHeader"
import TrafficChart from "./TrafficChart"

function DailyTrafficCard() {
    return (
        <div className="bg-white rounded-secondary p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h4 className=" text-sm text-secondary-gray">Daily Traffic</h4>
                    <div className="flex gap-1 items-center">
                        <MainHeader text={'2.579'}/>
                        <span className="">Visitors</span>
                    </div>
                </div>
                <div className="text-primary-green flex items-center text-xs">
                    <span class="material-symbols-outlined">
                        arrow_drop_up
                    </span>
                    <span>+2.45%</span>
                </div>
            </div>
            <TrafficChart/>
        </div>
    )
}
export default DailyTrafficCard