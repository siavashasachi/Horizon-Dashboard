function StatusCard() {
    const cards = [
        {
            info: 'aa',
            price: '$40',
        },
        {
            info: 'aa',
            price: '$40',
        },
        {
            info: 'aa',
            price: '$5',
        },
        {
            info: 'dd',
            price: '$40',
        },
        {
            info: 'cc',
            price: '$40',
        },
        {
            info: 'bb',
            price: '$40',
        },
    ]
    return (
        cards.map(
            (data) => {
                return (
                    <div className="flex items-center gap-4 ps-5 py-4 bg-white w-100 max-w-[220px] h-[80px] rounded-secondary">
                        <div className="rounded-full flex justify-center items-center bg-body w-[50px] h-[50px]">E</div>
                        <div className="flex flex-col">
                            <span className="text-sm text-secondary-gray">{data.info}</span>
                            <span className="text-primary text-2xl font-main-bold">{data.price}</span>
                        </div>
                    </div>
                )
            }
        )

    )
}
export default StatusCard