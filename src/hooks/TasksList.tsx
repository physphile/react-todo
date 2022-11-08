import {createContext, ReactNode, useContext, useEffect, useReducer} from "react";
import Task from "../models";

enum ActionTypes {
    Push = "push",
    Done = "done",
    Undone = "undone",
    SetTitle = "setTitle",
    Remove = "remove",
    SetTasks = "setTasks"
}

type State = Array<Task>
type Action = {
    type: ActionTypes,
    id?: number,
    task?: Task,
    title?: string,
    tasks?: Task[]
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionTypes.Push: return [ action.task!, ...state]
        case ActionTypes.Done:
            return state.map(task => task.id === action.id ? task.done() : task);
        case ActionTypes.Undone:
            return state.map(task => task.id === action.id ? task.undone() : task);
        case ActionTypes.SetTitle:
            return state.map(task => task.id === action.id ? task.setTitle(action.title!) : task);
        case ActionTypes.Remove:
            const newState = state.filter(task => task.id !== action.id);
            if (newState.length === 0) localStorage.setItem("tasks", "[]");
            return state.filter(task => task.id !== action.id);
        case ActionTypes.SetTasks:
            return action.tasks!;
        default: return state;
    }
}

const TasksListContext = createContext({
    tasks: [] as Task[],
    push: (task: Task) => {},
    done: (id: number) => {},
    undone: (id: number) => {},
    setTitle: (id: number, title: string) => {},
    remove: (id: number) => {},
    setTasks: (tasks: Task[]) => {}
})

type Props =  {
    children: ReactNode
}

export function useTasks() {
    return useContext(TasksListContext);
}

export default function TasksListProvider({children}: Props) {
    const [state, dispatch] = useReducer(reducer, [])

    const push = (task: Task) => dispatch(({type: ActionTypes.Push, task}))
    const done = (id: number) => dispatch({type: ActionTypes.Done, id})
    const remove = (id: number) => dispatch({type: ActionTypes.Remove, id})
    const undone = (id: number) => dispatch({type: ActionTypes.Undone, id})
    const setTitle = (id: number, title: string) => dispatch({type: ActionTypes.SetTitle, id, title})
    const setTasks = (tasks: Task[]) => dispatch({type: ActionTypes.SetTasks, tasks});

    useEffect(() => {
        const data = localStorage.getItem("tasks")
        if (data) setTasks(Task.parse(data))
    }, [])

    useEffect(() => {
        if (state.length !== 0) {
            localStorage.setItem("tasks", `[${state.toString()}]`)
        }
    }, [state])

    return (
        <TasksListContext.Provider value={{tasks: state, push, done, undone, setTitle, remove, setTasks}}>
            {children}
        </TasksListContext.Provider>
    )
}

