import { useRecoilState } from "recoil";
import storeTasksList from "../store/tasksList";
import { useEffect } from "react";
import Task from "../models";

export default function useLoadTasksList() {
  const setTasksList = useRecoilState(storeTasksList)[1];

  useEffect(() => {
    const data = localStorage.getItem("tasksList");

    if (data) {
      const newTasksList = JSON.parse(data).map(
        (x: Task) =>
          new Task({
            title: x.title,
            id: x.id,
            completed: x.completed,
            completionDate: x.completionDate
              ? new Date(x.completionDate)
              : undefined,
            creationDate: new Date(x.creationDate),
          })
      );
      setTasksList(newTasksList);
      console.log("Tasks from localStorage were loaded");
    } else {
      console.log("localStorage is empty");
    }
  }, [setTasksList]);
}
