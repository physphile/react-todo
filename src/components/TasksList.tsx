import Task from "../models";
import TasksListItem from "./TasksListItem";
import styles from "../styles/components/TasksList.module.css";
import { useState } from "react";

interface TasksListProps {
  tasksList: Task[];
}

export default function TasksList({ tasksList }: TasksListProps) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={styles.tasksList}>
      {tasksList.map((task) => (
        <TasksListItem
          task={task}
          key={task.id.toString()}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ))}
    </div>
  );
}
