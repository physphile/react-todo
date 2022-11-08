import SuperButtonIcon from "./UI/SuperButtonIcon";
import {useEffect, useRef, useState} from "react";
import IconsNames from "../utils/icons";
import styles from "../styles/components/TaskInput.module.css";
import Task from "../models";
import {useTasks} from "../hooks/TasksList";

export default function TaskInput() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const inputRef = useRef(null);

  const { push } = useTasks();
  useEffect(() => {
      const input = inputRef.current! as HTMLInputElement;
      input.focus();
  }, [])

  const addTask = () => {
      const newTitle = newTaskTitle.trim();
      if (newTitle !== "") {
          const newTask = new Task({ title:  newTitle})
          push(newTask);
          setNewTaskTitle("");
      }
  };

  return (
    <form
        onSubmit={e => e.preventDefault()}
        className={styles.form}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Add new task"
        className={styles.input}
        value={newTaskTitle}
        onChange={e => setNewTaskTitle(e.target.value)}
      />
      <SuperButtonIcon
          iconName={IconsNames.Add}
          className={styles.button}
          onClick={addTask}
      />
    </form>
  );
}
