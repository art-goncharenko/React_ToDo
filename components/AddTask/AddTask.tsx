import {BsFillPlusCircleFill, BsThreeDotsVertical} from "react-icons/bs";
import {Card} from "../Card/Card";

interface AddTaskProps {
    name: string;
    count: number;
}

export const AddTask = ({name, count}: AddTaskProps) => {
    return (
        <Card>
            <div className="flex justify-between">
                <div>
                    <h2>{name}</h2>
                    <div className="text-xs text-stone-400 mt-2">
                        <span> {count} tasks </span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mr-3">
                        <BsFillPlusCircleFill size="1.9em" color="#0E8BD0"/>
                    </div>
                    <div className="mr-3">
                        <BsThreeDotsVertical size="1.3em"/>
                    </div>
                </div>
            </div>
        </Card>
    )
}