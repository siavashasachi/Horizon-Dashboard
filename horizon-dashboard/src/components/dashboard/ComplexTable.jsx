import MainHeader from '../global/MainHeader';
import MoreBtn from '../common/MoreBtn';
function ComplexTable() {
    const tParentItems = [
        { info: 'Name' },
        { info: 'Approved' },
        { info: 'Date' },
        { info: 'Progress' },
    ]
    const tChildrenItems = [
        {
            id: 'kit1Status',
            name: 'Horizon UI Pro',
            status: 'Disable',
            date: '18 Apr 2021',
            progress: 78,
            icon: <span class="material-icons text-red-500">
                cancel
            </span>
        },
        {
            id: 'kit2Status',
            name: 'Horizon UI Pro',
            status: "Approved",
            date: '18 Apr 2021',
            progress: 58,
            icon: <span class="material-icons text-primary-green">
                check_circle
            </span>
        },
        {
            id: 'kit3Status',
            name: 'Horizon ',
            status: "Error",
            date: '18 Apr 2021',
            progress: 38,
            icon: <span class="material-icons text-yellow-400">
                error
            </span>
        },
        {
            id: 'kit4Status',
            name: 'Horizon ',
            status: "Error",
            date: '18 Apr 2021',
            progress: 38,
            icon: <span class="material-icons text-yellow-400">
                error
            </span>
        },
        {
            id: 'kit5Status',
            name: 'Horizon ',
            status: "Error",
            date: '18 Apr 2021',
            progress: 38,
            icon: <span class="material-icons text-yellow-400">
                error
            </span>
        }

    ]
    return (
        <div className="bg-white p-4 rounded-secondary flex-col h-full ">
            <div className="flex justify-between items-center mb-3">
                <MainHeader text={'Complex Table'} />
                <MoreBtn />
            </div>
            <table className="w-full table-fixed border-spacing-3.5 text-sm">
                <thead className="text-secondary-gray" >
                    <tr className="">
                        {tParentItems.map(d => <th className="text-left font-normal ">{d.info}</th>)}
                    </tr>
                </thead>
                <tbody>

                    {tChildrenItems.map((d) => {
                        return (<tr className="text-primary font-main-bold">
                            <td className='py-2'>{d.name}</td>
                            <td  className='flex items-center gap-1 py-2'>{d.icon} {d.status} </td>
                            <td className='py-2'>{d.date}</td>
                            <td className='py-2'>
                                <div class="w-full bg-progress-bar rounded-full h-1.5">
                                    <div class="bg-blue-primary h-1.5 rounded-full dark:bg-gray-300" style={{ width: d.progress }}></div>
                                </div>
                            </td>
                        </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}
export default ComplexTable