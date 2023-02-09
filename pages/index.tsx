import React from 'react';
import {IStatus, ITask, IUser} from "../types";
import {useState} from "react";
import {TasksColumn} from "../components/TasksColumn/TasksColumn";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const initialUsers: IUser[] = [
    {
        id: "bf7c1fe6-d669-414e-b066-e9733f0de7a8",
        firstName: "Artem",
        lastName: "Goncharenko",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        id: "bf7c1fe6-d669-414e-b066-e9733f0de7a9",
        firstName: "Alex",
        lastName: "Front-end",
        avatar: ""
    }
]

const initialStatuses: IStatus[] = [
    {
        id: "bf7c1fe6-d669-414e-b066-e9733f0de7a1",
        name: "To Do",
        order: 0
    },
    {
        id: "bf7c1fe6-d669-414e-b066-e9733f0de7a2",
        name: "In Progress",
        order: 1
    },
    {
        id: "bf7c1fe6-d669-414e-b066-e9733f0de7a3",
        name: "Done",
        order: 2
    }

]

const initialTasks: ITask[] = [
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
        name: "Finish Avatar component",
        tags: ["Component", "React"],
        date: new Date(),
        assignees: initialUsers,
        description: "props drilling is a pain",
        status: initialStatuses[0].id,
        order: 0
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a9",
        name: "map over users",
        tags: ["React", "users"],
        date: new Date(),
        assignees: initialUsers,
        description: "Create a new project using Next.js and Tailwind CSS",
        status: initialStatuses[1].id,
        order: 0,
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a10",
        name: "Edit CSS styles for proper alignment",
        tags: ["GIT", "work"],
        date: new Date(),
        assignees: initialUsers,
        description: "play with flexbox",
        status: initialStatuses[2].id,
        order: 0,
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a11",
        name: "Watch drag and drop tutorial",
        tags: ["React", "Drag and Drop"],
        date: new Date(),
        assignees: initialUsers,
        description: "You can do it!",
        status: initialStatuses[0].id,
        order: 1,
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a12",
        name: "Fix drag and drop bugs",
        tags: ["React", "Drag and Drop"],
        date: new Date(),
        assignees: initialUsers,
        description: "You can do it!",
        status: initialStatuses[1].id,
        order: 1,
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a9s",
        name: "Finish Label component",
        tags: ["Component", "React"],
        date: new Date(),
        assignees: initialUsers,
        description: "label shmabel",
        status: initialStatuses[0].id,
        order: 2
    },
]

export default function Home() {
    const [tasks, setTasks] = useState(initialTasks)
    const [statuses, setStatuses] = useState(initialStatuses)
    const sortedStatuses = statuses.sort((a, b) => a.order - b.order)

    const onDragEnd = (result: any) => {
        const {source, destination, draggableId} = result
        console.log("source:", source, "dest:", destination, draggableId)
        const newStatusId = destination.droppableId  /// this is newStatusId
        const newOrder = destination.index

        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }
        const newTasks = tasks.map(task => {
            if (task.id === draggableId) { // thats what we change when drag task, what will happen with tasks we don't drag
                task.status = newStatusId
                task.order = newOrder
            } else if (task.status === newStatusId && destination.index < source.index) {
                task.order += 1
            } else if (task.status === newStatusId && destination.index > source.index) {
                task.order -= 1
            } 
            else {
                task.status
                // console.log("Does it work?",task.name, "index:", destination.index,"order:", task.order)

            }
            return task
        })
        console.log(newTasks.filter((task) => task.status === newStatusId))
        setTasks(newTasks)
    }

    return (
        <div className="flex flex-row pl-8 gap-10">
            <DragDropContext
                onDragEnd={onDragEnd}>
                {sortedStatuses.map(({id: statusId}) => {
                    const statusName = statuses.find(status => status.id === statusId)?.name as string
                    const filteredTasks = tasks.filter(task => task.status === statusId).sort((a, b) => a.order - b.order)
                    return <TasksColumn key={statusId}
                                        id={statusId}
                                        name={statusName}
                                        tasks={filteredTasks}/>
                })}
            </DragDropContext>
        </div>
    )
}