import Task from "../models";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "../styles/components/TasksListItem.module.css";
import { getTimeAgo, mergeClasses } from "../utils/utils";
import useAlterTasksList from "../hooks/alterTasksList";
import SuperDetails from "./UI/SuperDetails";
import SuperButtonIcon from "./UI/SuperButtonIcon";
import IconsNames from "../utils/icons";

interface TasksListItemProps {
  task: Task;
  editMode: boolean;
  setEditMode: (val: boolean) => void;
}

export default function TasksListItem({
  task,
  editMode,
  setEditMode,
}: TasksListItemProps) {
  const { title, remove, editIconClass } = styles;
  const { Edit, DoneOutline } = IconsNames;

  const { alterTask, deleteTask } = useAlterTasksList();

  const switchTaskCompletion = (e: ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    const newTask = new Task(task);
    newTask.completed ? newTask.undone() : newTask.done();
    alterTask(newTask.id, newTask);
  };

  const changeTaskTitle = () => {
    const newTask = new Task(task);
    newTask.title = newTitle;
    alterTask(newTask.id, newTask);
  };

  let titleClass, infoTextClass: string;
  if (task.completed) {
    titleClass = mergeClasses("strikethrough text-disabled", title);
    infoTextClass = "text-disabled";
  } else {
    titleClass = title;
    infoTextClass = "";
  }

  const completionTimeAgo = task.completionDate
    ? getTimeAgo(Date.now() - task.completionDate.getTime())
    : "";
  const creationTimeAgo = getTimeAgo(Date.now() - task.creationDate.getTime());

  const [newTitle, setNewTitle] = useState(task.title);

  const [editIcon, setEditIcon] = useState(Edit);

  const inputRef = useRef(null);

  const [localEditMode, setLocalEditMode] = useState(false);

  const editClick = () => {
    if (editIcon === Edit && !editMode) {
      setLocalEditMode(true);
      setEditMode(true);
      setEditIcon(DoneOutline);
    } else if (editIcon === DoneOutline) {
      setLocalEditMode(false);
      setEditMode(false);
      setEditIcon(Edit);
      changeTaskTitle();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current as HTMLInputElement;
      if (!input.disabled) input.focus();
      else input.blur();
    }
  });

  return (
    <SuperDetails disabled={task.completed}>
      <>
        <input
          type="text"
          ref={inputRef}
          value={newTitle}
          disabled={!localEditMode}
          onChange={(e) => setNewTitle(e.target.value)}
          className={titleClass}
        />
        <SuperButtonIcon
          iconName={editIcon}
          onClick={editClick}
          className={editIconClass}
        />
        <input
          type="checkbox"
          onChange={switchTaskCompletion}
          checked={task.completed}
        />
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
