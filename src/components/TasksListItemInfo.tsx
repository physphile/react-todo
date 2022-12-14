import styles from "../styles/components/TasksListItemInfo.module.css";
import {getTimeAgo} from "../utils/utils";
import Task from "../models";
import {useTasks} from "../hooks/TasksList";
import SuperInputTags from "./UI/SuperInputTags";

type Props = {
    task: Task
}

export default function TasksListItemInfo ({task}: Props) {
    const {remove} = useTasks();

    const infoTextClass = task.completed ? "text-disabled" : "";

    const completionTimeAgo = getTimeAgo(task.completionDate);
    const creationTimeAgo = getTimeAgo(task.creationDate);

    return (
        <>
            <p className={infoTextClass} style={{marginTop: ".5em"}}>
                {task.title}
            </p>
            <p className={infoTextClass}>
                Created {creationTimeAgo}
            </p>
            {task.completed && (
                <p className={infoTextClass}>
                    Completed {completionTimeAgo}
                </p>
            )}
            <SuperInputTags task={task}/>
            <button
                className={styles.remove}
                onClick={() => remove(task.id)}
            >
                Remove
            </button>
        </>
    )
}