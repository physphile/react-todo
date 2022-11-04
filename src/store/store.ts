import {atom} from "recoil";
import Task from "../models";

const emptyTasksList: Task[] = []

const TasksList = atom({
    key: 'TaskList',
    default: emptyTasksList
})

export default TasksList