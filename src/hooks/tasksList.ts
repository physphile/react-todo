import {useEffect} from "react";
import Task from "../models";
import axios from "axios";
import {useRecoilState} from "recoil";
import TasksList from "../store/store";

export default function useTasksList () {
    const requestUrl = "https://jsonplaceholder.typicode.com/todos";
    const [tasksList, setTasksList] = useRecoilState<Task[]>(TasksList);

    useEffect(() => {
        axios.get<Task[]>(requestUrl).then(response => {
            setTasksList(response.data);
        })
    }, [setTasksList])

    return {tasksList}
}