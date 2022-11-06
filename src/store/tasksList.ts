import { atom } from "recoil";
import Task from "../models";

const emptyTasksList: Task[] = [];

const storeTasksList = atom({
  key: "TaskList",
  default: emptyTasksList,
});

export default storeTasksList;
