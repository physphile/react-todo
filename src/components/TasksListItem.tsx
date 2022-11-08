import Task from "../models";
import SuperDetails from "./UI/SuperDetails";
import {useTasks} from "../hooks/TasksList";
import TasksListItemInfo from "./TasksListItemInfo";
import TasksListItemInput from "./TasksListItemInput";

type Props = {
  task: Task;
}

export default function TasksListItem({task}: Props) {
  const {done, undone} = useTasks();

  const switchTaskCompletion = () => {
    task.completed ? undone(task.id) : done(task.id);
  };

  return (
    <SuperDetails disabled={task.completed}>
      <>
        <TasksListItemInput task={task} />
        <input
          type="checkbox"
          onChange={switchTaskCompletion}
          checked={task.completed}
        />
      </>
      <TasksListItemInfo task={task} />

    </SuperDetails>
  );
}
