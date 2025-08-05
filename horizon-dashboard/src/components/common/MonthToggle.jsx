function MonthToggle() {
    return (
        <div className=" flex items-center gap-2 p-2 text-xs bg-body rounded-primary text-secondary-gray">
            <span class="material-symbols-outlined">
                calendar_today
            </span>
            <span>
                This Month
            </span>
        </div>
    )
}
export default MonthToggle