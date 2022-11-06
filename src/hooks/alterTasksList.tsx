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
    const newTasksList = tasksList.filter((x) => x.id !== id);
    setTasksList(newTasksList);
    updateLocalStorage(newTasksList);
    console.log(`Delete task with id=${id}`);
  };
  const alterTask = function (id: number, newTask: Task): void {
    const index = tasksList.findIndex((x) => x.id === id);
    console.log(index);
    const newTasksList = [
      ...tasksList.slice(0, index),
      newTask,
      ...tasksList.slice(index + 1),
    ];
    setTasksList(newTasksList);
    updateLocalStorage(newTasksList);
    console.log(`Altered the task with id=${id}`);
  };

  const pushTask = function (newTask: Task): void {
    const newTasksList = [...tasksList, newTask];
    setTasksList(newTasksList);
    updateLocalStorage(newTasksList);
    console.log(`Pushed the task with id=${newTask.id}`);
  };

  return { pushTask, alterTask, deleteTask };
}

function updateLocalStorage(newTasksList: Task[]) {
  console.log(newTasksList);
  localStorage.setItem("tasksList", `[${newTasksList.toString()}]`);
  console.log("Local storage was updated");
}
