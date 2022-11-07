import Task from "../models";
import SuperDetails from "./UI/SuperDetails";
import {useTasks} from "../hooks/TasksList";
import TaskListItemInfo from "./TaskListItemInfo";
import TaskListItemInput from "./TaskListItemInput";

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
        <TaskListItemInput task={task} />
        <input
          type="checkbox"
          onChange={switchTaskCompletion}
          checked={task.completed}
        />
      </>
      <TaskListItemInfo task={task} />

    </SuperDetails>
  );
}
