import TasksList from "../TasksList";
import styles from "../../styles/pages/PageHome.module.css";
import TaskInput from "../TaskInput";
import { mergeClasses } from "../../utils/utils";
import {useTasks} from "../../hooks/TasksList";

export default function PageHome() {
  const {tasks} = useTasks();

  const mainClass = mergeClasses("container", styles.main);

  return (
    <main className={mainClass}>
      <h2 className={styles.h2}>
          Todo list
      </h2>
      <TaskInput />
      <TasksList tasksList={tasks} />
    </main>
  );
}
