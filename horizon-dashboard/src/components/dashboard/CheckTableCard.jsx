import MoreBtn from "../common/MoreBtn"
import MainHeader from "../global/MainHeader"

function CheckTable() {
    const tParentItems = [
        { info: 'name' },
        { info: 'progress' },
        { info: 'quantity' },
        { info: 'date' },
    ]
    const tChildrenItems = [
        {   id:'kit1',
            name: 'Horizon UI Pro',
            progress: '10%',
            quantity: '10141424',
            date: '25.Jan.2021'
        }
    ]
    return (
        <div className="bg-white p-4 rounded-primary h-full ">

            <div className="mb-3 flex items-center justify-between">
                <MainHeader text={'Check Table'} />
                <MoreBtn/>
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
                                <td className="flex items-center gap-2 py-4">
                                    <input className="ring-secondary-gray focus:bg-purple-800" type="checkbox" id={d.id} name={d.id} value={d.name} />
                                    <label for="kit1">{d.name}</label>
                                    
                                </td>
                                <td>{d.progress}</td>
                                <td>{d.quantity}</td>
                                <td>{d.date}</td>
                            </tr>
                            )
                        })}
                    
                </tbody>

            </table>
        </div>
    )
}
export default CheckTable