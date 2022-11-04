import TasksList from "../components/TasksList";
import useTasksList from "../hooks/tasksList";
import "./PageHome.css"

export default function PageHome () {
    const {tasksList} = useTasksList();

    return (
        <main className="container">
            <h2>Список дел</h2>
            <hr/>
            <TasksList tasksList={tasksList}/>
        </main>
    )
}