
export const Date = ({date}:{date: string}) => {
    return (
        <div className="flex flex-row justify-between ml-1">
            <div className="text-xs text-stone-400">{date}</div>
        </div>
    )
}