import Task from "../models";
import TasksListItem from "./TasksListItem";
import styles from "../styles/components/TasksList.module.css";

interface TasksListProps {
  tasksList: Task[];
}

export default function TasksList({ tasksList }: TasksListProps) {
  return (
    <div className={styles.tasksList}>
      {tasksList.map((task) => (
        <TasksListItem task={task} key={task.id.toString()} />
      ))}
    </div>
  );
}
