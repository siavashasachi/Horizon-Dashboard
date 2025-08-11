import { Curve } from "recharts";
import ChartBtn from "../common/ChartBtn"
import MonthToggle from "../common/MonthToggle"
import BasicLineChart from "./BasicLineChart";
function TotalSpentCard() {
    return (
        <div className="bg-white rounded-secondary p-4 h-full  ">
            <div className="flex items-center justify-between">
                <MonthToggle />
                <ChartBtn />
            </div>
            <div className="grid grid-cols-6   gap-3">
                <div className="flex flex-col col-span-2 ">
                    <div className="text-primary text-2xl font-main-bold">
                        $37
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                        <div className="text-secondary-gray text-sm">Total Spent</div>
                        <div className="flex items-center text-primary-green text-xs">
                            <span class="material-symbols-outlined">
                                arrow_drop_up
                            </span>
                            <span>+2.45%</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 w-full"><BasicLineChart/></div>
            </div>
        </div>
    )
}
export default TotalSpentCard