import Task from "../models";
import SuperButtonIcon from "../UI/SuperButtonIcon";
import { useRecoilState } from "recoil";
import storeTasksList from "../store/tasksList";
import { useState } from "react";
import styles from "./TasksListItem.module.css";
import IconsNames from "../icons";
import { getTimeAgo } from "../utils";

interface TasksListItemProps {
  task: Task;
}

export default function TasksListItem({ task }: TasksListItemProps) {
  const { summary, details, h3, disabled } = styles;

  const [tasksList, setTasksList] = useRecoilState<Task[]>(storeTasksList);
  const deleteTask = (id: number): void => {
    setTasksList(removeItemWithId(tasksList, id));
  };

  const switchTaskCompletion = (id: number): void => {
    const newTask = Object.assign({}, task);
    if (newTask) {
      newTask.completed = !newTask.completed;
      newTask.completionDate = new Date();
      setTasksList(replaceItemWithId(tasksList, id, newTask));
    }
  };

  const { ExpandMore, ExpandLess } = IconsNames;
  const [summaryIcon, setSummaryIcon] = useState(ExpandMore);
  const switchSummaryIcon = (): void => {
    const newSummaryIcon = summaryIcon === ExpandMore ? ExpandLess : ExpandMore;
    setSummaryIcon(newSummaryIcon);
  };

  return (
    <details className={[details, task.completed ? disabled : ""].join(" ")}>
      <summary className={summary}>
        <SuperButtonIcon
          iconName={summaryIcon}
          className={[
            "no-pointer-events",
            task.completed ? "high-emphasis-disabled" : "high-emphasis",
          ].join(" ")}
          onClick={switchSummaryIcon}
        />
        <h3
          className={task.completed ? " strikethrough text-disabled " + h3 : h3}
          onClick={switchSummaryIcon}
        >
          {task.title}
        </h3>
        <input
          type="checkbox"
          onChange={(e) => {
            e.nativeEvent.stopPropagation();
            switchTaskCompletion(task.id);
          }}
        />
      </summary>
      <p className={task.completed ? "text-disabled" : ""}>
        Created{" "}
        {task.creationDate
          ? getTimeAgo(Date.now() - task.creationDate.getTime())
          : ""}
      </p>
      {task.completed && (
        <p className={task.completed ? "text-disabled" : ""}>
          Completed{" "}
          {task.completionDate
            ? getTimeAgo(Date.now() - task.completionDate.getTime())
            : ""}
        </p>
      )}
      <button
        style={{
          fontWeight: "bold",
          color: "var(--color-error)",
          fontSize: "14px",
        }}
        onClick={() => deleteTask(task.id)}
      >
        Remove
      </button>
    </details>
  );
}

function replaceItemWithId(arr: Array<any>, id: number, newValue: any) {
  const index = arr.findIndex((x) => x.id === id);
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemWithId(arr: Array<any>, id: number) {
  const index = arr.findIndex((x) => x.id === id);
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
