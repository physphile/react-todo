import TasksList from '../components/TasksList';
import useTasksList from '../hooks/tasksList';
import styles from './PageHome.module.css';

export default function PageHome() {
  console.log(styles);
  const { tasksList } = useTasksList();

  return (
    <main className="container">
      <h2>Todo list</h2>
      <hr />
      <TasksList tasksList={tasksList} />
    </main>
  );
}
