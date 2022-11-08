import SuperButtonGroup from "./UI/SuperButtonGroup";
import {Filters} from "./pages/PageHome";
import styles from "../styles/components/TasksFilterByCompleteness.module.css"

type Props = {
    filterState: Array<any>
}

export default function TasksFilterByCompleteness ({filterState}: Props) {
    const [filter, setFilter] = filterState;

    return (
        <SuperButtonGroup className={styles.group}>
            <button
                onClick={() => setFilter(Filters.All)}
                className={filter === Filters.All ? styles.active : ""}
            >
                All
            </button>
            <button
                onClick={() => setFilter(Filters.Active)}
                className={filter === Filters.Active ? styles.active : ""}
            >
                Active
            </button>
            <button
                onClick={() => setFilter(Filters.Completed)}
                className={filter === Filters.Completed ? styles.active : ""}
            >
                Completed
            </button>
        </SuperButtonGroup>
    )
}