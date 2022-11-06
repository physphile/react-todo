import SuperButtonIcon from "./UI/SuperButtonIcon";
import { useState } from "react";
import IconsNames from "../utils/icons";
import styles from "../styles/components/TaskInput.module.css";
import useAlterTasksList from "../hooks/alterTasksList";
import Task from "../models";

export default function TaskInput() {
  const { Add } = IconsNames;

  const { input, form, button } = styles;

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { pushTask } = useAlterTasksList();

  const addTask = () => {
    pushTask(new Task({ title: newTaskTitle.trim() }));
    setNewTaskTitle("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={form}>
      <input
        type="text"
        placeholder="Add new task"
        className={input}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <SuperButtonIcon iconName={Add} className={button} onClick={addTask} />
    </form>
  );
}
