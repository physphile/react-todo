import TasksList from "../TasksList";
import styles from "../../styles/pages/PageHome.module.css";
import Task from "../../models";
import { useRecoilState } from "recoil";
import storeTasksList from "../../store/tasksList";
import TaskInput from "../TaskInput";
import { mergeClasses } from "../../utils/utils";

export default function PageHome() {
  const { main, h2 } = styles;
  const [tasksList] = useRecoilState<Task[]>(storeTasksList);

  const mainClass = mergeClasses("container", main);

  return (
    <main className={mainClass}>
      <h2 className={h2}>Todo list</h2>
      <TaskInput />
      <TasksList tasksList={tasksList} />
    </main>
  );
}
