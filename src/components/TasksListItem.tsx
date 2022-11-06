import Task from "../models";
import { ChangeEvent } from "react";
import styles from "../styles/components/TasksListItem.module.css";
import { getTimeAgo, mergeClasses } from "../utils/utils";
import useAlterTasksList from "../hooks/alterTasksList";
import SuperDetails from "./UI/SuperDetails";

interface TasksListItemProps {
  task: Task;
}

export default function TasksListItem({ task }: TasksListItemProps) {
  const { h3, remove } = styles;

  const { alterTask, deleteTask } = useAlterTasksList();

  const switchTaskCompletion = (e: ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    const newTask = new Task(task.get());
    newTask.completed ? newTask.undone() : newTask.done();
    alterTask(newTask.id, newTask);
  };

  let h3Class, infoTextClass: string;
  if (task.completed) {
    h3Class = mergeClasses("strikethrough text-disabled", h3);
    infoTextClass = "text-disabled";
  } else {
    h3Class = h3;
    infoTextClass = "";
  }

  const completionTimeAgo = task.completionDate
    ? getTimeAgo(Date.now() - task.completionDate.getTime())
    : "";
  const creationTimeAgo = getTimeAgo(Date.now() - task.creationDate.getTime());

  return (
    <SuperDetails disabled={task.completed}>
      <>
        <h3 className={h3Class}>{task.title}</h3>
        <input type="checkbox" onChange={switchTaskCompletion} />
      </>
      <>
        <p className={infoTextClass}>Created {creationTimeAgo}</p>
        {task.completed && (
          <p className={infoTextClass}>Completed {completionTimeAgo}</p>
        )}
        <button className={remove} onClick={() => deleteTask(task.id)}>
          Remove
        </button>
      </>
    </SuperDetails>
  );
}
