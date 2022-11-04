import Task from "../models";
import "./TasksListItem.css"
import SuperButtonIcon from "../UI/SuperButtonIcon";
import {useRecoilState} from "recoil";
import TasksList from "../store/store";
import {useState} from "react";

interface TasksListItemProps {
    task: Task
}

export default function TasksListItem({task}: TasksListItemProps) {
    const [tasksList, setTasksList] = useRecoilState<Task[]>(TasksList)
    const deleteTask = (id: number) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    }
    const [summaryIcon, setSummaryIcon] = useState("expand_more")
    const changeSummaryIcon = () => {
        const newSummaryIcon = summaryIcon === "expand_more" ? "expand_less" : "expand_more";
        setSummaryIcon(newSummaryIcon);
    }

    return (
        <details className="tasks-list-item-details">
            <summary className="tasks-list-item-summary" onClick={changeSummaryIcon}>
                <SuperButtonIcon iconName={summaryIcon} onClick={() => {}} className={'no-pointer-events high-emphasis'}/>
                <h3 className="tasks-list-item-title">{task.title}</h3>
                <SuperButtonIcon iconName="delete" onClick={() => deleteTask(task.id)} className={'helper'}/>
            </summary>
            <table className="tasks-list-item-info-table">
                <tr>
                    <td className="tasks-list-item-info-cell">Created:</td>
                    <td className="tasks-list-item-info-cell">22.10.2022 14:58</td>
                </tr>
                <tr>
                    <td className="tasks-list-item-info-cell">Done:</td>
                    <td className="tasks-list-item-info-cell">28.10.2022 20:22</td>
                </tr>
            </table>

        </details>

    )
}