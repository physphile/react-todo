import Task from "../models";
import TasksListItem from "./TasksListItem";
import styles from "../styles/components/TasksList.module.css";
import EditProvider from "../hooks/EditContext";

type Props = {
  tasksList: Task[];
}

export default function TasksList({ tasksList }: Props) {
  return (
        <EditProvider>
            <div className={styles.tasksList}>
                {tasksList.map((task) => (
                    <TasksListItem
                        task={task}
                        key={task.id.toString()}
                    />
                ))}
            </div>
        </EditProvider>
  );
}
