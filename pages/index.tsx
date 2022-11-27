import {TodoCard} from "../components/TodoCard/TodoCard";
import {AddTask} from "../components/AddTask/AddTask";
import {ITask, IUser} from "../types";
import {useState} from "react";

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

const initialTasks: ITask[] = [
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
        name: "Finish Avatar component",
        tags: ["Component", "React"],
        date: new Date(),
        assignees: initialUsers,
        description: "props drilling is a pain",
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a9",
        name: "map over users",
        tags: ["React", "users"],
        date: new Date(),
        assignees: initialUsers,
        description: "Create a new project using Next.js and Tailwind CSS",
    },
    {
        id: "af7c1fe6-d669-414e-b066-e9733f0de7a10",
        name: "Edit CSS styles for proper alignment",
        tags: ["GIT", "work"],
        date: new Date(),
        assignees: initialUsers,
        description: "play with flexbox",
    }
]


export default function Home() {
    const [tasks, setTasks] = useState(initialTasks)

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex justify-center items-center mb-10">
                <AddTask/>
            </div>
            <div className="flex flex-col items-center">
                {tasks.map((task: ITask) => <TodoCard key={task.id}
                                                      name={task.name}
                                                      tags={task.tags}
                                                      date={task.date}
                                                      assignees={task.assignees}
                                                      description={task.description}/>)}
            </div>
        </div>

    )
}
