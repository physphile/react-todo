import Task from "../models"
import TasksListItem from "./TasksListItem";
import "./TasksList.css"

interface TasksListProps {
    tasksList: Task[];
}

export default function TasksList ({tasksList}: TasksListProps) {
    return (
        <div className="tasks-list">
            {tasksList.map(task => (
                <TasksListItem task={task} key={task.id}/>
            ))}
        </div>
    )
}