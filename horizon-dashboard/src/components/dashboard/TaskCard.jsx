import MoreBtn from "../common/MoreBtn"
import MainHeader from "../global/MainHeader"

function TaskCard(){
    return(
        <div className="flex flex-col p-4 bg-white rounded-secondary">
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <div className="h-7 w-7 bg-body rounded-full flex items-center justify-center"><input checked class="w-4 h-4 ring-secondary-gray focus:bg-purple-800"  type="checkbox" value="Horizon UI Pro" /></div>
                    <MainHeader text={'Tasks'}/>
                </div>
                <MoreBtn/>
            </div>
        </div>
    )
}
export default TaskCard