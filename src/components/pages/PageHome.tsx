import TasksList from "../TasksList";
import styles from "../../styles/pages/PageHome.module.css";
import TaskInput from "../TaskInput";
import { mergeClasses } from "../../utils/utils";
import {useTasks} from "../../hooks/TasksList";
import TasksFilterByCompleteness from "../TasksFilterByCompleteness";
import {useMemo, useState} from "react";
import Task from "../../models";

export enum Filters {
    Active = "active",
    Completed = "completed",
    All = "all"
}

const getFilteredTasks = (filter: Filters, tasks: Task[]) => {
    const {Active, All, Completed} = Filters;
    switch (filter) {
        case Active:
            return tasks.filter(task => !task.completed);
        case All:
            return tasks;
        case Completed:
            return tasks.filter(task => task.completed);
    }
}

export default function PageHome() {
  const {tasks} = useTasks();

  const mainClass = mergeClasses("container", styles.main);

  const filtersState = useState(Filters.All);
  const filter = filtersState[0];

  const filteredTasks = useMemo(() => {
    return getFilteredTasks(filter, tasks)
  }, [filter, tasks]);

  return (
    <main className={mainClass}>
      <h2 className={styles.h2}>
          Todo list
      </h2>
      <TaskInput />
        <TasksFilterByCompleteness filterState={filtersState}/>
      <TasksList tasksList={filteredTasks} />
    </main>
  );
}
