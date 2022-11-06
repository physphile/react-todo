import { useRecoilState } from "recoil";
import storeTasksList from "../store/tasksList";
import Task from "../models";

interface IAlterFunctions {
  pushTask: (newTask: Task) => void;
  alterTask: (id: number, newTask: Task) => void;
  deleteTask: (id: number) => void;
}

export default function useAlterTasksList(): IAlterFunctions {
  const [tasksList, setTasksList] = useRecoilState<Task[]>(storeTasksList);

  const deleteTask = function (id: number): void {
    setTasksList(tasksList.filter((x) => x.id !== id));
  };
  const alterTask = function (id: number, newTask: Task): void {
    const index = tasksList.findIndex((x) => x.id === id);
    setTasksList([
      ...tasksList.slice(0, index),
      newTask,
      ...tasksList.slice(index + 1),
    ]);
  };

  const pushTask = function (newTask: Task): void {
    setTasksList([...tasksList, newTask]);
  };

  return { pushTask, alterTask, deleteTask };
}
