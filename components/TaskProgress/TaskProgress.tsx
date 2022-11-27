export const TaskProgress = ({tasksDone}:{tasksDone:string}) => {
    return (
        <div className="ml-1 text-xs text-stone-400">
            {tasksDone}
        </div>
    )
}