import React from 'react';
import {AddTask} from "../AddTask/AddTask";
import {ITask} from "../../types";
import {TodoCard} from "../TodoCard/TodoCard";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export const TasksColumn = ({name, tasks, id}: { name: string, tasks: ITask[], id: string }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center mb-10">
                <AddTask name={name} count={tasks.length}/>
            </div>
            <Droppable droppableId={id}>
                {(provided: any, snapshot: any) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex flex-col items-center min-h-screen"
                        style={{
                            background: snapshot.isDraggingOver
                                ? "#f0f0f1"
                                : "#F9F9FB",
                        }}>
                        {tasks.map((task: ITask, index: number) =>
                            <Draggable draggableId={task.id} key={task.id} index={index}>
                                {(provided: any, snapshot: any) => (
                                    <div ref={provided.innerRef}
                                         {...provided.draggableProps}
                                         {...provided.dragHandleProps}
                                         className="rounded-2xl"
                                         style={{
                                             border: snapshot.isDragging
                                                 ? "1px dotted black"
                                                 : "transparent",
                                                ...provided.draggableProps.style
                                         }}
                                    >
                                        <TodoCard
                                            name={task.name}
                                            tags={task.tags}
                                            date={task.date}
                                            assignees={task.assignees}
                                            description={task.description}
                                        />
                                    </div>
                                )}
                            </Draggable>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}