import {format} from 'date-fns';
import {Card} from "../Card/Card";
import {Label} from "../Label/Label";
import {Date} from "../Date/Date";
import {TaskProgress} from "../TaskProgress/TaskProgress";
import {BsFlag, BsListCheck} from "react-icons/bs";
import {TbDots, TbMessages} from "react-icons/tb";
import {IUser} from "../../types";
import {Avatar} from "../Avatar/Avatar";

interface TodoCardProps {
    name: string;
    tags: string[];
    date: Date;
    assignees: IUser[];
    description: string;
}

export const TodoCard = ({name, tags, date, description, assignees}: TodoCardProps) => {
    return (
                <Card >
                    <>
                        <div className="flex flex-row justify-between my-1" >
                            <div>
                                {tags.map((tag: string) => <Label key={tag} text={tag}/>)}
                            </div>
                            <div className="w-7 flex justify-center items-center">
                                <TbDots size="1.3em" color="grey"/>
                            </div>

                        </div>
                        <h2>{name}</h2>
                        <div className="text-xs mt-2">
                            {description}
                        </div>
                        <div className="flex flex-row justify-between justify-center items-center my-2">
                            <div className="flex flex-row"><BsFlag color="grey" size="0.8em"/><Date
                                date={format(date, "dd MMM")}/></div>
                            <div className="flex flex-row"><BsListCheck color="grey"/><TaskProgress tasksDone="2/10"/></div>
                        </div>
                        <div className="flex flex-row justify-between justify-center items-center mt-8">
                            <div className="flex flex-row justify-start ml-1">
                                {assignees.map((assignee: IUser) => <Avatar key={assignee.id}
                                                                            id={assignee.id}
                                                                            firstName={assignee.firstName}
                                                                            lastName={assignee.lastName}
                                                                            avatar={assignee.avatar}/>)}
                            </div>
                            <TbMessages/>
                        </div>
                    </>
                </Card>
    )
}