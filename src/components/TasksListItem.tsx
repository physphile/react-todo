import Task from "../models";
import "./TasksListItem.css"
import SuperButtonIcon from "../UI/SuperButtonIcon";
import {useRecoilState} from "recoil";
import TasksList from "../store/store";

interface TasksListItemProps {
    task: Task
}

export default function TasksListItem({task}: TasksListItemProps) {
    const [tasksList, setTasksList] = useRecoilState<Task[]>(TasksList)
    const deleteTask = (id: number) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    }
    return (
        <div className="tasks-list-item">
            <h3>{task.title}</h3>
            <SuperButtonIcon iconName="delete" onClick={() => deleteTask(task.id)}/>
        </div>
    )
}