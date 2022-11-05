import TasksList from "../components/TasksList";
import styles from "./PageHome.module.css";
import Task from "../models";
import SuperButtonIcon from "../UI/SuperButtonIcon";
import IconsNames from "../icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import storeTasksList from "../store/tasksList";

export default function PageHome() {
  const { main, input, form, h2, button } = styles;
  const [tasksList, setTasksList] = useRecoilState<Task[]>(storeTasksList);
  const { Add } = IconsNames;

  let [newTask, setNewTask] = useState("");

  const addNewTask = (text: string) => {
    setTasksList([
      ...tasksList,
      {
        title: text,
        completed: false,
        id: Math.round(Math.random() * Number.MAX_SAFE_INTEGER),
        creationDate: new Date(),
        completionDate: null,
      },
    ]);
  };

  return (
    <main className={["container", main].join(" ")}>
      <h2 className={h2}>Todo list</h2>
      <form onSubmit={(e) => e.preventDefault()} className={form}>
        <input
          type="text"
          placeholder="Add new task"
          className={input}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <SuperButtonIcon
          iconName={Add}
          className={button}
          onClick={() => addNewTask(newTask)}
        />
      </form>
      <TasksList tasksList={tasksList} />
    </main>
  );
}
